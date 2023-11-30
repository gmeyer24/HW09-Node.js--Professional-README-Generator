// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT License":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)";
    case "GNU GPLv3":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-red.svg)](https://www.gnu.org/licenses/gpl-3.0)";

    default:
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT License":
      return "[MIT License](https://opensource.org/licenses/MIT)";
    case "GNU GPLv3":
      return "[GNU GPLv3 License](https://www.gnu.org/licenses/gpl-3.0)";

    default:
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseLink = renderLicenseLink(license);
  if (licenseLink) {
    return `## License
This application is covered under the ${licenseLink}.`;
  } else {
    return "";
    // If no license is provided, return an empty string
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  // const licenseSection = renderLicenseSection(data.license);

  return `
# ${data.title}

${licenseBadge}
     
## Description
${data.description}
        
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
    ${data.installation}

## Usage
    ${data.usage}

## License

    This application is covered under the ${data.license}.
        
## Contributing
    ${data.contribution}
        
## Tests
    ${data.test}
        
## Questions
* [GitHub Profile](https://github.com/${data.github})
* Please email me at ${data.email} with additional questions. `;
}

module.exports = generateMarkdown;
