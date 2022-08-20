// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js")


// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    message: "What is the project title?",
    name: "Title"
}, {
    type: "input",
    message: "What is the description of the project?",
    name: "Description"
}, {
    type: "input",
    message: "Installation",
    name: "Installation"
}, {
    type: "input",
    message: "Usage",
    name: "Usage"
}, { 
    type: "input",
    message: "Contribution Guidlines",
    name: "Contribution"
 }, {
    type: "input",
    message: "Test Instructions",
    name: "Instructions"
  },{
    type: "input",
    message: "What is your github username?",
    name: "Github"
   }, {
    type: "input"
    message: "What is your email?",
    name: "email"
    }, {
    type: "list"
    message: "What license was used?"
    choices: ["MIT", "GPL", "BSD"]
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(info) {
        writeToFile("ReadmeTest.md", generateMarkdown(info));

    }) 
}

// Function call to initialize app
init();
