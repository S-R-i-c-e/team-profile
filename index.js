const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs/promises");
const questions = require("./inquirer/questions");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// const render = require("./src/page-template.js");

const questionOne = questions.openingQuestion;
const employeeQuestions = questions.standardQuestions;
const managerQuestions = questions.management;
const engineerQuestions = questions.engineer;
const internQuestions = questions.intern;

askQuestions([]);

async function askQuestions(team) {
    let { role } = await inquirer.prompt(questionOne);
    if (!(role === 'None')) {
        let { name, id, email } = await inquirer.prompt(employeeQuestions);
        switch (role) {
            case "Manager":
                let { officeNumber } = await inquirer.prompt(managerQuestions);
                team.push(new Manager(name, id, email, officeNumber));
                break;
            case "Engineer":
                let { github } = await inquirer.prompt(engineerQuestions);
                team.push(new Engineer(name, id, email, github));
                break;
            case "Intern":
                let { school } = await inquirer.prompt(internQuestions);
                team.push(new Intern(name, id, email, school));
                break;
            default:
                break;
        }
        askQuestions(team);
    } else {
        render(team);
    }
}

function render(employees) {
    employees.forEach(employee => {
        console.log(employee);
    });
}

// let htmlDoc = render(team);

// await fs.writeFile(outputPath, htmlDoc);