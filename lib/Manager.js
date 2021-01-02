// first we need to import the parent class constructor 

const Employee = require('./Employee');


class Manager extends Employee {

    // use constructor() method to define porperties
    constructor(name, id, email, officeNumber) {

        // call parent 'super constructor' to grab the common properties
        super(name, id, email)

        //add properties that don't belong to parent construtor/ are unique to manager 
        this.officeNumber = officeNumber

    }

    getName() {
        return this.name
    }

    getId() {
        return this.id
    }

    getEmail() {
        return this.email
    }

    getOfficeNumber() {
        return this.officeNumber
    }

    getRole() {
        return 'Manager'
    }
}

module.exports = Manager;