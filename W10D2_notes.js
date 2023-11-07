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

*/