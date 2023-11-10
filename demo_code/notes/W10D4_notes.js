/*

Relationships!

What are the 3 types of relationships?
    One to one -> will see the least
    One to many
    Many to many
        Requires a Join table
        A join table can have more than just the 2 foreign keys

    In a one to many relationship, which side does the FK go on?
        The many side!

There are a couple ways to establish a FK in a CREATE TABLE
    At the bottom of the CREATE command:
        FOREIGN KEY (<FK col name>) REFERENCES <other table>(<pk>)
    We can combine into the column
        <col name> INTEGER REFERENCES <other table>(<pk>)

What about deleting?
    ON DELETE CASCADE
    ON DELETE SET NULL


More Query Operators
    BETWEEN - inclusive
        WHERE <column> BETWEEN <value 1> AND <value 2> 
    IN - something is true from a group of possibilities
        WHERE <column> IN (<comma separated values>)
    LIKE - search for partial strings *% acts as wildcard*
        WHERE <column> LIKE %<partial string>%
        in SQLite, this is case insensitive
        3 Patterns:
            Start with: '<string>%'
            Ends with: '%<string>'
            Includes: '%<string>%'
    ORDER BY - allows us to go against the default ordering behavior
        ORDER BY <column>
        Default order is ASC, but can add DESC to the command to change it
        Can order by multiple factors by adding more columns separated by a comma
    LIMIT - only return a certain number of records
        LIMIT <value>
    OFFSET - skip a certain number of records
        OFFSET <value>
        Can only be used in conjunction with LIMIT
    We can perform mathematical operations to our columns within a SELECT
        SELECT <column> + <value> FROM <table>;
        This doesn't actually change the data in the DB
    We can alias our columns in a SELECT
        SELECT <column> AS <alias> FROM <table>;


Writing queries that join different tables together
    JOIN <other table> ON (<table>.id = <other table>.<FK column>)
    The ON keyword is what tells SQL what the association is and how to combine them
    The order of the values in our ON statemend doesn't matter
    Use dot notation to deal with column name ambiguity
    The order of our JOIN statements is determined by the path we have to follow to connect all the tables


*/