// first we need to import the Engineer class constructor from the Engineer.js file and resave it in a variabl 

const { expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

//The following tests should make sure the Engineer class constructor was successful in creating an engineer object and executes the associated methods successfully 


// first test should check if we can successfully create an Engineer Object 

test ('creates Engineer Object', ()=> {

    // call to new Engineer takes in parameters(name, id, email,github username) 
    const engineer = new Engineer('Dave',5,'dave@gmail.com','username')

    expect(engineer.name).toBe('Dave');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));

    expect(engineer.github).toEqual(expect.any(String));
})

test ('gets name', ()=> {
    const engineer = new Engineer ('Dave', 5, 'dave@gmail.com','username')

    expect(engineer.getName()).toBe('Dave');
})

test ('gets Id', ()=> {

    const engineer = new Engineer ('Dave', 5, 'dave@gmail.com','username')

    expect(engineer.getId()).toBe(5);

})

test ('gets email format', ()=> {
    const engineer = new Engineer ('Dave', 5, 'dave@gmail.com','username')

    const regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

    expect(engineer.getEmail()).toMatch(regex)

})

test ('gets github username',() =>{

    const engineer = new Engineer ('Dave',5,"dave@gmail.com",'username')

    expect(engineer.getGithub()).toBe('username');
})

test ('gets emloyee role',()=> {
    const engineer = new Engineer('Dave',5,'dave@gmail.com','username')

    expect(engineer.getRole()).toBe('Engineer')
})