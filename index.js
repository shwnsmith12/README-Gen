// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
inquirer
    .prompt([
        {
            type: "input",
            message: "What is the title of the project?",
            name: "title",
        },
        {
            type: "input",
            message: "Provide a brief description of your project:",
            name: "description",
        },
        {
            type: "input",
            message: "What is the installation process?",
            name: "installation"
        },
        {
            type: "input",
            message: "What are the features of this project?",
            name: "features"
        },
        {
            type: "input",
            message: "Name all contributors for this project:",
            name: "contributors"
        },
        {
            type: "list",
            message: "What is the license for the application?",
            name: "license",
            choices: ['Unlicense', 'MIT', 'Apache', 'Berkeley Source Distribution (BSD)', 'Mozilla Public License (MPL)', 'GNU General Public License (GPL)', 'Eclipse Public License (EPL)']

        },
        {
            type: "input",
            message: "What is the best email for users can contact you with questions or comments?",
            name: "email"
        },
        {
            type: "input",
            message: "Please share your GitHub account so others can see more of your work:",
            name: "github"
        }
        ]).then((data) => {
            console.log(data);
            fs.writeFile('README.md', generateMarkdown(data),
            error =>{
                if (error) {
                    console.log("Please enter all the required data")
                }
                console.log("Your README has been created quite professionally!")
            }
        )})