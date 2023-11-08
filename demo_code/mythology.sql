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

INSERT INTO heroes (name, deity_status, famous_feat, region_of_origin, ability, weakness, mortal_enemy, year_of_origin)
VALUES
('Hercules', 'demi-god', 'defeated the hydra', 'Rome', 'super strength', 'temper', 'Antaeus', -1286),
('Thor', 'god', 'lifted Mjolnir', 'Norse', 'lightning', 'certain magics', 'Loki', 50),
('Horus', 'god', 'became a pharaoh of Egypt', 'Egypt', 'transformation', 'women', 'Set', -2925),
('King Arthur', 'human', 'pulled Excalibur from the stone', 'British Isles', 'Excalibur', 'glory hungry', 'Mordred', 475),
('Amaterasu', 'god', 'created the imperial regalia', 'Japan', 'brings light to the world', 'none', 'Arahabaki', 712);