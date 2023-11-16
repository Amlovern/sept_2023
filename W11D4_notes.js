/*

There are a variety of query methods built into our models:
    .findAll
        Useful when we want to return multiple records
        Always return an array
    .findOne
        Useful when we want to return a single record
    .findByPk
        Also when finding just a single record
        Basically a findOne, but shortcuts to searching via the Primary Key

Accessing the DB is an async action, so we must await our queries

By default, sequelize will do SELECT *
    We can add an attributes key to our query object, to select only certain columns

To change the default order, we add an order key to our query object
    To change from ASC (the default) to DESC, we add 'DESC' as the 2nd arg in the array containing the column name

If we want to use LIKE in our query, we can do that using Op



*/