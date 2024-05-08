// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    }, 
    {
        type: 'input',
        name: 'description',
        message: 'Please write a description for your project.', 
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?', 
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter the usage information.', 
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How can others contribute?', 
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please enter how to test your project.', 
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
