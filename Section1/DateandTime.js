let val;

const today = new Date();
let birthday = new Date('9-10-1981 11:25:00');
birthday = new Date('September 10 1981 11:25:00');
birthday = new Date('9/10/1981 11:25:00');

val = today;

//prints today's date
console.log(val);

console.log(typeof val);

val = birthday;
console.log(val);

//getMonth() is zero based
val = today.getMonth();
console.log(val);

//today's date
val = today.getDate();
console.log(val);

//today's day
val = today.getDay();
console.log(val);

//today's year
val = today.getFullYear();
console.log(val);

val = today.getHours();
console.log(val);

val = today.getMinutes();
console.log(val);

val = today.getSeconds();
console.log(val);

val = today.getMilliseconds();
console.log(val);

//returns the number of milliseconds since 1 January 1970
val = today.getTime();
console.log(val);

//initial birthday month == September 
console.log(birthday);
//updated birthday month == March
birthday.setMonth(2);
console.log(birthday);

//manipulate dates
birthday.setDate(12);
birthday.setFullYear(1985);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(25);
console.log(birthday);