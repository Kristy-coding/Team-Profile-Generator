// first we need to import the Intern class constructor from the Intern.js file and re-save it in a variable 

const { expect } = require('@jest/globals');
const Intern = require('../lib/Intern');

//The following tests should make sure the Intern class constructor was successful in creating an intern object and executes the associated methods successfully 


// first test should check if we can successfully create an intern Object 

test ('creates intern object',()=> {
    // creating new intern object takes in (name,id, email, school)
    const intern = new Intern ('Kristy',7,'kristy@gmail.com', 'Stanford');

    expect(intern.name).toBe('Kristy');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
})

test ('gets name', ()=> {
    const intern = new Intern ('Dave', 5, 'dave@gmail.com','school')

    expect(intern.getName()).toBe('Dave');
})

test ('gets Id', ()=> {

    const intern = new Intern ('Dave', 5, 'dave@gmail.com','school')

    expect(intern.getId()).toBe(5);

})

test ('gets email format', ()=> {
    const intern = new Intern ('Dave', 5, 'dave@gmail.com','school')

    const regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

    expect(intern.getEmail()).toMatch(regex)

})

test ('gets intern school',() =>{

    const intern = new Intern ('Dave',5,"dave@gmail.com",'school')

    expect(intern.getSchool()).toBe('school');
})

test ('gets emloyee role',()=> {
    const intern = new Intern('Dave',5,'dave@gmail.com','school')

    expect(intern.getRole()).toBe('Intern')
})