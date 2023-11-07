/*

Frontend
    UI/UX, fetching (requests), and requesting data from the server
    Develop requests, handle responses

Backend
    Server sending data to client, data storage/manipulate, routing, security, DB
    Handles requests, develops responses

What is an API?
    A tool for delivering data, creating a way for a user to interact with data

What is a Framework?
    Structure around which we build something else

What is Express?
    An API Framework
    A backend is just a framework or skeleton that a project/site is built around

Steps to start with Express
    Initialize node
        npm init -y
    Install Packages
        Express - npm install express
        Nodemon - npm install -D nodemon

    app.js - Main hub of our application
        Import Express
        Use express to instantiate app obj

Route Handlers 
    App object methods:
        get, post, put/patch, delete, all, use
    Request Path
        String, array of strings, regular expressions, array of RegEx, array of strings and RegEx
    Middleware
        Series of callback functions
    Response Methods
        send (plain text or JSON)
        json (always sends JSON)
        -----
        render(render server side html)
        redirect
    app.<method>(<path>, (<middleware>) => { <response> })

Our first Global Middleware
    express.json() => Allow us to parse request body

!! Express works top => down !!

Important Request Object Properties
    req.body
        Where request body content can be found
        Requires app.use(express.json()) global middleware
    req.params
        Dynamic piece of the path
        Use a ":" in the path to signify a param
    req.query
        Dynamic piece of the path
        Starts with a "?" in the URL

Important to note that routes should be in order of most specific => least specific


*/