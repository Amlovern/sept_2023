/*

Association Methods
    Getter Methods
        After querying a table, we automatically get a method to get related table's info
        Getter method will either be plural or singluar based on the relationship
        Basically exists to enable lazy loading
    Create Method
        After querying a table, we can create a record for a related table
        We don't need to add the value for the FK
    Add method
        After querying a table, in a many-to-many relationship, this allows us to add a record to the JOINS table


Aggregate Functions!
    Min/Max
        await <model>.<func>(<col>)
        SELECT <func>(<col>) FROM <table>;
    Count
        await <model>.count()
        SELECT COUNT(*) FROM <table>;
        Can also be achieved by finding the length of the return from findAll
    Sum
        await <model>.sum(<col>)
        SELECT SUM(<col>) FROM <table>;
    Avg - Does not exist in Sequelize
        Can be calculated by writing simple JS combining these methods
    All of these can also take in an obj to specify a WHERE clause


The return of a query method is a Promise
    We can use the <instance>.toJSON() method to turn the result from query into a JSON object instead of a promise
        This is VERY useful for your project!!!
*/