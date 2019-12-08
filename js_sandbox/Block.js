// Global scope
var a = 1;
let b = 2;
const c = 3;
console.log('Global Scope: ', a, b, c);

function test(){
    var a = 4;
    let b = 5;
    const c = 6;

    console.log('Function Scope: ', a, b, c);
}

test();

if (true){
    var a = 4;
    let b = 5;
    const c = 6;

    console.log('Block/If Scope: ', a, b, c);
}

// var (4) variable will be overwritten but let (2) & const (3) won't be
console.log('Global Scope: ', a, b, c);

for (var a = 0; a < 10; a++){
    console.log(`Loop: ${a}`)
}

console.log('Global Scope: ', a, b, c);