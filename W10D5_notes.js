/*

Aggregate Functions
    AVG - Find the avg value of a col
    COUNT - Counts the number of entries in table
    MIN/MAX - Find the min/max value of a col
    SUM - Add up all the values in a col
        If all the values are null, returns null
    TOTAL - Add up all the values in a col
        Always returns a floating point value
        If all the values are null, returns 0.0


Where are the aggregate functions placed?
    Inside of the SELECT statement

These aggregate functions are treated like normal functions, so we invoke them with ()
    SELECT <function>(<col name>) FROM <table>;

!! When we run an aggregate function, we DO NOT get all of the info from that table, only the aggregate data !!
If you put other col names with the aggregate function in the SELECT, it will only return the FIRST instance.

COUNT is different. We just pass "*" into the () since it doesn't matter which column it uses.

We can add a WHERE clause to these functions to filter which data is applied.

We can add GROUP BY to the query to have that aggregate happen on specific groups of data
    GROUP BY <col name>
    This is the only way to return multiple things from an aggregate
        It will return a single instance per group

We can add HAVING to a function that we have a GROUP BY on
    This acts like a WHERE clause, but for the groups that were created

At this point, we have talked about all of the SQL keywords:
    Keywords in the order that they should/could be applied:
        SELECT
        FROM
        JOIN ON
        WHERE
        GROUP BY
        HAVING
        ORDER BY
        LIMIT
        OFFSET


*/