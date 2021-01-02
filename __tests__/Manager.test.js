// first we need to require data from the Manager.js file because this is the class constructor we are testing 

// we are importing the Manager class constructor from Manager.js so we can use it in our test 
const { expect } = require('@jest/globals')
const Manager = require('../lib/Manager')

test ('creates a Manager Object', ()=> {
    const manager = new Manager ('Dave', 5, 'dave@gmail.com',10)

    expect(manager.name).toBe('Dave');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String))
    expect(manager.officeNumber).toEqual(expect.any(Number));

    //console.log(manager);
})

test ('gets name', ()=> {
    const manager = new Manager ('Dave', 5, 'dave@gmail.com',10)

    expect(manager.getName()).toBe('Dave');
})

test ('gets Id', ()=> {

    const manager = new Manager ('Dave', 5, 'dave@gmail.com',10)

    expect(manager.getId()).toBe(5);

})

test ('gets email format', ()=> {
    const manager = new Manager ('Dave', 5, 'dave@gmail.com',10)

    const regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

    expect(manager.getEmail()).toMatch(regex)

})

test ('gets office number', ()=>{
    const manager = new Manager('Dave', 5, 'dave@gmail.com', 10)

    expect(manager.getOfficeNumber()).toBe(10)
})

test ('gets employee role', ()=> {
    const manager = new Manager ('Dave', 5, 'dave@gamil.com',10)

    expect(manager.getRole()).toBe('Manager')
})

