/*
Creates the schema of the 'wit' database (and pre-populates it).
This should be executed as 'witadmin'.
 */
USE wit;

CREATE TABLE
      IF NOT EXISTS categories (
            id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
            cname VARCHAR(100) NOT NULL UNIQUE
      );

CREATE TABLE
      IF NOT EXISTS sellers (
            id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
            sname VARCHAR(100) NOT NULL UNIQUE
      );

CREATE TABLE
      IF NOT EXISTS products (
            id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
            category INT NOT NULL,
            seller INT NOT NULL,
            pname VARCHAR(100) NOT NULL UNIQUE,
            price DECIMAL(9, 2) NOT NULL,
            currency VARCHAR(3) NOT NULL DEFAULT 'PLN',
            info VARCHAR(500) NOT NULL,
            FOREIGN KEY (category) REFERENCES categories (id)
            /*
            RESTRICT: Rejects the delete or update operation for the parent table.
            Specifying RESTRICT (or NO ACTION) is the same as omitting the ON DELETE or ON UPDATE clause.
             */
            ON DELETE RESTRICT ON UPDATE RESTRICT
      );

-- AUTO_INCREMENT starts with 1 which will be used here to correctly refer to categories and sellers.
INSERT INTO
      categories
VALUES
      (NULL, "Beverage"),
      (NULL, "Pastry"),
      (NULL, "Sandwich");

INSERT INTO
      sellers
VALUES
      (NULL, "Tea Time"),
      (NULL, "Sandwich Haven"),
      (NULL, "Bake Masters"),
      (NULL, "Boost Bar"),
      (NULL, "Sweet Treats"),
      (NULL, "Bacon Delights"),
      (NULL, "Yummy Bakery");

-- Nit: MySQL has a mechanism to bulk-load data from TSF.
INSERT INTO
      products
VALUES
      (
            NULL,
            1,
            1,
            'Green Tea',
            4.00,
            'PLN',
            'Refreshing tea with a hint of herbal goodness.'
      ),
      (
            NULL,
            1,
            2,
            'Iced Tea',
            5.00,
            'PLN',
            'Cool off with our chilled and flavorful iced tea.'
      ),
      (
            NULL,
            1,
            3,
            'Orange Juice',
            3.00,
            'PLN',
            'Start your day fresh with our tangy orange juice.'
      ),
      (
            NULL,
            1,
            4,
            'Energy Drink',
            7.00,
            'PLN',
            'Get an instant boost with our energizing drink.'
      ),
      (
            NULL,
            1,
            5,
            'Chocolate',
            2.25,
            'PLN',
            'Indulge in rich and creamy chocolate goodness.'
      ),
      (
            NULL,
            2,
            7,
            'Palmier',
            1.75,
            'PLN',
            'Delightfully flaky palm-shaped pastry with a hint of sweetness.'
      ),
      (
            NULL,
            2,
            3,
            'Eclair',
            2.75,
            'PLN',
            'Indulge in this classic French pastry filled with creamy goodness.'
      ),
      (
            NULL,
            2,
            2,
            'Muffin',
            2.25,
            'PLN',
            'Start your day right with our freshly baked, moist muffins.'
      ),
      (
            NULL,
            2,
            5,
            'Cinnamon Roll',
            3.00,
            'PLN',
            'Satisfy your cravings with our soft, gooey cinnamon rolls.'
      ),
      (
            NULL,
            2,
            5,
            'Puff Pastry',
            2.25,
            'PLN',
            'Enjoy the light and airy layers of our flaky puff pastry.'
      ),
      (
            NULL,
            3,
            2,
            'Club Sandwich',
            15.00,
            'PLN',
            'Classic sandwich loaded with layers of meats, cheese, and veggies.'
      ),
      (
            NULL,
            3,
            3,
            'Pancake Sandwich',
            11.00,
            'PLN',
            'Unique twist on sandwich with fluffy pancakes as the bread.'
      ),
      (
            NULL,
            3,
            6,
            'BLT Sandwich',
            12.00,
            'PLN',
            'Enjoy the crispy bacon, fresh lettuce, and juicy tomatoes.'
      ),
      (
            NULL,
            3,
            5,
            'PB&J Sandwich',
            16.00,
            'PLN',
            'A childhood favorite made with creamy peanut butter and jam.'
      ),
      (
            NULL,
            3,
            6,
            'Roast Beef Sandwich',
            14.00,
            'PLN',
            'Savor the tender roast beef paired with savory toppings.'
      );