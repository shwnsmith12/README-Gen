// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicense(license) {
  if (license === 'Apache') {
    return '![License: Apache](https://img.shields.io/bade/License-Apache_2.0-blue.svg)(https://opensource.org/licenses/Apache-2.0)'
  }
  if (license === 'Unlicense') {
    return ''
  }
  if (license === 'MIT') {
    return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)(https://opensource.org/licenses/MIT)'
  }
  if (license === 'Berkeley Source Distribution (BSD)') {
    return '![License: BSD](https://img.shields.io/badge/License-BDS_3--Clause-blue.svg)(https://opensource.org/licenses/BSD-3-Clause)'
  }
  if (license === 'GNU General Public License (GPL)') {
    return '![License: MIT](https://img.shields.io/badge/License-GPLv3-blue.svg)(https://opensource.org/licenses/gpl-3.0)'
  }
  if (license === 'Mozilla Public License (MPL)') {
    return '![License: MIT](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)(https://opensource.org/licenses/MPL-2.0)'
  }
  if (license === 'Eclipse Public License (EPL)') {
    return '![License: MIT](https://img.shields.io/badge/License-EPL_1.0-red.svg)(https://opensource.org/licenses/EPL-1.0)'
  }
}

function generateMarkdown(data) {
  return `# ${data.title}
  
  ## Description
  - ${data.description}

  ## Table of Contents

  - [License](#license)
  - [Installation](#installation)
  - [Features](#features)
  - [Contributors](#contributors)
  - [Questions](#questions)

  ## License
  - ${renderLicense(data.license)}

  Refer to [https://choosealicense.com/](https://choosealicnese.com/).

  ## Installation
  To install this application, follow the steps below:
  - ${data.installation}

  ## Features

  - ${data.features}

  ## Contributors

  - ${data.contributors}

  ## Questions

  If you have any questions about this production, you can reach me directly at ${data.email}. And you can find more of the work I've done at [${data.github}](https://github.com/${data.github}/).
`;
}

module.exports = generateMarkdown;
