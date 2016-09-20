const express = require('express')
const app = express()
const port = 3000
const morgan = require('morgan')

app.use(morgan())

app.use(function(req, res, next) {
  next(new Error('I have a potty mouth'))
});


app.use(function(error, req, res, next) {
  console.log(error);
  res.json(message: error.message);
});

app.listen(port, function () {
  console.log('listening on port ${port}');
});
