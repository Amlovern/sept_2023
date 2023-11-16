const express = require('express');
const router = express.Router();
const { Op } = require("sequelize");
const { Hero } = require('../db/models')

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