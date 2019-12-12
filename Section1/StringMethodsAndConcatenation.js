const firstName = 'William';
const lastName = 'Johnson';
const age = 36;
const str = 'Hello there, my name is Brad';

let val;

//concatenation
val = firstName + ' ' + lastName;
console.log(val);

//append
val = 'Brad ';
val += 'Traversy';

console.log(val);

//insertion
val = 'Hello, my name is ' + firstName + ' and I am ' + age;
console.log(val);

//escaping
val = 'That\'s awesome, I can\'t wait.'
console.log(val);

//length
val = firstName.length;
console.log(val);

//concat()
val = firstName.concat(' ', lastName);
console.log(val);

//change case
val = firstName.toUpperCase();
console.log(val);
val = lastName.toLowerCase();
console.log(val);

//index
val = firstName[0];
console.log(val);

//indexof()... location of the first spot with an l
val = firstName.indexOf('l');
console.log(val);

val = firstName.lastIndexOf('l');
console.log(val);

//char at index 2
val = firstName.charAt('2');
console.log(val);

//substring
val = firstName.substring(0,4);
console.log(val);

//slice()
val = firstName.slice(0,4);
console.log(val);

//split() ... on the space
val = str.split(' ');
console.log(val);

//replace()
val = str.replace('Brad', 'Jack');
console.log(val);

//includes()
val = str.includes('Hello');
console.log(val);