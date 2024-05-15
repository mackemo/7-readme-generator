// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge;

  switch(license) {

    case 'Apache License 2.0':
      licenseBadge =
      '[![Apache License 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]';
      break;


    case 'GNU General v3':
      licenseBadge = 
      '[![GNU General v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]';
      break;


    case 'MIT':
      licenseBadge = 
      '[![MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]';
      break;


    case 'BSD 2-clause':
      licenseBadge = 
      '[![BSD 2-clause](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)]';
      break;


    case 'BSD 3-clause':
      licenseBadge = 
      '[![BSD 3-clause](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]';
      break;


    case 'Boost':
      licenseBadge = 
      '[![Boost](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]';
      break;


    case 'Creative Commons':
      licenseBadge = 
      '[![Creative Commons](https://licensebuttons.net/l/zero/1.0/80x15.png)]';
      break;


    case 'Eclipse':
      licenseBadge = 
      '[![Eclipse](https://img.shields.io/badge/License-EPL_1.0-red.svg)]';
      break;


    case 'GNU Affero v3':
      licenseBadge = 
      '[![GNU Affero v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)]';
      break;


    case 'GNU General v2':
      licenseBadge = 
      '[![GNU General v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)]';
      break;


    case 'Mozilla':
      licenseBadge = 
      '[![Mozilla](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]';
      break;


    case 'The Unlicense':
      licenseBadge = 
      '[![The Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]';
      break;


    default:
      licenseBadge = "";
  }

  licenseBadge += `(${renderLicenseLink(license)})`

  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink;

  switch(license) {

    case 'Apache License 2.0':
      licenseLink =
      'https://opensource.org/licenses/Apache-2.0';
      break;


    case 'GNU General v3':
      licenseLink =
      'https://www.gnu.org/licenses/gpl-3.0';
      break;


    case 'MIT':
      licenseLink =
      'https://opensource.org/licenses/MIT';
      break;


    case 'BSD 2-clause':
      licenseLink =
      'https://opensource.org/licenses/BSD-2-Clause';
      break;


    case 'BSD 3-clause':
      licenseLink =
      'https://opensource.org/licenses/BSD-3-Clause';
      break;


    case 'Boost':
      licenseLink = 
      'https://www.boost.org/LICENSE_1_0.txt';
      break;


    case 'Creative Commons':
      licenseLink =
      'http://creativecommons.org/publicdomain/zero/1.0/';
      break;


    case 'Eclipse':
      licenseLink =
      'https://opensource.org/licenses/EPL-1.0';
      break;


    case 'GNU Affero v3':
      licenseLink =
      'https://www.gnu.org/licenses/agpl-3.0';
      break;


    case 'GNU General v2':
      licenseLink = 
      'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html';
      break;


    case 'Mozilla':
      licenseLink =
      'https://opensource.org/licenses/MPL-2.0';
      break;


    case 'The Unlicense':
      licenseLink = 
      'http://unlicense.org/';
      break;


    default:
      licenseLink = "";
  }

  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }

  return `This repository is using the [${license}](${renderLicenseLink(license)}) license.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}
  

  ## Description
  ${data.description}
  

  ## Table of Content
  -[Description](#Description)
  -[Process](#Process)
  -[Links](#Links)
  -[Installation](#Installation)
  -[Usage](#Usage)
  -[Licenses](#Licenses)
  -[Contribution](#Contribution)
  -[Test](#Test)
  -[Acknowledgement](#Acknowledgement)
  -[Questions](#Questions)
  

  ${data.screenshot}


  ## Process
  ${data.process}


  ## Links
  ${data.links}


  ## Installation
  ${data.installation}
  
  
  ## Usage
  ${data.usage}
  
  
  ## Licenses
  ${renderLicenseSection(data.license)}
  
  
  ## Contribution
  ${data.contribution}
  
  
  ## Test
  ${data.test}


  ## Acknowledgement
  ${data.acknowledgement}
  
  
  ## Questions
  Contact with questions at:
  
  Email: ${data.email}
  Click [here](https://github.com/${data.github}) for Github account.
`;
}

module.exports = generateMarkdown;
