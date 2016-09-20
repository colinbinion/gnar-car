var express = require('express');
var router = express.Router();
var query = require('../database/query');
/* GET home page. */
router.get('/', function(req, res, next) {
  query.Houses()
  .then(function(data) {
    res.send(data);
  })
  .catch(function(err) {
    return next(err);
  //res.render('index', { title: 'Express' });
});

router.get('students', function(req, res, next) {
  query.Students()
  .then(function(data) {
    res.send(data)
  })
    .catch(function(err) {
      return next(err);
    })
//route handler...emulates knex data query in query.js
  router.get('/students/:name', function(req, res, next) {
    var name = req.params.name;
    query.getStudentByName(name)
    //this is the promise fuction... it is required
    .then(function(data) {
      res.render('student', {
        data: data[0]
      });
    })
    .catch(function(err) {
      return next(err);
  })
})

router.get('/newstudent/:name/:house_id/:year/:patronus', function(req, res, next) {
  var name = req.params.name,
  house_id = req.params.house_id,
  year = req.params.year,
  patronus = req.params.patronus;

query.insertNewStudent(name, house_id, year, patronus)
  .then(function() {
    res.redirect('/')
  })
  //this is for development error catching.
  .catch(function(err) {
    return next(err);
  })
})
//naming convention is off in this sample... router.get('student/delete:')  localhost: 3000/students/danny%20fritz
module.exports = router;

});
