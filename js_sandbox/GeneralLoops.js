//for loop
for (let i = 0; i <= 10; i++){
    if (i === 2){
        console.log('2 is my favourite number');
        /*everything beneath continue on the iteration where (i === 2)
        is not executed --> aka 'Number: 2' is not printed*/
        continue;
    }

    if (i === 5){
        console.log('Stop the loop');
        break;
    }

    console.log('Number: ' + i);
}

console.log('While loop: ')
//while loop
let i = 0;

while (i < 10){
    console.log('Number ' + i);
    i++;
}

console.log('Do while loop');
//do while loop
let x = 0;
do{
    console.log('Number ' + x);
    x++;
}

while(x < 10);

const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

for (let i = 0; i < cars.length; i++)
{
    console.log(cars[i]);
}

console.log('ForEach method');
//foreach method
cars.forEach(function(car, index){
    console.log(`${index} : ${car}`);
    //console.log(array);
});

//for in -> prints all the keys/values in user
console.log("FOR IN");
const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 40
}

for(let x in user){
    console.log(`${x} : ${user[x]}`);
}

//map
console.log('MAP');
const users = [
    {id: 1, name: 'John'},
    {id: 2, name: 'Sara'},
    {id: 3, name: 'Karen'}
];

const ids = users.map(function(user){
    return users.id;
})

console.log(ids);