//Filtering Rows with WHERE
//Equal To
SELECT * FROM users WHERE gender = 'Male';
//Not Equal To
SELECT * FROM users WHERE gender != 'Female';
or
SELECT * FROM users WHERE gender <> 'Female';

//Greater Than / Less Than
SELECT * FROM users WHERE age > 25;
SELECT * FROM users WHERE age < 30;

//Greater Than or Equal / Less Than or Equal
SELECT * FROM users WHERE age >= 21;
SELECT * FROM users WHERE age <= 40;

//Working with NULL
SELECT * FROM users WHERE email IS NULL;
SELECT * FROM users WHERE email IS NOT NULL;

//BETWEEN
SELECT * FROM users WHERE age BETWEEN 25 AND 35;
//and/or
SELECT * FROM users WHERE gender = 'Female' AND date_of_birth > '1990-01-01';
SELECT * FROM users WHERE gender = 'Male' OR gender = 'Other';
//LIMIT
SELECT * FROM users LIMIT 5; -- Top 5 rows
SELECT * FROM users LIMIT 10 OFFSET 5; -- Skip first 5 rows, then get next 10
SELECT * FROM users LIMIT 5, 10; -- Get 10 rows starting from the 6th row (Same as
SELECT * FROM users ORDER BY created_at DESC LIMIT 10;
