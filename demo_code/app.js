const express = require('express');
const app = express();
require('dotenv').config();

const HerosRouter = require('./routes/heros');

app.use(express.json());

app.use('/heros', HerosRouter);

const port = process.env.PORT;
app.listen(port, () => console.log(`Listening on port ${port}...`));