
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('activity').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('activity').insert({
          id: 1,
          location: 'Denver Metro',
          name: 'frisby',
          duration: 60,
          is_free: true
        }),
        knex('activity').insert({
          id: 2,
          location: 'Denver Metro',
          name: 'golf',
          duration: 240,
          is_free: false
        }),
        knex('activity').insert({
          id: 3,
          location: 'Golden',
          name: 'hiking',
          duration: 120,
          is_free: true
        })
      ]);
    });
};
