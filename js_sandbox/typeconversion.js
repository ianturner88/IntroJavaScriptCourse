let val;

//number to string
val = String(555);
val = String(4+4);
//boolean to string
val = String(true);
//date to string
val = String(new Date());
//array to string
val = String([1,2,3,4]);

//toString
val = (5).toString();
val = (true).toString();

//String to numbers
val = Number('5');
// true = 1
val = Number(true);
// false = 0
val = Number(false);
//null = 0
val = Number(null);
//Not a Number -> NaN
val = Number('hello');

val = parseInt('100.30');

// output
console.log(val);
console.log(typeof val);
//console.log(val.length);
//decimal points
console.log(val.toFixed(2));