const { ParseServer } = require('parse-server');
// const monk = require('monk')
// const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/dev'
// const db = monk(connectionString)

const api = new ParseServer({
  databaseURI: 'mongodb://localhost:27017/parse',
  appId: 'abcd',
  masterKey: 'qwer',
  serverURL: 'http://localhost:1337/parse',
});

module.exports = api;
