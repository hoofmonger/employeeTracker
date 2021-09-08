const inquirer = require('inquirer')
const mysql2 = require('mysql2')
const cTable = require('console.table')
const connection = require('./db/config')

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
    else if(response.actionPrompt === 'Add Department'){
addDepartment(response)
    }
    else if (response.actionPrompt === 'View all Departments'){
        viewAllDepartments()
    }
    else if (response.actionPrompt === 'Add Role'){
        addRoleName(response)
        addRoleSalary(response)
    }
   
    else if (response.actionPrompt === 'View all Roles'){
        viewAllRoles()
    } 
    else if (response.actionPrompt === 'Add Employee'){
        addEmployeeFirstName(response)
        addEmployeeLastName(response)
    }
    else if (response.actionPrompt === 'View all Employees'){
        viewAllEmployees()
    } 
    else {
        init()
    }





})
}


async function addDepartment(data){
    
    try {
    await connection.query('INSERT INTO departments (department_name) VALUES (?);', data.departmentName)    
        console.log('-----')
    init()
} catch (error) {
        console.log(error)
    }

}

async function addRoleName(data){
    console.log(roleName)
    try {
    await connection.query('INSERT INTO roles (role_name) VALUES (?);', data.roleName)    
        console.log('-----')
    init()
} catch (error) {
        console.log(error)
    }

}

async function addRoleSalary(data){
    
    try {
    await connection.query('INSERT INTO roles (salary) VALUES (?);', data.roleSalary)    
        console.log('-----')
    init()
} catch (error) {
        console.log(error)
    }

}

async function addEmployeeFirstName(data){
    
    try {
    await connection.query('INSERT INTO employee (first_name) VALUES (?);', data.employeeFirstName)    
        console.log('-----')
    init()
} catch (error) {
        console.log(error)
    }

}


async function addEmployeeLastName(data){
    
    try {
    await connection.query('INSERT INTO employee (last_name) VALUES (?);', data.employeeLastName)    
        console.log('-----')
    init()
} catch (error) {
        console.log(error)
    }

}


async function viewAllDepartments(){
    const departments = await connection.query('SELECT * FROM departments')
    console.table(departments)
    init()
}
async function viewAllRoles(){
    const roles = await connection.query('SELECT * FROM roles')
    console.table(roles)
    init()
}

async function viewAllEmployees(){
    const employees = await connection.query('SELECT * FROM employee')
    console.table(employees)
    init()
}


init()