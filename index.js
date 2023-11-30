// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// Importing the generateMarkdown.js file
const generateMarkdown = require("./utils/generateMarkdown");

// Data to pass to generateMarkdown
const userData = {};

const markdownContent = generateMarkdown(userData);

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "Project Title",
    name: "title",
  },
  {
    type: "input",
    message: "Description",
    name: "description",
  },
  {
    type: "input",
    message: "Installation Instructions",
    name: "installation",
  },
  {
    type: "input",
    message: "Usage Information",
    name: "usage",
  },
  {
    type: "input",
    message: "Contribution Guidelines",
    name: "contribution",
  },
  {
    type: "input",
    message: "Test Instructions",
    name: "test",
  },
  {
    type: "input",
    message: "GitHub username",
    name: "github",
  },
  {
    type: "input",
    message: "Email",
    name: "email",
  },
  {
    type: "list",
    message: "Chose a license for your application",
    name: "license",
    choices: ["MIT License", "GNU GPLv3"],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("README file created successfully!");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
    console.log(response);
    // Assign the collected data to userData object
    userData.title = response.title;
    userData.description = response.description;
    userData.installation = response.installation;
    userData.usage = response.usage;
    userData.contribution = response.contribution;
    userData.test = response.test;
    userData.github = response.github;
    userData.email = response.email;
    // Assign the selected license to userData
    userData.license = response.license;

    const markdownContent = generateMarkdown(userData);

    writeToFile("generatedREADME.md", markdownContent, (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log("Success!");
    });
  });
}

// Function call to initialize app
init();
