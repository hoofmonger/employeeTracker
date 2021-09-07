DROP DATABASE IF EXISTS employees;
CREATE DATABASE employees;

USE employees;

DROP TABLE IF EXISTS departments;
CREATE TABLE departments (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(30)
);

DROP TABLE IF EXISTS roles;
CREATE TABLE roles (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  role_name VARCHAR(30),
  salary DECIMAL,
  department_id INT 
);

DROP TABLE IF EXISTS employee;
CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT NOT NULL,
  manager_id INT
);


