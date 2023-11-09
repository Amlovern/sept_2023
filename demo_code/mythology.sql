PRAGMA foreign_keys = 1;
DROP TABLE IF EXISTS hero_abilities;
DROP TABLE IF EXISTS abilities;
DROP TABLE IF EXISTS heroes;
DROP TABLE IF EXISTS famous_feats;
DROP TABLE IF EXISTS deity_status;

CREATE TABLE deity_status ( -- one to many
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(8) NOT NULL UNIQUE
);

INSERT INTO deity_status (name)
VALUES
('god'),
('demi-god'),
('human');

CREATE TABLE famous_feats ( -- one to one
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    feat TEXT NOT NULL
);

INSERT INTO famous_feats (feat)
VALUES
('created the imperial regalia'),
('gave fire to humans'),
('lifted Mjolnir'),
('slaying the trojan prince'),
('became a pharaoh of Egypt'),
('defeated the hydra'),
('pulled Excalibur from the stone'),
('killed Grendel');

CREATE TABLE heroes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR NOT NULL UNIQUE,
    deity_status_id INTEGER REFERENCES deity_status(id) ON DELETE SET NULL,
    famous_feat_id INTEGER NOT NULL UNIQUE,
    region_of_origin VARCHAR(75) NOT NULL,
    weakness VARCHAR(125),
    mortal_enemy VARCHAR NOT NULL,
    year_of_origin INTEGER NOT NULL,
    FOREIGN KEY (famous_feat_id) REFERENCES famous_feats(id) ON DELETE CASCADE
);

INSERT INTO heroes (name, deity_status_id, famous_feat_id, region_of_origin, weakness, mortal_enemy, year_of_origin)
VALUES
('Hercules', 2, 6, 'Rome', 'temper', 'Antaeus', -1286),
('Thor', 1, 3, 'Norse', 'certain magics', 'Loki', 50),
('Horus', 1, 5, 'Egypt', 'women', 'Set', -2925),
('King Arthur', 3, 7, 'British Isles', 'glory hungry', 'Mordred', 475),
('Beowulf', 3, 8, 'Norse', 'arrogance', 'Grendel', 1000),
('Amaterasu', 1, 1, 'Japan', 'none', 'Arahabaki', 712),
('Achilles', 3, 4, 'Greece', 'bad ankle', 'Paris', -400);


CREATE TABLE abilities ( -- many to many
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR NOT NULL UNIQUE
);

INSERT INTO abilities (name)
VALUES
('super strength'),
('lightning'),
('transformation'),
('invisibility'),
('brings light to the world'),
('Excalibur');

CREATE TABLE hero_abilities (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    hero_id INTEGER NOT NULL REFERENCES heroes(id) ON DELETE CASCADE,
    ability_id INTEGER NOT NULL REFERENCES abilities(id)
);

INSERT INTO hero_abilities (hero_id, ability_id)
VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 6),
(5, 1),
(6, 5),
(7, 1),
(2, 1),
(5, 4),
(3, 2);
