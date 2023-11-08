const express = require('express');
const app = express();
require('dotenv').config();

const nameRouter = require('./routes/route.js');

app.use(express.json());
app.use('/name', nameRouter);

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
    console.log('env variable', process.env.MESSAGE)
    res.send('Hello from npm start')
});

app.post('/create', checkUserInput, (request, response) => {
    response.json(request.body)
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

app.listen(process.env.PORT, () => console.log('Listening on port 8000...'))