-- 1
SELECT COUNT(*) FROM cats;

-- 2
SELECT name, MIN(birth_year) FROM cats;
SELECT name, MAX(birth_year) FROM cats;

-- SELECT name FROM cats
-- GROUP BY birth_year
-- HAVING birth_year=MIN(birth_year) OR birth_year=MAX(birth_year);

-- 3
SELECT COUNT(*), cats.name FROM cats
JOIN toys ON (toys.cat_id = cats.id)
GROUP BY cats.name
ORDER BY COUNT(*) DESC;

-- 4
SELECT COUNT(*), cats.name FROM cats
JOIN toys ON (toys.cat_id = cats.id)
GROUP BY cats.name
HAVING COUNT(toys.id) >= 2;