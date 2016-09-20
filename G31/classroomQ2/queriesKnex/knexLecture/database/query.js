var knex = require('./knex');

function Houses() {
  return knex('houses');
}

function Students() {
  return knex('students');
}

module.exports = {
  Houses,
  Students,
  getStudentByName: function(name) {
    return Students().where('name', name);
  },
  insertNewStudent: function(name, house_id, year, patronus) {
    return Students().insert({
      name: name,
      house_id: house_id,
      year: year,
      patronus: patronus
    })
  }
};
