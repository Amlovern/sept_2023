/*

Serving static files
    Use more boilerplate code
        app.use(express.static(<path to the files>))
    Tells Express to look in the specified directory for files to send
    We can access that css file by sending a get request
    Like all other app.use, you can add a prefix to ensure that only certain requests hit that middleware

*/