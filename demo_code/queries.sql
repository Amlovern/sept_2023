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