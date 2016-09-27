// SET NODE_ENV=development IN .env FILE
var environment = process.env.NODE_ENV || 'development';
var config = require('../knexfile.js')[environment];
module.exports = require('knex')(config);
