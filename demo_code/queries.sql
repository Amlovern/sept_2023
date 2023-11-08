SELECT name, region_of_origin, ability FROM heroes;

SELECT name, region_of_origin, ability FROM heroes
WHERE deity_status = 'god'
AND year_of_origin > 0
OR region_of_origin = 'Rome';

DELETE FROM heroes
WHERE name = 'King Arthur';

UPDATE heroes SET region_of_origin = 'Greece'
WHERE region_of_origin = 'Rome';