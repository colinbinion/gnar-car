const express = require('express')
const app = express()
const port = 3000
const person = express.Router()

app.use('Danny', person)

//application middleware
//app.use

app.use(function (req, res, next) {
  req.isLoggedIn = db.userAuthed(req.cookie)
  next()
})

app.use(function (req, res, next) {
  const.name = db.getUserName(req.cookie)
  app.locals.name = name
  next()
})

app.get('/secret', function(req, res, next) {
  if (req.isLoggedIn) {
    res.send('42')
  } else {

  }
})
