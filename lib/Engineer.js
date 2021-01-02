// first we need to import the parent class constructor 

const Employee = require('./Employee');

class Engineer extends Employee {
    
    // use constructor() method to define porperties
    constructor(name, id, email, github) {

         // call parent 'super constructor' to grab the common properties
         super(name, id, email)

         //add properties that don't belong to parent construtor/ are unique to engineer

         this.github = github
    
    }

    // define methods that are unique to the Engineer object, engineer will inherit all common methods from employee class constructor or methods returns that we need to override 
    
    getGithub() {
        return this.github
    }

    getRole() {
        return 'Engineer'
    }


}

 const engineer = new Engineer ('Kristy', 4, 'kristy@gmail.com','kristy-coding')

 console.log(engineer);

// tested with above data, make sure to cd into the lib directory before trying to run node Engineer.js

module.exports = Engineer