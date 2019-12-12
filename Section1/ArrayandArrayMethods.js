const numbers = [43,56,33,23,44,36,5];
const numbers2 = new Array(22,45,33,76,54);
const fruit = ['Orange', 'Pear', 'Apple', 'Banana'];
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

//mutating arrays
//add 250 onto array at the end
numbers.push(250);
console.log(numbers);

//add 120 to the front of the array
numbers.unshift(120);
console.log(numbers);

//get a single value from an array
val = numbers[3];
console.log(val);

//take number off from the end
numbers.pop(numbers)
console.log(numbers);

//take number from the front of the array
numbers.shift();
console.log(numbers);

//splice values -> take only 1 element starting at index 1
numbers.splice(1,1);
console.log(numbers);

//splice values -> take 3 elements starting at index 1
numbers.splice(1,3);
console.log(numbers);

//reverse the array
numbers.reverse()
console.log(numbers)

//concatenation
val = numbers.concat(numbers2);
console.log(val);

//sorting arrays by alphabetically order
console.log(fruit);
val = fruit.sort();
console.log(fruit);

val = numbers.sort();
console.log(val);

//use the compare function
val = numbers.sort(function(x,y){
    return x - y;
})
console.log(val);

//reverse sort
val = numbers.sort(function(x,y){
    return y -x;
})
console.log(val);

//find
function under50(num){
    return num < 50;
}

//returns false if num passed in is greater than 50
val = under50(numbers);
console.log(val);

function over50(num){
    return num > 50;
}

val = numbers.find(over50);
console.log(val);