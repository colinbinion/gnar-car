
exports.up = function(knex, Promise) {
  return knex.schema.createTable('activity', (table) =>
{
    table.increments();
    table.string('location');
    table.string('name');
    table.integer('duration');
    table.boolean('is_free');
})
},

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('activity');
};
