/*
 *  simple Employee class to hold data common to all employees.
 */

class Employee {
    constructor(name, id, email, role = "Employee") {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }
    getName() { return this.name }
    getId() { return this.id }
    getEmail() { return this.email }
    getRole() { return this.role }
}

module.exports = Employee;