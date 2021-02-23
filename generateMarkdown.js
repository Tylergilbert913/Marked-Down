// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === "MIT") {
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    }
    else if (license === "Apache") {
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    }
    else if (license === "GPL") {
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    }
  }
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    if (license === "MIT") {
      return "https://opensource.org/licenses/MIT"; 
    }
    else if (license === "Apache") {
      return "https://www.apache.org/licenses/LICENSE-2.0";
    }
    else if (license === "GPL") {
      return "https://www.gnu.org/licenses/old-licenses/lgpl-2.1.en.html";
    }
  }
  
  
  // TODO: Create a function to generate markdown for README
  function generateMarkdown(response) {
    return `
    # ${response.title}
    
    ${renderLicenseBadge(response.license)}

    ${renderLicenseLink(response.license)}
    
    ## Description 
    
    ${response.description}
    
    ## Table of Contents
    
    * [Installation](#installation)
    
    * [Usage](#usage)
    
    * [Contributors](#contributing)
    
    * [Testing](#test)
    
    * [License](#license
    
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
  }
  
  module.exports = generateMarkdown;
  