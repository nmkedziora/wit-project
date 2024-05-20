/*
Creates the schema of the 'wit' database (and pre-populates it).
This should be executed as 'witadmin'.
*/


USE wit;

CREATE TABLE IF NOT EXISTS categories (
      id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      cname VARCHAR(100) NOT NULL UNIQUE
);

INSERT INTO categories VALUES (NULL, "Beverage"), (NULL, "Pastry"), (NULL, "Sandwich");
