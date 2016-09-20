//targets development info from the knexfile.js
var enviroment = 'development';

var config = require('../knexfile')[enviroment];

module.exports = require('knex')(config);
