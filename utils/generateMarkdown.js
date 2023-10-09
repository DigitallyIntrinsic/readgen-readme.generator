// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license => {
  if (license) {
    return `![${license} License](https://img.shields.io/badge/license-${license.split(' ').join('%20')}-blue)
`;
  } else {
    return '';
  }
};
const createDescription = (title, description, link) => {
  if (link) {
    return `${description}

      View the deployed page at [${title}](${link}).`;
  } else {
    return `${description}`;
  }
};

const createTableOfContents = contentsArr => {
  let contentsList = '';
  contentsArr.forEach((item) => {
    if (item.content && item.header === 'Screenshots') {
      contentsList += `   * [${item.header}](#${(item.header).toLowerCase()})
      `;
    } else if (item.content) {
      contentsList += `* [${item.header}](#${(item.header).toLowerCase().split(' ').join('-')})
      `;
    }
  });
  return contentsList;
};

const createInstallation = install => {
  if (install) {
    return `To use this application, please install: 
      \`\`\`
      ${install}
      \`\`\``
  } else {
    return '';
  }
};

const createScreenshots = screenshotItem => {
  let allScreenshots = '';
  if (screenshotItem) {
    screenshotItem.forEach(shot => {
      allScreenshots += `![${shot.screenshotAlt}](${shot.screenshotLink})
${shot.screenshotDesc}
`;
    });
    return `${allScreenshots}`;
  } else {
    return '';
  }
};

const createBuiltWith = builtWith =>{
  let allTechnologies = '';

  if (builtWith) {
      builtWith.forEach(item => {
          allTechnologies += `
* ${item}`
      });
      return `${allTechnologies}`;
  } else {
      return '';
  };
};

const createUsage = (usage, screenshots) => {
  return `${usage} ${createScreenshots(screenshots)}`
};
// creates license section
const createLicense = license => {
  if (license) {
      return `This application is licensed under the ${license} license.`;
  } else {
      return '';
  }
};
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
