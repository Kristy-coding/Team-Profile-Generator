// runs the application 
//ask questions with inquirer and get data 

// import inquirer and costructors 

const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee');
const createPageTemplate = require('./src/page-template');
const writeFile = require('./utils/generate-site');

const employeeArr = [];

//import html page template 
//const createPageTemplate = require('./src/page-template')


// I initialize the app with "npm start"



// THEN I am presented with a menu with the option to choose a type of employee (manager, engineer, intern, or finsihed building my team)



var promptUser = function () {

    return inquirer .prompt({
        type: 'list',
        message: 'Which employee role would you like to add to your team?',
        name: 'menu',
        choices: ['Manager','Engineer','Intern','finished building my team']
    })
    //.then takes in two parameters (the data returned from the promise, and the fucntion to be run on that data)
    .then (({menu}) => {
        // WHEN  I select the manager option 
        if (menu === 'Manager') {
            // THEN I am prompted to enter the manager's name, employee ID, email address, and office number
            inquirer.prompt([
                { 
                    type: 'input',
                    name: 'name',
                    message: `What is the ${menu}'s name?`,
                    validate: Input => {
                        if (Input){
                            return true;
                        } else {
                            console.log(`Please enter the ${menu}'s name!`);
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'id',
                    message: `What is the ${menu}'s id number?`,
                    validate: Input => {
                        if (Input){
                            return true;
                        } else {
                            console.log(`Please enter the ${menu}'s id number!`);
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'email',
                    message: `What is the ${menu}'s email address?`,
                    validate: Input => {
                        if (Input){
                            return true;
                        } else {
                            console.log(`Please enter the ${menu}'s email address!`);
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'officeNumber',
                    message: `What is the ${menu}'s office number?`
                }
            ]).then (({name,id,email,officeNumber}) => {
                    
                const manager = new Manager (name,id,email,officeNumber);
                

                // push manager into employee array 

                employeeArr.push(manager);
                //console.log(manager);

                //return to the top of promptUser function 
                return promptUser();       
             })
        }
        if (menu === 'Engineer') {
                // WHEN I select the engineer option
                // THEN I am prompted to enter the engineer’s name, ID, email, and GitHub
                inquirer.prompt([
                    { 
                        type: 'input',
                        name: 'name',
                        message: `What is the ${menu}'s name?`,
                        validate: Input => {
                            if (Input){
                                return true;
                            } else {
                                console.log(`Please enter the ${menu}'s name!`);
                                return false;
                            }
                        } 
                    },
                    {
                        type: 'input',
                        name: 'id',
                        message: `What is the ${menu}'s id number?`,
                        validate: Input => {
                            if (Input){
                                return true;
                            } else {
                                console.log(`Please enter the ${menu}'s id number!`);
                                return false;
                            }
                        }
                    },
                    {
                        type: 'input',
                        name: 'email',
                        message: `What is the ${menu}'s email address?`,
                        validate: Input => {
                            if (Input){
                                return true;
                            } else {
                                console.log(`Please enter the ${menu}'s email address!`);
                                return false;
                            }
                        }
                    },
                    {
                        type: 'input',
                        name: 'github',
                        message: `What is the ${menu}'s github username?`
                    }
                ]).then (({name,id,email,github}) => {
                        
                    const engineer = new Engineer (name,id,email,github);
                    
                    //push engineer into employee array
                    employeeArr.push(engineer);
                    //console.log(engineer);
    
                    //return to the top of promptUser function 
                    return promptUser();       
                })
            } if (menu === 'Intern') {
            // WHEN I select the intern option
            // THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu 
            inquirer.prompt([
                { 
                    type: 'input',
                    name: 'name',
                    message: `What is the ${menu}'s name?`,
                    validate: Input => {
                        if (Input){
                            return true;
                        } else {
                            console.log(`Please enter the ${menu}'s name!`);
                            return false;
                        }
                    } 
                },
                {
                    type: 'input',
                    name: 'id',
                    message: `What is the ${menu}'s id number?`,
                    validate: Input => {
                        if (Input){
                            return true;
                        } else {
                            console.log(`Please enter the ${menu}'s id number!`);
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'email',
                    message: `What is the ${menu}'s email address?`,
                    validate: Input => {
                        if (Input){
                            return true;
                        } else {
                            console.log(`Please enter the ${menu}'s email address!`);
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'school',
                    message: `What school is the ${menu} attending?`
                }
                ]).then (({name,id,email,school}) => {
                            
                    const intern = new Intern (name,id,email,school);
                    
                    //push intern into employee array
                    employeeArr.push(intern);
                    //console.log(intern);
        
                    //return to the top of promptUser function 
                    return promptUser();       
                })
        } if(menu === 'finished building my team') {
           // console.log(employeeArr)
            // WHEN I decide to finish building my team
            // THEN I exit the application, and the HTML is generated
             
            //call createPageTemplate with the employeeArr data 
            const html = (createPageTemplate(employeeArr));
            
            writeFile(html).then(response => {console.log(response.message)}).catch(err =>{console.log(err)})
            
        }

    })

};

promptUser()
