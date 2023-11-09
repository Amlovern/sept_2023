DROP TABLE IF EXISTS heroes;

CREATE TABLE heroes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR NOT NULL UNIQUE,
    deity_status_id INTEGER REFERENCES deity_status(id),
    famous_feat TEXT UNIQUE,
    region_of_origin VARCHAR(75) NOT NULL,
    ability TEXT,
    weakness VARCHAR(125),
    mortal_enemy VARCHAR NOT NULL,
    year_of_origin INTEGER NOT NULL
    -- FOREIGN KEY (deity_status_id) REFERENCES deity_status(id)
);

INSERT INTO heroes (name, deity_status_id, famous_feat, region_of_origin, ability, weakness, mortal_enemy, year_of_origin)
VALUES
('Hercules', 2, 'defeated the hydra', 'Rome', 'super strength', 'temper', 'Antaeus', -1286),
('Thor', 1, 'lifted Mjolnir', 'Norse', 'lightning', 'certain magics', 'Loki', 50),
('Horus', 1, 'became a pharaoh of Egypt', 'Egypt', 'transformation', 'women', 'Set', -2925),
('King Arthur', 3, 'pulled Excalibur from the stone', 'British Isles', 'Excalibur', 'glory hungry', 'Mordred', 475),
('Beowulf', 3, 'killed Grendel', 'Norse', 'super strength', 'arrogance', 'Grendel', 1000),
('Amaterasu', 1, 'created the imperial regalia', 'Japan', 'brings light to the world', 'none', 'Arahabaki', 712),
('Achilles', 3, 'slaying the trojan prince', 'Greece', 'super strength', 'bad ankle', 'Paris', -400);

CREATE TABLE deity_status ( -- one to many
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(8) NOT NULL UNIQUE
);

INSERT INTO deity_status (name)
VALUES
('god'),
('demi-god'),
('human');






CREATE TABLE abilities (
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

CREATE TABLE famous_feats (
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
