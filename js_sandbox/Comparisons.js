const id = 100;

//equal to; else if comparison
if (id == 100){
    console.log('CORRECT');
} else {
    console.log('INCORRECT');
}

//not equal to
if (id != 100){
    console.log('CORRECT');
} else {
    console.log('INCORRECT');
}

//equal to value & type
//if id == '100', returns incorrect since comparison of value (100) & type (int) 
//for comparison, use triple ='s (===)
if (id === 100){
    console.log('CORRECT');
} else {
    console.log('INCORRECT');
}

if(typeof id !== 'undefined'){
    console.log('The ID is ${id}');
} else{
    console.log('NO ID');
}

//greater or less than
if (id > 100){
    console.log('Correct');
} else{
    console.log('INCORRECT');
}

//If else
const colour = 'red';

if (colour === 'red'){
    console.log('Colour is red');
}else if (colour === 'blue'){
    console.log('Colour is blue');
}else{
    console.log('Colour is not red or blue');
}

//logical operators
const name = 'Steve';
const age = 60;

//AND && (both conditions must be true)
if (age > 0 && age < 12){
    console.log(`${name} is a child`);
} else if (age >= 13 && age <= 19){
    console.log(`${name} is a tennager`);
} else {
    console.log(`${name} is an adult`);
}

//OR || (only 1 condition must be true)
if (age < 16 || age > 65){
    console.log(`${name} can not run in the race`);
} else {
    console.log(`${name} is registered for the race`);
}

//ternary operator -> statement ? true case : false case
console.log(id === 100 ? 'CORRECT' : 'INCORRECT');