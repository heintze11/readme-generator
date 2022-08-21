// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === "Apache 2.0"){
    return "https://img.shields.io/badge/License-Apache_2.0-blue.svg"
  } else if (license === "GNU GPL v3"){
    return "https://img.shields.io/badge/License-GPLv3-blue.svg"
  } else if (license === "BSD 3"){
    return "https://img.shields.io/badge/License-BSD_3--Clause-blue.svg"
  } else if (license === "MIT"){
    return "https://img.shields.io/badge/License-MIT-yellow.svg"
  } else {
    return ""
  }
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === "Apache 2.0"){
    return "https://opensource.org/licenses/Apache-2.0"
  } else if (license === "GNU GPL v3"){
    return "https://www.gnu.org/licenses/gpl-3.0"
  } else if (license === "BSD 3"){
    return "https://opensource.org/licenses/BSD-3-Clause"
  } else if (license === "MIT"){
    return "https://opensource.org/licenses/MIT"
  } else {
    return ""
  }
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === "Apache 2.0"){
    return `[${license}](${renderLicenseLink(license)}) was the license used to create this project. Please click on the link for more information.`
  } else if (license === "GNU GPL v3"){
    return `[${license}](${renderLicenseLink(license)}) was the license used to create this project. Please click on the link for more information.`
  } else if (license === "BSD 3"){
    return `[${license}](${renderLicenseLink(license)}) was the license used to create this project. Please click on the link for more information.`
  } else if (license === "MIT"){
    return `[${license}](${renderLicenseLink(license)}) was the license used to create this project. Please click on the link for more information.`
  } else {
    return ""
  }
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![License Badge](${renderLicenseBadge(data.license)})
  ## Table of Contents:
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Test Instructions](#tests)
  - [Contact](#contact)
  - [license](#license)
  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contribution
  Can other people contribute to this project?    
  ${data.contribution}
  ## Tests
  Here is an example to use for testing purposes:  
  ${data.instructions}
  ## Contact
  Use the links below to contact the creator with questions.  
  [Github](https://github.com/${data.github})  
  [Email](mailto:${data.email})
  ## License
  ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
