// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      filename: 'postgres://localhost/realEstate'
    }
  },
    migrations: {
      tableName: 'knex_migrations'
    }
};
