const express = require('express');
const router = express.Router();

// router.get('/', (req, res) => {
//     console.log(req.body)
//     res.send('Inside our router file.')
// })

router.get('/:artistId', (req, res) => {
    console.log(req.params)
    // const artistId = req.params.artistId;
    const { artistId } = req.params;
    res.send(`The artist ID is ${artistId}`)
});

router.get('/', (req, res) => {
    console.log(req.query);
    // const actor = req.query.actorName;
    const { actorName } = req.query;

    res.send(`The actor's name is ${actorName}`)
});

module.exports = router;