// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js")


// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    message: "What is the project title?",
    name: "title"
}, {
    type: "input",
    message: "What is the description of the project?",
    name: "description"
}, {
    type: "input",
    message: "Installation",
    name: "installation"
}, {
    type: "input",
    message: "Usage",
    name: "usage"
}, {
    type: "input",
    message: "Contribution Guidlines",
    name: "contribution"
}, {
    type: "input",
    message: "Test Instructions",
    name: "instructions"
}, {
    type: "input",
    message: "What is your github username?",
    name: "github"
}, {
    type: "input",
    message: "What is your email?",
    name: "email"
}, {
    type: "list",
    message: "What license was used?",
    choices: ["MIT", "GNU v3", "BSD 3", "Apache 2.0"],
    name: "license"
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err){
        if (err) {
            return console.log(err)
        } else {
            console.log("Success")
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function (data) {
            writeToFile(`${data.title}.md`, generateMarkdown(data));
            console.log(data);
        })
}

// Function call to initialize app
init();
