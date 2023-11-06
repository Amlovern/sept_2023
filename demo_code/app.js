const express = require('express');
const app = express();

app.use(express.json());

app.get(['/test', '/status'], (req, res) => {
    res.send('Hello from npm start')
});

app.post('/create', (request, response) => {
    console.log(request.body)
});

app.get('/name/:artistId', (req, res) => {
    console.log(req.params)
    // const artistId = req.params.artistId;
    const { artistId } = req.params;
    res.send(`The artist ID is ${artistId}`)
});

app.get('/name', (req, res) => {
    console.log(req.query);
    // const actor = req.query.actorName;
    const { actorName } = req.query;

    res.send(`The actor's name is ${actorName}`)
})

app.listen(8000, () => console.log('Listening on port 8000...'))