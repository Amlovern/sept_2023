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

POST route

    Creating records
        build
          (validate)
        save

        create
            Create does all of the other 3

    Using the build method allows us to be modular in our control over the process

Updating/Deleting in Sequelize

Update
    <model>.update - NOT recommended
        This requires a where
    Object property assignment - MAJOR preference
        must save()
    <instance>.update()
    <instance>.set()
        must save()

    We have to make sure that we are not accidentally updating our properties to undefined

Delete
    <model>.destroy() - NOT recommended
    <instance>.destroy()


Relationships in Sequelize
    To tell Sequelize that a column is a FK, we have to update our Migration file
    references: {
        model: <table name>,
        key: 'id' (not needed unless the PK is something besides id)
    }
    onDelete: 'CASCADE' (if desired)

Associations
    One-to-One
        hasOne - not used much
    One-to-Many
        belongsTo
        hasMany
        We have to determine which is which and the order does matter
        The model with FK is the belongsTo
        <model we are in>.<relationship>(models.<name of the model we are connecting to>, {
            foreignKey: <name of the FK used to connect>
        })
        In order to CASCADE, we have to add some additional stuff to the hasMany
    Many-to-Many
        belongsToMany(models.<name of model on other side of joins table>, {
            through: models.<name of join table>,
            foreignKey: <FK to join to the join table>,
            otherKey: <FK to join from joins table to other table>
        })

    FROM Heros
    JOIN HeroAbilities ON (...)
    JOIN Abilities ON (...)

Implementing these relationships in our Express
    We add the attributes of a related table by using the "include" property in our query obj
        That include property points to the related Model
        We must import the model that we are referencing
    
    The include property can also point to an array of Models to connect

    The include property can also point to an obj
        include: {
            model: <model name>
        }

    You can nest includes to continue the chain of associations

    In our includes, we can add an "through" property to access the joins table information
        If we don't want any of the joins table info, we can add attributes: [] in our through obj



*/