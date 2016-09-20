var Express = require('express')
var app = Express()
var port = 80

app.get("/dogs/:dogname", function (request, response) {
  response.send(request.params.dogname)
})

app.listen(port)
