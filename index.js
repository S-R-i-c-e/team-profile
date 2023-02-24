const Manager = require("./lib/Manager");   // class Manager
const Engineer = require("./lib/Engineer"); // class Engineer
const Intern = require("./lib/Intern");     // class Intern
const inquirer = require("inquirer");       // https://github.com/SBoudrias/Inquirer.js - with thanks.
const path = require("path");
const fs = require("fs/promises");
const questions = require("./inquirer/questions");  // five sets of questions used by inquirer.

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

const roleQuestion = questions.openingQuestion;         // ask the employee role.
const employeeQuestions = questions.standardQuestions;  // three questions common to all Employees. 
const managerQuestion = questions.management;           // question unique to Manager.
const engineerQuestion = questions.engineer;            // question unique to Engineer.
const internQuestion = questions.intern;                // question unique to Intern.



askQuestions([]); // program starts passing an empty array to store Manager, Engineer, or Intern instances.

async function askQuestions(team) {
    let { role } = await inquirer.prompt(roleQuestion);                         // first establish the employee role.
    if (!(role === 'None')) {                                                   // if no role selected drop out to create page.
        let { name, id, email } = await inquirer.prompt(employeeQuestions);     // otherwise ask the standard Employee questions.
        switch (role) {                                                         // then choose the appropriate question and instance creation.
            case "Manager":
                let { officeNumber } = await inquirer.prompt(managerQuestion);
                team.push(new Manager(name, id, email, officeNumber));
                break;
            case "Engineer":
                let { github } = await inquirer.prompt(engineerQuestion);
                team.push(new Engineer(name, id, email, github));
                break;
            case "Intern":
                  let { school } = await inquirer.prompt(internQuestion);
                team.push(new Intern(name, id, email, school));
                break;
            default:
                break;
        }
        askQuestions(team);                                                     // ask again until all employee data entered.
    } else {
        let htmlDoc = render(team);                                             // all employee data entered - create the webpage.
        await fs.writeFile(outputPath, htmlDoc);                                // write the html page to file. 
    }
}