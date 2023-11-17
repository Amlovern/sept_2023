const express = require('express');
const router = express.Router();
const { Op } = require("sequelize");
const { Hero, DeityStatus, Ability } = require('../db/models')

router.get('/', async (req, res) => {
    const heros = await Hero.findAll({
        attributes: ['name', 'regionOfOrigin', 'yearOfOrigin'],
        order: [['regionOfOrigin'], ['name', 'DESC']]
    });

    res.json(heros);
});

router.get('/:heroId(\\d+)', async (req, res) => {
    console.log('inside heroId', req.params)
    const hero = await Hero.findByPk(req.params.heroId);

    res.json(hero)
});

router.get('/association/getter', async (req, res) => {
    const heros = await Hero.findAll();
    const resArr = [];
    
    for (let i = 0; i < heros.length; i++) {
        let hero = heros[i];
        const deityStatus = await hero.getDeityStatus();
        hero = hero.toJSON()
        hero.deityStatus = deityStatus;
        resArr.push(hero)
    }

    res.json({
        heros: resArr
    });
})

router.post('/association/create', async (req, res) => {
    const status = await DeityStatus.findOne({
        where: {
            name: 'human'
        }
    });
    const newHero = await status.createHero({
        name: 'Anthony',
        famousFeatId: 8,
        regionOfOrigin: 'USA',
        weakness: 'Runescape',
        mortalEnemy: 'Var',
        yearOfOrigin: 1992
    });

    res.json(newHero)
});

router.post('/association/add', async (req, res) => {
    const hero = await Hero.findOne({
        where: {
            name: 'Anthony'
        }
    });

    const ability = await Ability.findOne({
        where: {
            name: 'super strength'
        }
    })

    const newPowers = await hero.addAbility(ability.id);

    res.json(newPowers)
});

router.get('/aggregate', async (req, res) => {
    let hero = await Hero.findByPk(1);
    const minYear = await Hero.min('yearOfOrigin', {
        where: {
            deityStatusId: 3
        }
    });
    const maxYear = await Hero.max('yearOfOrigin');
    const numHeros = await Hero.count();
    // const numHeros = heros.length;
    const yearSum = await Hero.sum('yearOfOrigin');
    const avgYear = yearSum / numHeros;

    hero = hero.toJSON();
    hero.minYear = minYear;
    hero.maxYear = maxYear;
    hero.numHeros = numHeros;
    hero.yearSum = yearSum;
    hero.avgYear = avgYear;

    res.json({
        hero
    })
})

// take in a query string, return all heroes
// whose name includes that string
router.get('/search', async (req, res) => {
    const { name } = req.query;
    const heros = await Hero.findAll({
        attributes: ['name', 'regionOfOrigin', 'mortalEnemy'],
        where: {
            name: {
                [Op.substring]: name
            }
        }
    });

    res.json(heros)
});

router.get('/deitystatus', async (req, res) => {
    const heros = await Hero.findAll({
        include: {
            attributes: ['name'],
            model: DeityStatus,
            where: {
                name: 'human'
            }
        },
    });

    res.json(heros)
});

router.get('/abilities', async (req, res) => {
    const heros = await Hero.findAll({
        include: {
            model: Ability,
            through: {
                attributes: []
            }
        }
    });
    

    res.json(heros)
})

router.get('/:region', async (req, res) => {
    const hero = await Hero.findOne({
        where: {
            regionOfOrigin: req.params.region
        }
    });

    res.json(hero);
});

router.post('/build', async (req, res) => {
    const { name, deityStatusId, famousFeatId, regionOfOrigin, weakness, mortalEnemy, yearOfOrigin } = req.body;

    const newHero = Hero.build({
        name, // name: name
        deityStatusId,
        famousFeatId,
        regionOfOrigin,
        weakness,
        mortalEnemy,
        yearOfOrigin
    });

    // do some other stuff

    await newHero.validate();

    // handle validation errors

    await newHero.save();

    // do something with the saved object

    res.json(newHero)
});

router.post('/create', async (req, res) => {
    const { name, deityStatusId, famousFeatId, regionOfOrigin, weakness, mortalEnemy, yearOfOrigin } = req.body;

    const newHero = await Hero.create({
        name, // name: name
        deityStatusId,
        famousFeatId,
        regionOfOrigin,
        weakness,
        mortalEnemy,
        yearOfOrigin
    });

    res.json(newHero)
});

router.put('/:heroName', async (req, res) => {
    const { name,  regionOfOrigin, weakness, mortalEnemy, yearOfOrigin } = req.body;

    const hero = await Hero.findOne({
        where: {
            name: req.params.heroName
        }
    });

    if (name) {
        hero.name = name;
    };
    hero.weakness = weakness || hero.weakness;
    hero.mortalEnemy = mortalEnemy !== undefined ? mortalEnemy : hero.mortalEnemy;
    hero.regionOfOrigin = regionOfOrigin !== undefined ? regionOfOrigin : hero.regionOfOrigin;
    yearOfOrigin !== undefined ? hero.yearOfOrigin = yearOfOrigin : null;

    await hero.save();

    res.json(hero)
});

router.delete('/:heroId', async (req, res) => {
    const heroToByDestroyed = await Hero.findByPk(req.params.heroId);

    await heroToByDestroyed.destroy();

    res.json(heroToByDestroyed);
});


module.exports = router;