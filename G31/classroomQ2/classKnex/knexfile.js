// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/outdoor'
  },

    migrations: {
      tableName: 'knex_migrations'
    }

};
