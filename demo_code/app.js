const express = require('express');
const app = express();

app.use(express.json());

app.get(['/test', '/status'], (req, res) => {
    res.send('Hello from npm start')
});

app.post('/create', (request, response) => {
    console.log(request.body)
});

app.listen(8000, () => console.log('Listening on port 8000...'))