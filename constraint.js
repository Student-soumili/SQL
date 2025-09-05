//1. UNIQUE Constraint
CREATE TABLE users (
    id INT PRIMARY KEY,
    email VARCHAR(100) UNIQUE
);

//Add UNIQUE using ALTER TABLE:
ALTER TABLE users
ADD CONSTRAINT unique_email UNIQUE (email);

//NOT NULL Constraint
//Ensures that a column cannot contain NULL values.

Example:
CREATE TABLE users (
    id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

//Change an existing column to NOT NULL:
ALTER TABLE users
MODIFY COLUMN name VARCHAR(100) NOT NULL;

//Make a column nullable again:
ALTER TABLE users
MODIFY COLUMN name VARCHAR(100) NULL;

//CHECK Constraint
//Ensures that values in a column satisfy a specific condition.
//

ALTER TABLE users
ADD CONSTRAINT chk_dob CHECK (date_of_birth > '2000-01-01');

//DEFAULT Constraint
//Sets a default value for a column if none is provided during insert.
CREATE TABLE users (
    id INT PRIMARY KEY,
    is_active BOOLEAN DEFAULT TRUE
);

//Add DEFAULT using ALTER TABLE:
ALTER TABLE users
ALTER COLUMN is_active SET DEFAULT TRUE;


//PRIMARY KEY Constraint
//Uniquely identifies each row. Must be NOT NULL and UNIQUE.

Example:
CREATE TABLE users (
    id INT PRIMARY KEY,
    name VARCHAR(100)
);

//Add later with ALTER TABLE:
ALTER TABLE users
ADD PRIMARY KEY (id);

//6. AUTO_INCREMENT
//Used with PRIMARY KEY to automatically assign the next number.

Example:
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100)
);