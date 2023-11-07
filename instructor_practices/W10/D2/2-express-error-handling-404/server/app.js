const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('GET / This is the root URL');
});

//Resource Not Found middleware
app.use((req, res, next) => {
  const notFoundError = new Error('Sorry, the requested resource couldn\'t be found.');
  notFoundError.statusCode = 404;
  next(notFoundError);
})

//Error handling middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500
  res.status(statusCode);
  res.json({
    message: err.message,
    statusCode
  })
})

const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));
