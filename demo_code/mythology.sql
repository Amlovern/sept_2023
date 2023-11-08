DROP TABLE IF EXISTS heroes;

CREATE TABLE heroes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR NOT NULL UNIQUE,
    deity_status VARCHAR(8),
    famous_feat TEXT UNIQUE,
    region_of_origin VARCHAR(75) NOT NULL,
    ability TEXT,
    weakness VARCHAR(125),
    mortal_enemy VARCHAR NOT NULL,
    year_of_origin INTEGER NOT NULL
);