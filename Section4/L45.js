// String

const name1 = 'Jeff';
const name2 = new String('Jeff');

console.log(name1);
console.log(name2);

name2.foo = 'bar';

console.log(typeof name1);
console.log(typeof name2);

if (name2 === 'Jeff') {
    console.log('YES');
} else {
    //this prints since name2 is an object not a string
    console.log('NO');
}

if (name2 == 'Jeff') {
    //this prints since name2 contents match the string
    console.log('YES');
} else {
    console.log('NO');
}

// Number
const num1 = 5;
const num2 = new Number(5);

// Boolean
const bool1 = true;
const bool2 = new Boolean(true);

// Function
const getSum1 = function(x,y){
    return x + y;
}

console.log(getSum1(1,1));

const getSum2 = new Function('x', 'y', 'return 1 + 1');

// Object
const John = {name: "John"};

// Regular Expression
const re1 = /\w+/;
const re2 = new RegExp('\w+');

console.log(re1);
console.log(re2);