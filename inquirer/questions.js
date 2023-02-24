const openingQuestion = {
    type: 'list',
    name: 'role',
    message: 'Select the role of the next team member else "None" if done',
    choices: ['Manager', 'Engineer', 'Intern', 'None'],
};

const standardQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'enter employee name: ',
        validate(value) {
            const pass = value.match(/(^[A-Za-z]+)\s([A-Za-z]+)$/); // two alpha strings space seperated
            if (pass) {
                return true;
            }
            return 'Please enter two names';
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "enter the employee's id-number",
        validate(value) {
            const pass = value.match(/^[0-9]+$/); // numeric string
            if (pass) {
                return true;
            }
            return "Please enter the manager's office number";
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "enter the employee's email address",
        validate(value) {
            const pass = value.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/); // email structure verified only
            if (pass) {
                return true;
            }
            return "Please enter the employee's email address";
        }
    },
];

const management = {
    type: 'input',
    name: 'officeNumber',
    message: "enter the manager's office number",
    validate(value) {
        const pass = value.match(/^[0-9]+$/); // numeric string
        if (pass) {
            return true;
        }
        return "Please enter the manager's office number";
    }
}

const engineer = {
    type: 'input',
    name: 'github',
    message: "enter the engineer's github id",
}

const intern = {
    type: 'input',
    name: 'school',
    message: "enter the interns's school",
}
module.exports = { openingQuestion, standardQuestions, management, engineer, intern };