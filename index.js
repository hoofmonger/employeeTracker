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
        message: 'What is the first name of this Employee?',
        type: 'input',
        name: 'employeeFirstName',
        when: (response) => 
        response.actionPrompt === 'Add Employees'
    },
    {
        message: 'What is the last name of this Employee?',
        type: 'input',
        name: 'employeeLastName',
        when: (response) => 
        response.actionPrompt === 'Add Employees'
    },
    {
        message: 'What is the Role of this Employee?',
        type: 'list',
        choices: [
            'Manager',
            'Sales',
            'Marketing',
            'Engineer',
            'Customer Service'
        ],
        name: 'EmployeeRole',
        when: (response) => 
        response.actionPrompt === 'Add Employees'
    },
    {
        message: "Who is this Employee's Manager?",
        type: 'list',
        choices: [
            'Sally Davis',
            'Robert Smith',
            'Kennedy Bonnet',
            'Simon Peterson',
            'no Manager'
        ],
        name: 'employeeManager',
        when: (response) => 
        response.actionPrompt === 'Add Employees'
    },
    {
        message: 'What is the name of this Department?',
        type: 'input',
        name: 'departmentName',
        when: (response) => 
        response.actionPrompt === 'Add Department'
        
    },
    {
        message: 'What is the name of this Role?',
        type: 'input',
        name: 'roleName',
        when: (response) => 
        response.actionPrompt === 'Add Role'
    },
    {
        message: 'What is the Salary of this Role?',
        type: 'number',
        name: 'roleSalary',
        when: (response) => 
        response.actionPrompt === 'Add Role'
    }

]

function init() {
    
    inquirer.prompt(questions)
    .then((response) => {

        
    if (response.actionPrompt === 'Quit'){
       process.exit
      

        

    }
    else {
        init()
    }





})
}


init()