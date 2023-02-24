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
    }
];
module.exports = { openingQuestion, standardQuestions };