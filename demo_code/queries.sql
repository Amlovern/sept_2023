SELECT name, region_of_origin, ability FROM heroes;

SELECT name, region_of_origin, ability FROM heroes
WHERE deity_status = 'god'
AND year_of_origin > 0
OR region_of_origin = 'Rome';

DELETE FROM heroes
WHERE name = 'King Arthur';

UPDATE heroes SET region_of_origin = 'Greece'
WHERE region_of_origin = 'Rome';

SELECT * FROM heroes
WHERE year_of_origin BETWEEN -1000 AND 1000;

SELECT * FROM heroes
WHERE region_of_origin IN ('Greece', 'Rome', 'Norse');

SELECT * FROM heroes
WHERE name LIKE 'beo%';

WHERE email LIKE '%@%.%';

SELECT * FROM heroes
ORDER BY year_of_origin DESC;

SELECT * FROM heroes
ORDER BY deity_status_id DESC, year_of_origin DESC;

SELECT * FROM heroes
ORDER BY year_of_origin
LIMIT 1
OFFSET 1;

SELECT *, (year_of_origin / 100) + 1 AS 'Century'
FROM heroes;

SELECT name AS 'secret identity', region_of_origin AS 'home', mortal_enemy AS 'archnemesis'
FROM heroes;

SELECT heroes.id AS 'heroId', heroes.name AS 'Hero name', region_of_origin, famous_feats.id AS 'featId', feat, deity_status.name AS 'Status'
FROM heroes
JOIN famous_feats ON (heroes.famous_feat_id = famous_feats.id)
JOIN deity_status ON (deity_status.id = heroes.deity_status_id);

SELECT heroes.name, abilities.name
FROM heroes
JOIN hero_abilities ON (hero_abilities.hero_id = heroes.id)
JOIN abilities ON (hero_abilities.ability_id = abilities.id);


-- Join every single table showing only ids aliased as their table, multiplied by pi and ordered by name of hero descending. (Hopefully that follows the rules)
-- heroes, deity status, abilities, hero abilities, famous feats
SELECT heroes.id*3.14 AS heroes, deity_status.id*3.14 AS deity_status, abilities.id*3.14 AS abilities, hero_abilities.id*3.14 AS hero_abilities, famous_feats.id*3.14 AS famous_feats
FROM heroes
JOIN deity_status ON (deity_status.id = heroes.deity_status_id)
JOIN famous_feats ON (heroes.famous_feat_id = famous_feats.id)
JOIN hero_abilities ON (hero_abilities.hero_id = heroes.id)
JOIN abilities ON (hero_abilities.ability_id = abilities.id)
ORDER BY heroes.name DESC;


-- all heroes from the -2nd to 9th century that are demigods
SELECT * FROM heroes
JOIN deity_status ON (deity_status.id = heroes.deity_status_id)
WHERE deity_status.name='demi-god'
AND heroes.year_of_origin BETWEEN -300 AND 800;