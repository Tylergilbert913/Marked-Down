const fs = require('fs');
const inquirer = require('inquirer');
inquirer
    .prompt([
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
    ]).then((response) =>
        fs.writeFile(
            "README.md",

            // TODO: Figure out how to make everything the rigth size font and create clickable links in the table of contents

            `
# ${response.title}

![License](https://img.shields.io/badge/License-${response.license}-red)

## Description 

${response.description}

## Table of Contents

* [Installation] (#installation)
* [Usage] (#usage)
* [Contributors] (#contributing)
* [Testing] (#test)
* [License] (#license)


## Installation Instructions

${response.installation}

## Usage Information 

${response.usage}

## Contributors 

${response.contributing}

## Testing Instructions 

${response.test}

## License

${response.license}

## Github Username

${response.github}

## Email

${response.email}
`









            , (err) => err ? console.log("There was an error!") : console.log("Successfully appended to file!")


        )
    );


