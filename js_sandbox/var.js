/*
var, let, const example
*/

var name = 'John Doe';
console.log(name);
name = 'Steve Smith';
console.log(name);

//Init var

var greeting;
console.log(greeting);
greeting = 'Hello';
console.log(greeting);

//letters, numbers, _, $
//variables can't start with a number

//multi word vars
//camel case
var firstName = 'John';
//underscore
var first_name = 'Sara';
//Pascal case
var FirstName = 'Tom';

//object example
const person = {
    name: 'John',
    age : 30
}

person.name = 'Sara';
person.age = 32;

console.log(person);

const numbers = [1,2,3,4,5];
numbers.push(6);

console.log(numbers);