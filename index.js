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
            message: 'description of your project',
            name: 'description',
        },
        {
            type: 'input',
            message: 'installation instructions',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'usage information',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'contribution guidelines?',
            name: 'contributing',
        },
        {
            type: 'input',
            message: 'test insructions',
            name: 'test',
        },
        {
            type: 'list',
            message: 'license?',
            name: 'license',
            choices: [
                "MIT",
                "Apache",
                "GPL"
            ]
        },
        {
            type: 'input',
            message: 'github username',
            name: 'github',
        },
        {
            type: 'input',
            message: 'email',
            name: 'email',
        },
    ]).then((response) =>
        fs.writeFile(
            "./README.md" ,

            `
            # ${response.title}

            ## Description 

            ${response.description}

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
            
            
            
            
            
            
            
            
            
            ,(err) => err ? console.log("There was an error!") : console.log("Successfully appended to file!")


        )
    );