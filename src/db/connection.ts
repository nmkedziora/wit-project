// import mysql from "mysql";
// import { DB_CONFIG } from "./config";

// // const connection = mysql.createConnection({
// //   host: DB_CONFIG.host,
// //   user: DB_CONFIG.user,
// //   password: DB_CONFIG.password,
// //   database: DB_CONFIG.db
// // });

// /*
// This creates a bottleneck - queries in a connection are queued and one request can block others.
// Normally you would use connection pools and pick a connection for a statement (or a transaction).
// */

// const connection = mysql.createConnection({
//   host: DB_CONFIG.host,
//   user: DB_CONFIG.user,
//   password: DB_CONFIG.password,
//   database: DB_CONFIG.db
// });
// connection.connect(function (err) {

//   if (err) throw err;

//   console.log('Connected!');
// });
