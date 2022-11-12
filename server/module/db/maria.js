const maria = require("mysql");

const mariaConnection = maria.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root1234",
  database: "individual_schema",
});

mariaConnection.connect();

module.exports = mariaConnection;
