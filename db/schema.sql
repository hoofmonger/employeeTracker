DROP DATABASE IF EXISTS employees;
CREATE DATABASE employees;

USE employees;

DROP TABLE IF EXISTS departments;
CREATE TABLE departments (
    id INT,
    department_name VARCHAR(30)
);

DROP TABLE IF EXISTS roles;
CREATE TABLE roles (
  id INT NOT NULL,
  role_name VARCHAR(30)
  salary DECIMAL,
  department_id INT 
);

DROP TABLE IF EXISTS employee;
CREATE TABLE employee (
  id INT NOT NULL,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT NOT NULL
  manager_id INT
);


