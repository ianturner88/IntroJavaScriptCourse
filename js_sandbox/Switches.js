const colour = 'red';

switch (colour){
    case 'red':
        console.log('Colour is red');
        break;

    case 'blue':
        console.log('Colour is blue');
        break;

    default:
        console.log('Colour is not red or blue');
        break;
}

let day;

switch(new Date().getDay()){
    case 0:
        day = 'Sunday';
        break;

    case 1:
        day = 'Monday';
        break;
}

console.log(`Today is ${day}`);