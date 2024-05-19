/*
Creates the 'wit' database and 3 users:
  * witadmin with full permissions to the database
  * witapp to be used by the web application
  * witreader with read-only access
*/

SHOW DATABASES;

CREATE DATABASE wit;

CREATE USER 'witadmin'@'%' IDENTIFIED BY 'witadmin';
GRANT ALL ON wit.* TO 'witadmin'@'%';

CREATE USER 'witapp'@'%' IDENTIFIED WITH mysql_native_password BY 'witapp';
GRANT INSERT, UPDATE, DELETE, SELECT ON wit.* TO 'witapp'@'%';

CREATE USER 'witreader'@'%' IDENTIFIED BY 'witreader';
GRANT SELECT ON wit.* TO 'witreader'@'%';

SHOW DATABASES;
