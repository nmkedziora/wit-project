import { createServer } from "node:http";
import { handleRequest } from "./app";
import mysql from "mysql";
import { DB_CONFIG } from "./db/config";

// Create a server
const server = createServer(handleRequest);

// Start the server
const hostname = "0.0.0.0";
const port = 8080;

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

const connection = mysql.createConnection({
  host: DB_CONFIG.host,
  user: DB_CONFIG.user,
  password: DB_CONFIG.password,
  database: DB_CONFIG.db,
  insecureAuth: true
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL database:", err);
    return;
  }
  console.log("Connected to MySQL database");
});



connection.query('SHOW DATABASES', (err, result, fields) => {
  console.log({err, result, fields});
});

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
