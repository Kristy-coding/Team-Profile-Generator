
// first need to require the data from the Employee file 

const { expect } = require('@jest/globals');


const Employee = require ('../lib/Employee')

// test should pseudo code what we need to do with Employee.js 
// first test should make sure we can sucessfully create and Employee Object 


//The following tests should make the Employee class constructor will successfuly create an object and execute methods successfully 


// first test should check if we can successfully create an Employee Object 

// test module takes in two parameters... a description of the test, and the call back function to run the test
test ('creates an Employee Object', ()=> {
    const employee =  new Employee ('Dave', 5, 'dave@gmail.com')

    expect(employee.name).toBe('Dave');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
})

test ('gets name', ()=> {
    const employee = new Employee ('Dave', 5, 'dave@gmail.com')

    expect(employee.getName()).toBe('Dave');
})

test ('gets Id', ()=> {

    const employee = new Employee ('Dave', 5, 'dave@gmail.com')

    expect(employee.getId()).toBe(5);

})

test ('gets email format', ()=> {
    const employee = new Employee ('Dave', 5, 'dave@gmail.com')

    const regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

    expect(employee.getEmail()).toMatch(regex)

})

test ('gets employee role', ()=> {
    const employee = new Employee ('Dave', 5, 'dave@gamil.com')

    expect(employee.getRole()).toBe('Employee')
})




