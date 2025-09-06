//MySQL Transactions and AutoCommit

//Disabling AutoCommit
When AutoCommit is off, you can explicitly control when to commit or rollback changes.

To disable AutoCommit:
SET autocommit = 0;

//COMMIT — Save Changes to the Database
Once you’ve made changes and you’re confident that everything is correct, you can use the COMMIT command to save those changes.


COMMIT;
//ROLLBACK — Revert Changes to the Last Safe Point
If you make an error or decide you don't want to save your changes, you can rollback the transaction to its previous state.

ROLLBACK;
