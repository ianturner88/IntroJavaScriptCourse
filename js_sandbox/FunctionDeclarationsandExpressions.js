//function declarations

function greet(firstName, lastName){
    //console.log('Hello');
    return 'Hello ' + firstName + ' ' + lastName;
}

console.log(greet('John', 'Doe'));

//default variables to John & Doe.. overridden if something passed in
function greet(firstName = 'John', lastName = 'Doe'){
    //console.log('Hello');
    return 'Hello ' + firstName + ' ' + lastName;
}

console.log(greet('Steve', 'Smith'));

//function expressions

const square = function(x = 3){
    return x*x
};

console.log(square(8));

//immidiatley invokable function expressions... IIFEs
(function(name){
    console.log('IIFE Ran..' + name);
})('Brad');

//property methods
const todo = {
    add: function(){
        console.log('Add todo..')
    },
    edit: function(id){
        console.log(`Edit todo ${id}`)

    }
}

todo.add();
todo.edit(22);

todo.delete = function(){
    console.log('Delete todo...');
}

todo.delete();
