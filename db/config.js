// configure postgres to connect our db to our express app
const pgPromise = require('pg-promise');
const pgInstance = pgPromise();

const config = {
  host: 'localhost',
  port: 5432,
  database: 'cloud',
  user: 'postgres', // your username here!!
  password: '200100'
}

const connection = pgInstance(config);

module.exports = connection;