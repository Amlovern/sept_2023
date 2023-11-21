const express = require('express');
const app = express();
require('dotenv').config();
const { Hero } = require('./db/models');

const HerosRouter = require('./routes/heros');

app.use('/styling', express.static('assets/css'));
app.use(express.json());

app.get('/search', async (req, res) => {
    let { page, size } = req.query;
    const pagination = {};

    // page = page ? page : 1
    // if (!page) page = 1
    page = page || 1;
    size = size || 5;
    pagination.limit = size;
    pagination.offset = size * (page - 1);
    
    if (page < 1 || size < 1) {
        delete pagination.limit;
        delete pagination.offset;
    }

    const heros = await Hero.findAll({
        ...pagination
    });

    res.json(heros)
})

app.use('/heros', HerosRouter);

const port = process.env.PORT;
app.listen(port, () => console.log(`Listening on port ${port}...`));