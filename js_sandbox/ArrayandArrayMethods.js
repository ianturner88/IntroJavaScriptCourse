const numbers = [43,56,33,23,44,36,5];
const numbers2 = new Array(22,45,33,76,54);
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date()];

console.log(mixed);

let val;

console.log(numbers);
console.log(val);

//get array length
val = numbers.length;
console.log(val);

//check if is_array
val = Array.isArray(numbers);
console.log(val);

//get a single value from an array
val = numbers[3];
console.log(val);