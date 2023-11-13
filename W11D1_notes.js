/*

Efficiency with SQL

What makes SQL inefficient?
    Connections to the DB
    Large data sets
        SQL is going to check every single line

What can we do to improve efficiency?
    Indexes
    SELECT only the data we need
    Using JOINs and subqueries to reduce the number of DB connections
    Benchmarking

What is the syntax for creating an index?
    CREATE INDEX <idx name> ON <table name>(<list of cols>)
    Can also create a UNIQUE index
What is the naming convention for indexes? i.e. table users, cols: first_name, last_name
    idx_users_first_name_last_name
    idx_<table name>_<cols>
    idx_user_fn_ln
What is the time complexity of a query without an index? And with an index?
    Without: O(n) where n is the number of records
    With: O(log n) where n is the number of records
Every time we add an index, all of our other operations become more expensive

How do we start a benchmark?
    .timer on
    The first time we run a query is the most expensive

How do we check if a query is already using an index?
    EXPLAIN QUERY PLAN
    <the query code>;
Pay close attention to SCAN vs SEARCH.
    SCAN - no index
    SEARCH - index

What steps do I take to benchmark/improve a query?
    Turn .timer on
    Run the query to get initial time
    EXPLAIN QUERY PLAN to identify if an idx is being used
    If no idx, add an idx
    EXPLAIN QUERY PLAN again to confirm that the idx was created and is being used
    Run the query again to get new time

Every time we add a UNIQUE constraint to a column, we are creating an index

What is an N+1 query?
    An N+1 query is when we run an initial query, then iterate over those results and for each result, we run an additional query

During your time here at a/A, don't worry about efficiency. Focus on getting your code to work.
LAZY LOAD YOUR AGGREGATE DATA!!!
    Make your aggregate functions SEPARATE from your data queries

This bad
SELECT *, COUNT(*) FROM users;

This good
SELECT * FROM users;
SELECT COUNT(*) FROM users;


SQL Injection Attack
    When a bad actor inputs raw SQL into a input in an attempt to mess with our DB.

Biggest takeaways from today:
    How to benchmark queries and how to recognize N+1 queries

*/