
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./generateMarkdown.js");

const questions = ([
        {
            type: 'input',
            message: 'What is your project title?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Description of your project:',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Installation instructions:',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'Usage information:',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'Contribution guidelines:',
            name: 'contributing',
        },
        {
            type: 'input',
            message: 'Test insructions:',
            name: 'test',
        },
        {
            type: 'list',
            message: 'License:',
            name: 'license',
            choices: [
                "MIT",
                "Apache",
                "GPL",
                "None"
            ]
        },
        {
            type: 'input',
            message: 'Github username:',
            name: 'github',
        },
        {
            type: 'input',
            message: 'Email me at:',
            name: 'email',
        },
    ]);

    // TODO: Create a function to write README file
function writeToFile(fileName, response) { 
    fs.writeFile(fileName, response, err => err ? console.error(err) : console.log('Success!'));
}

// TODO: Create a function to initialize app
function init() { 
    inquirer
        .prompt(questions)
        .then((response) => {
            const contents = generateMarkdown(response);
            writeToFile("README.md", contents);
        });
}

// Function call to initialize app
init();
