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

let team = [];
let questionOne = questions.openingQuestion;
let employeeQuestions = questions.standardQuestions;

askQuestions();

async function askQuestions() {
    let { role } = await inquirer.prompt(questionOne);
    if (!(role === 'None')) {
        let { name, id, email } = await inquirer.prompt(employeeQuestions);
        team.push({role : role, name : name, id : id, email : email});
        askQuestions();
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