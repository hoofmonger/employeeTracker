const inquirer = require('inquirer')
const mysql2 = require('mysql2')
const cTable = require('console.table')

const questions = [
    {
        message: "What would you like to do?",
        type: 'list',
        choices: [
        'View all Employees', 
        'Add Employees', 
        'Update Employee Role', 
        'View all Roles', 
        'Add Role', 
        'View all Departments', 
        'Add Department', 
        'Quit'
    ],
    name: 'actionPrompt'

    },
    {
        message: 'What is the name of this Employee?',
        type: 'input',
        name: 'employeeName',
        when: (response) => 
        response.actionPrompt === 'Add Employee'
    }

]