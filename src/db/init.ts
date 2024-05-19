import mysql from "mysql";

export function initDb() {
  console.log("initDb");

  var connection = mysql.createConnection({
    host: "localhost",
    user: "witadmin",
    password: "witadmin",
    database: "wit",
  });

  connection.connect();

  connection.query("SELECT CURRENT_USER();", (err, result, fields) => {
    console.log(111, "SELECT CURRENT_USER();", result);
  });
  
  connection.query("SHOW DATABASES", (err, result, fields) => {
  });

  connection.query(
    `
    CREATE TABLE IF NOT EXISTS categories (
      id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      cname VARCHAR(100) NOT NULL UNIQUE
    )
  `,
    (error, result, fields) => {
      console.log("Created categories", { error, result, fields });
    },
  );

  connection.query("DESCRIBE categories", (err, result) => {
    // console.log({err, result});
  });

  connection.query("SHOW TABLES", (err, results, fields) => {
  });

  // connection.end();

  connection.changeUser({ user: "witapp", password: "witapp" }, function (err) {
  });

  connection.query("SELECT CURRENT_USER();", (err, result, fields) => {
    console.log(222, "SELECT CURRENT_USER();", result);
  });

  connection.query(`
    INSERT INTO categories VALUES (NULL, "Beverage"), (NULL, "Pastry"), (NULL, "Sandwich");
  `, () => {
  });

  connection.end();
}
