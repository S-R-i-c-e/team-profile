const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email, "Manager");
        this.officeNumber = officeNumber;
    }
    static create(data) {
        return new Manager(answers.name,
                            answers.id,
                            answers.email,
                            answers.officeNumber);
    }
    getOfficeNumber() { return this.officeNumber }
}

module.exports = Manager;