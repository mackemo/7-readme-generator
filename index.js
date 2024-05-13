// TODO: Include packages needed for this application
const fs = require('fs');
const markDown = require('./utils/generateMarkdown');
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
        message: 'Please enter a description of your project.', 
    },
    {
        type: 'input',
        name: 'screenshot',
        message: 'Provide the relative path for the screenshot of the app.', 
    },
    {
        type: 'input',
        name: 'process',
        message: 'What was the process to creating your application?', 
    },
    {
        type: 'input',
        name: 'links',
        message: 'Provide the links to your webpage and your github repository.', 
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
        type: 'list',
        name: 'license',
        message: 'Select a license for your project:', 
        choices: ['Apache License 2.0', 'GNU', 'MIT', 'BSD 2-clause', 'BSD 3-clause', 
        'Boost', 'Creative Commons', 'Eclipse', 'GNU v3', 'GNU v2', 'Mozilla', 'The Unlicense'],
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
    },
    {
        type: 'input',
        name: 'acknowlegement',
        message: 'Please enter the resources used to make the project.', 
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, JSON.stringify(data, (err) => 
        err ? console.error(err) : console.log("Success!"))
    );
}

// TODO: Create a function to initialize app
function init() {
}

// Function call to initialize app
init();
