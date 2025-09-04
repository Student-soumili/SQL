DELETE - Removing Data from a Table
The DELETE statement removes rows from a table.

//Delete One Row
DELETE FROM users
WHERE id = 3;
//Delete Multiple Rows
DELETE FROM users
WHERE gender = 'Other';
//Delete All Rows (but keep table structure)
DELETE FROM users;
//Drop the Entire Table (use with caution)
DROP TABLE users;