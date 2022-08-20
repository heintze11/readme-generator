// Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js")


// Create an array of questions for user input
const questions = [{
    type: "input",
    message: "What is the project title?",
    name: "title"
}, {
    type: "input",
    message: "Please provide a detailed description of the project.",
    name: "description"
}, {
    type: "input",
    message: "How/what do you need to install the program?",
    name: "installation"
}, {
    type: "input",
    message: "How do you run the project?",
    name: "usage"
}, {
    type: "input",
    message: "Can other people contribute to the project?",
    name: "contribution"
}, {
    type: "input",
    message: "Please include an example test for the application.",
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
    choices: ["MIT", "GNU GPL v3", "BSD 3", "Apache 2.0", "NA"],
    name: "license"
}
];

// Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err){
        if (err) {
            return console.log(err)
        } else {
            console.log("Success")
        }
    })
}

// Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function (data) {
            writeToFile(`${data.title}.md`, generateMarkdown(data));
        })
}

// Function call to initialize app
init();
