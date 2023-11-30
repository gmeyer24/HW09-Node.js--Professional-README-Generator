// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");
// Importing the generateMarkdown.js file
// const generateMarkdown = require('./generateMarkdown'); 

// // Data to pass to generateMarkdown
// const userData = {
    
//   };
  
// const markdownContent = generateMarkdown(userData);

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      message: 'Project Title',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Description',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Installation Instructions',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'Usage Information',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'Contribution Guidelines',
      name: 'contribution',
    },
    {
      type: 'input',
      message: 'Test Instructions',
      name: 'test',
    },
    {
      type: 'input',
      message: 'GitHub username',
      name: 'github',
    },
    {
      type: 'input',
      message: 'Email',
      name: 'email',
    },
    {
      type: 'list',
      message: 'Chose a license for your application',
      name: 'license',
      choices: [
        "MIT License", "GNU GPLv3"
      ]
    },
  ]


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
       fs.writeFile(fileName, data, err => {
        if (err){
            console.error(err);
            return;
        } 
        console.log("README file created successfully!");
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((response) => {
        console.log(response);
        const {title, description, installation, usage, contribution, test, github, email } = response;

        let readmeContent = `
# ${response.title}
        
## Description
${response.description}
        
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
    ${response.installation}

## Usage
    ${response.usage}

## License

    This application is covered under the ${response.license}.
        
## Contributing
    ${response.contribution}
        
## Tests
    ${response.test}
        
## Questions
* [GitHub Profile](https://github.com/${response.github})
* Please email me at ${response.email} with additional questions. `;

        writeToFile("README2.md", readmeContent, err => {
            if (err){
                console.error(err);
                return;
            } 
            console.log("Success!");
        })
})
}

// Function call to initialize app
init();
