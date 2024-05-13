// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge;

  switch(license) {

    case 'Apache License 2.0':
      licenseBadge =
      '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]';
      break;


    case 'GNU':
      licenseBadge = 
      '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]';
      break;


    case 'MIT':
      licenseBadge = 
      '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]';
      break;


    case 'BSD 2-clause':
      licenseBadge = 
      '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)]';
      break;


    case 'BSD 3-clause':
      licenseBadge = 
      '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]';
      break;


    case 'Boost':
      licenseBadge = 
      '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]';
      break;


    case 'Creative Commons':
      licenseBadge = 
      '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)]';
      break;


    case 'Eclipse':
      licenseBadge = 
      '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)]';
      break;


    case 'GNU v3':
      licenseBadge = 
      '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)]';
      break;


    case 'GNU v2':
      licenseBadge = 
      '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)]';
      break;


    case 'Mozilla':
      licenseBadge = 
      '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]';
      break;


    case 'The Unlicense':
      licenseBadge = 
      '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]';
      break;


    default:
      licenseBadge = "";
  }

  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink;

  switch(license) {

    case 'Apache License 2.0':
      licenseLink =
      '(https://opensource.org/licenses/Apache-2.0)';
      break;


    case 'GNU':
      licenseLink =
      '(https://www.gnu.org/licenses/gpl-3.0)';
      break;


    case 'MIT':
      licenseLink =
      '(https://opensource.org/licenses/MIT)';
      break;


    case 'BSD 2-clause':
      licenseLink =
      '(https://opensource.org/licenses/BSD-2-Clause)';
      break;


    case 'BSD 3-clause':
      licenseLink =
      '(https://opensource.org/licenses/BSD-3-Clause)';
      break;


    case 'Boost':
      licenseLink = 
      '(https://www.boost.org/LICENSE_1_0.txt)';
      break;


    case 'Creative Commons':
      licenseLink =
      '(http://creativecommons.org/publicdomain/zero/1.0/)';
      break;


    case 'Eclipse':
      licenseLink =
      '(https://opensource.org/licenses/EPL-1.0)';
      break;


    case 'GNU v3':
      licenseLink =
      '(https://www.gnu.org/licenses/agpl-3.0)';
      break;


    case 'GNU v2':
      licenseLink = 
      '(https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';
      break;


    case 'Mozilla':
      licenseLink =
      '(https://opensource.org/licenses/MPL-2.0)';
      break;


    case 'The Unlicense':
      licenseLink = 
      '(http://unlicense.org/)';
      break;


    default:
      licenseLink = "";
  }

  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
