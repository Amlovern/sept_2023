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

*/