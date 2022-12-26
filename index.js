// Packages needed for application
const inquirer = require('inquirer');
const fs = require('fs');
const generateHtml = requirie('');

// Array of questions for user input
const questions = [
    {
        type: 'input',
        message: "Enter team manager's name:",
        name: 'manager-name',
    },
    {
        type: 'input',
        message: "Enter team manager's employee ID:",
        name: 'manager-ID'
    },
    {
        type: 'input',
        message: "Enter team manager's email address:",
        name: 'manager-email'
    },
    {
        type: 'input',
        message: "Enter team manager's office number:",
        name: 'manager-office'
    },
    {
        type: 'list',
        message: 'Would you like to add an engineer, add an intern, or finish building your team?',
        choices: ['add an engineer', 'add an intern', 'finish building my team'],
        name: 'menu'
    },
]

// Function to write to HTML file
function writetoFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if(err) throw err 
        console.log("Input received!")
    }
    )
}

// Function to initialize app
function init() {
    inquirer
    .prompt (questions)
    .then((response)=> {
        writetoFile('index.html', generateHtml(response))
        console.log(response)
    }
    )
}

// Function call to initialize app
init();