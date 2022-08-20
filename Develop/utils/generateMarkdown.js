// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === "Apache 2.0"){
    return "https://img.shields.io/badge/License-Apache_2.0-blue.svg"
  } else if (license === "GNU v3"){
    return "https://img.shields.io/badge/License-GPLv3-blue.svg"
  } else if (license === "BSD 3"){
    return "https://img.shields.io/badge/License-BSD_3--Clause-blue.svg"
  } else if (license === "MIT"){
    return "https://img.shields.io/badge/License-MIT-yellow.svg"
  } else {
    return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![License Badge](${renderLicenseBadge(data.license)})
  # Table of Contents:
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Contact](#contact)
  - [license](#license)
  ## Description
  ### ${data.description}
  ## Installation
  ### ${data.installation}
  ## Usage
  ### ${data.usage}
  ## Contribution
  ### ${data.contribution}
  ## Contact
  ### ${data.email}
  ## license
  ### ${data.license}
`;
}

module.exports = generateMarkdown;
