/*

Sequelize

Need to install a couple of packages
    npm install sequelize
    npm install sequelize-cli
Initialize sequelize
    npx sequelize init

Migrations - Make changes to the DB
Models - Class representations of our tables
Seeders - Initial DB data

storage: tells sequelize where our DB is
dialect: tells sequelize which RDBMS we are using
benchmark: turns .timer on by default
logQueryParameters: allows us to see the values when we make changes to the DB
typeValidation: enforces data types on our table
logging: defaults to true and prints our SQL to the terminal

3 Files Types:

Migrations
    For making changes to the DB structure
    Table name = Plural and Capitalized (PascalCase)
        Table: Users
    CLI commands:
        npx sequelize migration:generate --name <migration name> //just creates a migration file
        npx dotenv sequelize db:migrate
            Runs all migration files that haven't already been ran
        npx dotenv sequelize db:migrate:undo
            Rolls back the most recent migration
        npx dotenv sequelize db:migrate:undo:all
            Rolls back all migrations
    Important Notes:
        Every migration file has 2 parts: up and down
        The down function should directly undo whatever the up func is doing
        Migration files don't only create/edit our tables, they also act as version control
            The timestamp of creation is in the name of the migration file
        All of our normal condition like unique or not null are represented as key:value pairs in the column objects
        The SequelizeMeta table's job is to track the migration files that have been ran

Models
    Class representations of each table, with built-in query methods
    Models name = Singular and Capitalized (PascalCase)
        Model: User
    CLI command:
        npx sequelize model:generate --name <name> --attributes <attributes>
            When we run our model generate command, it will automatically create the associated migration file
    Important Notes:
        We do not need to add an id attribute. Sequelize will add that for us for models that we generate.
        Make sure that any changes we make to the migration, such as adding a constraint, also get made to the model file.
        Making changes to our model, does not mean that we need to run any commands


Seeders
    For inserting data into our tables

How do we know if we need to add "dotenv" to our command?
    If we are JUST creating a file, no dotenv
    If we are interacting with the DB, add dotenv

Column names switch from snake_case to camelCase

*/