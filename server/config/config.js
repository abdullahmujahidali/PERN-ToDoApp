/**
 * this file is responsible to configure eviornment whether it is development, testing or production with
 * their own secret credentials such as database username and database password.
 */
require('dotenv').config();

module.exports = {
  development: {
    database: 'todo-db',
    username: 'postgres',
    password: 'addymjd',
    use_env_variables: 'DB_URL_DEV',
    dialect: 'postgres',
  },
  test: {
    database: 'todo-test',
    username: 'postgres',
    password: 'addymjd',
    use_env_variables: 'DB_URL_TEST',
    dialect: 'postgres',
  },
  production: {
    database: 'todo-prod',
    use_env_variables: 'DB_URL_PROD',
    dialect: 'postgres',
  },
}