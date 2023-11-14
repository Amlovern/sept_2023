const express = require('express');
const app = express();
const sqlite3 = require('sqlite3');
require('dotenv').config();

app.use(express.json());
const db = new sqlite3.Database(process.env.DB_FILE, sqlite3.OPEN_READWRITE);

app.get('/heroes', (req, res) => {
    const sql = 'SELECT * FROM heroes;';
    db.all(sql, [], (err, rows) => {
        if (err) return res.json(err);
        res.json(rows)
    });
});

app.get('/heroes/:heroId', (req, res) => {
    const sql = 'SELECT * FROM heroes WHERE id = ?;';
    const params = [req.params.heroId];
    db.get(sql, params, (err, result) => {
        if (err) return res.json(err);
        if (!result) return res.send('Hero not found')
        res.json(result);
    });
});



app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}...`))