/*

Middleware!

next() must be invoked in order to move onto the next piece of middleware

All middleware take in 3 parameters
    req, res, next

app.use is explicitly used for middleware
    Can take in a path string, but it's not needed 
    The path does not have to match exactly. It just has to start with the string.
    If we add a prefix to app.use, the prefix is ignored inside that middleware

Another method of control is passing something into next()
When anything is passed into next, Express behavior changes
    Express will skip all other middleware until it finds one that takes in a 4th param (error)
    To handle that error, we have to create a way to catch it
    Express assumes that a route handler isn't meant to take in an error

Error Handling Middleware
    Takes in a 4th arg
    Generally its at the end of the pipeline
    When we generate a new error, we can add a message property, and we should add a statusCode property.
    Why should we do all this work in setting up an error handling middleware instead of having it in the routes?
        Readability
        SRP/DRY


Routers
    An extension of our app object
    Router behaves like app in many ways, but not all
        It can't listen to a port, but it has all of the methods
    We have to connect our router to the app
    We can add a prefix to ensure that only related requests hit the route
        We have to remember that the prefix is removed from the path in the router file


Environment Variables
    There are a few common environments
        Production
        Development (dev)
        Testing - underused
    Why do we need env variables?
        To obscure sensitive information
    There are a couple ways to implement env variables
        Through the CLI
        Add them to the script
        Create a .env file
            Always add the .env file to your .gitignore
            Install dotenv and dotenv-cli packages
            The .env file should be on the same level as your package.json

*/