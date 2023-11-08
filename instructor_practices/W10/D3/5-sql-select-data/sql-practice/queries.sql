-- 1
SELECT * FROM puppies;

-- 2
SELECT name, age_yrs, weight_lbs FROM puppies;

-- 3
SELECT name, age_yrs, weight_lbs FROM puppies
WHERE id = 5;

-- 4
SELECT name, age_yrs, weight_lbs FROM puppies
WHERE microchipped = true;

-- 5
SELECT name, age_yrs, weight_lbs FROM puppies
WHERE weight_lbs > 25;

-- 6
SELECT * FROM puppies
WHERE weight_lbs > 25
AND microchipped = 1;