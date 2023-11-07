const express = require('express');
const app = express();

app.use(express.json());

app.use((req, res, next) => {
    console.log(`initial path: ${req.path}`);
    next()
});

// app.use((req, res, next) => {
//     console.log('error test');
//     const error = new Error('There was an error :(');
//     // error.statusCode = 401;
//     next(error)
// })

const nameWelcome = (req, res, next) => {
    console.log('Welcome to Name endpoints');
    console.log(`path inside nameWelcome: ${req.path}`);
    next()
};

app.use('/name', nameWelcome);

const checkUserInput = (req, res, next) => {
    if (!req.body.stuff) {
        return res.send('Please include a stuff property.')
    }
    next()
}

app.get(['/test', '/status'], (req, res) => {
    res.send('Hello from npm start')
});

app.post('/create', checkUserInput, (request, response) => {
    response.json(request.body)
});

app.get('/name/:artistId', (req, res) => {
    console.log(req.params)
    // const artistId = req.params.artistId;
    const { artistId } = req.params;
    res.send(`The artist ID is ${artistId}`)
});

app.get('/name', (req, res) => {
    console.log(req.query);
    // const actor = req.query.actorName;
    const { actorName } = req.query;

    res.send(`The actor's name is ${actorName}`)
});

// Format 404 Error
app.use((req, res, next) => {
    const notFoundErr = new Error (`${req.path} not found.`);
    notFoundErr.statusCode = 404;
    next(notFoundErr)
})

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.log(err.message);
    // let status;
    // if (err.statusCode) {
    //     status = err.statusCode
    // } else {
    //     status = 500
    // }
    const status = err.statusCode || 500;
    res.status(status);
    res.json({
        message: err.message || 'Something went wrong...',
        status
    })
})

app.listen(8000, () => console.log('Listening on port 8000...'))