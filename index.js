// Packages needed for application
const inquirer = require('inquirer');
const fs = require('fs');
const employeeList = []
const Employee = require('./lib/Employee')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')

// Array of questions for user input
const managerQuestions = [
    {
        type: 'input',
        message: "Enter team manager's name:",
        name: 'managerName',
    },
    {
        type: 'input',
        message: "Enter team manager's employee ID:",
        name: 'managerId'
    },
    {
        type: 'input',
        message: "Enter team manager's email address:",
        name: 'managerEmail'
    },
    {
        type: 'input',
        message: "Enter team manager's office number:",
        name: 'officeNumber'
    },
]

const engineerQuestions = [
    {
        type: 'input',
        message: "Enter Engineer's name:",
        name: 'engineerName',
    },
    {
        type: 'input',
        message: "Enter Engineer's employee ID:",
        name: 'engineerId'
    },
    {
        type: 'input',
        message: "Enter Engineer's email address:",
        name: 'engineerEmail'
    },
    {
        type: 'input',
        message: "Enter Engineer's github username:",
        name: 'github'
    },
]

const internQuestions = [
    {
        type: 'input',
        message: "Enter Intern's name:",
        name: 'internName',
    },
    {
        type: 'input',
        message: "Enter Intern's employee ID:",
        name: 'internId'
    },
    {
        type: 'input',
        message: "Enter Intern's email address:",
        name: 'internEmail'
    },
    {
        type: 'input',
        message: "Enter Intern's school:",
        name: 'school'
    },
]

const menuQuestions = [
    {
        type: 'list',
        message: 'Would you like to add an engineer, add an intern, or finish building your team?',
        choices: ['add an engineer', 'add an intern', 'finish building my team'],
        name: 'menu'
    },
]

// Function to generate HTML template literal
function generateHtml(data) {
    let employeeHtml = '';
    for (let i = 0; i < data.length; i++) {
        if (data[i].getRole() === 'Manager') {
            const managerHtml = `<div class="card shadow" style="width: 18rem">
        <header class="card-header">
        <h3>${data[i].getName()}</h3>
        <h3><i class="fa-sharp fa-solid fa-people-roof"></i> ${data[i].getRole()}</h3>
        </header>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${data[i].getId()}</li>
            <li class="list-group-item">Email: <a href="mailto: ${data[i].getEmail()}">${data[i].getEmail()}</a></li>
            <li class="list-group-item">Office No. ${data[i].getOfficeNumber()}</li>
        </ul>
        </div>`
            employeeHtml = employeeHtml + managerHtml
        } else if (data[i].getRole() === 'Engineer') {
            const engineerHtml = `<div class="card shadow" style="width: 18rem">
        <header class="card-header">
        <h3>${data[i].getName()}</h3>
        <h3><i class="fa-solid fa-user-gear"></i> ${data[i].getRole()}</h3>
        </header>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${data[i].getId()}</li>
            <li class="list-group-item"><a href="mailto: ${data[i].getEmail()}">${data[i].getEmail()}</a></li>
            <li class="list-group-item">Github: <a target="_blank" href="https://github.com/${data[i].getGithub()}">${data[i].getGithub()}</a></li>
        </ul>
        </div>`
            employeeHtml = employeeHtml + engineerHtml
        } else {
            const internHtml = `<div class="card shadow" style="width: 18rem">
        <header class="card-header">
        <h3>${data[i].getName()}</h3>
        <h3><i class="fa-solid fa-user-pen"></i> ${data[i].getRole()}</h3>
        </header>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${data[i].getId()}</li>
            <li class="list-group-item"><a href="mailto: ${data[i].getEmail()}">${data[i].getEmail()}</a></li>
            <li class="list-group-item">School: ${data[i].getSchool()}</li>
        </ul>
        </div>`
            employeeHtml = employeeHtml + internHtml
        }
    }
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <title>Team Profile</title>
    </head>
    <body>
    <div class ="d-flex justify-content-center m-3 gap-3">
        ${employeeHtml}
    </div> 
    <script src="https://kit.fontawesome.com/09291fcd82.js" crossorigin="anonymous"></script>   
    </body>
    </html>`;
}

// Function to write HTML file
function writetoFile() {
    fs.writeFile('index.html', generateHtml(employeeList), (err) => {
        if (err) throw err
        console.log("Input received!")
    }
    )
}

// Function to get manager data
function getManager() {
    inquirer
        .prompt(managerQuestions)
        .then((response) => {
            const manager = new Manager(response.managerName, response.managerId, response.managerEmail, response.officeNumber)
            employeeList.push(manager);
            nextEmployee()
        }
        )
}

// Function to prompt next employee card
function nextEmployee() {
    inquirer
        .prompt(menuQuestions)
        .then((response) => {
            if ('add an engineer' === response.menu) {
                return getEngineer()
            } else if ('add an intern' === response.menu) {
                return getIntern()
            } else {
                return writetoFile()
            }
        }
        )
}

// Function to get engineer data
function getEngineer() {
    inquirer
        .prompt(engineerQuestions)
        .then((response) => {
            const engineer = new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.github)
            employeeList.push(engineer)
            nextEmployee()
        }
        )
}

// Function to get intern data
function getIntern() {
    inquirer
        .prompt(internQuestions)
        .then((response) => {
            const intern = new Intern(response.internName, response.internId, response.internEmail, response.school)
            employeeList.push(intern)
            nextEmployee()
        }
        )
}

// Function call to initialize app
getManager();