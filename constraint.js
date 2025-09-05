//1. UNIQUE Constraint
CREATE TABLE users (
    id INT PRIMARY KEY,
    email VARCHAR(100) UNIQUE
);

//Add UNIQUE using ALTER TABLE:
ALTER TABLE users
ADD CONSTRAINT unique_email UNIQUE (email);