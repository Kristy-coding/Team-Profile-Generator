// first we need to import the parent class constructor 

const Employee = require('./Employee');

class Intern extends Employee {

    constructor(name,id,email,school) {

        // call parent 'super constructor' to grab the common properties
        super(name,id,email)
        
        //add properties that don't belong to parent construtor/ are unique to intern
        this.school = school;
    }

    // define methods that are unique to the Intern object (or methods returns that we need to override), intern will inherit all common methods from employee class constructor  

    getSchool() {
        return this.school

    }

    getRole() {
        return 'Intern'

    }

}

module.exports = Intern 