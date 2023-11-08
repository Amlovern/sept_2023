/*

Databases!

What is a database?
    Collection of data
        Stored in Tables in a Row/Column format
        Columns are the properties of the records
            We can apply specific and individual rules to each column
        Rows are an instance of each record
        Tables have a plural name
What is the tool called that we use to manage and interact with our DB? RDBMS
What is SQL?

We can run "sqlite3" to enter a transient in-memory db
To create a persisting DB, we run "sqlite3 <db name>.db"

With SQL, we MUST end our lines with a ";"

We can use ".tables" command to see all of the tables in our DB

We can create a .sql file to write our SQL commands in
    To run a .sql file, we run the ".read <file name>" command in our sqlite terminal


To create a table, we follow this format:
CREATE TABLE <table name> (
    <column name> <data type> <attributes>
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    <CONTINUE FILLING IN TABLE>
);

SQL does not like trailing commas, and we must add the semicolon

To remove a table, we follow this format:
DROP TABLE <table name>;

*/