// TODO: Include packages needed for this application
const fs = require('fs');
const markDown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'fileName',
        message: 'What is the name of your file?',
    },
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
        message: 'Provide the relative path for the screenshot of the app ex: (![alt text](assets/images/screenshot.png)).', 
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
        choices: ['Apache License 2.0', 'GNU General v3', 'MIT', 'BSD 2-clause', 'BSD 3-clause', 
        'Boost', 'Creative Commons', 'Eclipse', 'GNU Affero v3', 'GNU General v2', 'Mozilla', 'The Unlicense'],
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
        name: 'acknowledgement',
        message: 'Please enter the resources used to make the project.', 
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your github username.', 
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email.', 
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, markDown(data), (err) => 
        err ? console.error(err) : console.log("Success!")
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            writeToFile(data.fileName, data);
        })

        .catch(function (error) {
            console.error("Error occurred:", error);
        });
}

// Function call to initialize app
init();
