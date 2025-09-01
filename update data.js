//UPDATE - Modifying Existing Data
//Update One Column
UPDATE users
SET name = 'Alicia'
WHERE id = 1;

//Example: Update Multiple Columns

UPDATE users
SET name = 'Robert', email = 'robert@example.com'
WHERE id = 2;