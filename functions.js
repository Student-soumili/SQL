//COUNT()
//Count total number of users:
SELECT COUNT(*) FROM users;

//Count users who are Female:
SELECT COUNT(*) FROM users WHERE gender = 'Female';

//MIN() and MAX()
//Get the minimum and maximum salary:
SELECT MIN(salary) AS min_salary, MAX(salary) AS max_salary FROM users;

//SUM()
//Calculate total salary payout:

SELECT SUM(salary) AS total_payroll FROM users;

//AVG()
//Find average salary:
SELECT AVG(salary) AS avg_salary FROM users;

//Grouping with GROUP BY
//Average salary by gender:

SELECT gender, AVG(salary) AS avg_salary
FROM users
GROUP BY gender;

//String Functions
//LENGTH()
//Length of user names:

SELECT name, LENGTH(name) AS name_length FROM users;

//LOWER() and UPPER()
Convert names to lowercase or uppercase:

SELECT name, LOWER(name) AS lowercase_name FROM users;
SELECT name, UPPER(name) AS uppercase_name FROM users;

//CONCAT()
//Combine name and email:
SELECT CONCAT(name, ' <', email, '>') AS user_contact FROM users;

//Date Functions
//NOW()
SELECT NOW();

//YEAR() , MONTH() , DAY()

SELECT name, YEAR(date_of_birth) AS birth_year FROM users;
SELECT name, MONTH(date_of_birth) AS birth_month FROM users;
SELECT name, DAY(date_of_birth) AS birth_day FROM users;

//DATEDIFF()
SELECT DATEDIFF(NOW(), date_of_birth) AS age_in_days FROM users;
//TIMESTAMPDIFF()
SELECT name, TIMESTAMPDIFF(YEAR, date_of_birth, CURDATE()) AS age FROM users;

//Mathematical Functions
//ROUND(), FLOOR(), CEIL()
SELECT salary,
       ROUND(salary) AS rounded,
       FLOOR(salary) AS floored,
       CEIL(salary) AS ceiled
FROM users;
//MOD()
Find even or odd user IDs:

SELECT id, MOD(id, 2) AS remainder FROM users;

//Conditional Functions
//IF()
SELECT name, gender,
       IF(gender = 'Female', 'Yes', 'No') AS is_female
FROM users;