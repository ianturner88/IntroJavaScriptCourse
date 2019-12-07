// window object / objects / properties

// window.console.log(123);

// console.log('Hello');
// console.log(126);
// console.log(true);

//alert
//box pops up that says 'Hello, Brad'
// window.alert('Hello, Brad');

//a box appears requesting user input

// const input = prompt();
// alert(input);


//confirm
// if (confirm('Are you sure?')){
// console.log('YES');
// } else {
// console.log('NO');
// }

let val;
//Outter height & width
val = window.outerHeight;
console.log(val)
val = window.outerWidth;
console.log(val)

//Inner height & width
val = window.innerHeight;
console.log(val);
val = window.innerWidth;
console.log(val);

//Scroll points
val = window.scrollY;
val = window.scrollX;

//Location Object
console.log("Hello");

console.log("Mark");
val = window.location;
console.log(val);
val = window.location.hostname;
console.log(val);
val = window.location.port;
console.log(val);
val = window.location.href;
console.log(val);
val = window.location.search
console.log(val);

// //redirect
// window.location.href = 'http://google.com';
// //reload
// window.location.reload();

window.history.go(-2);
val = window.history.length;

val = window.navigator;
console.log(val);
val = window.navigator.appName;
console.log(val);
val = window.navigator.appVersion;
console.log(val);
val = window.navigator.userAgent;
console.log(val);
val = window.navigator.platform;
console.log(val);
val = window.navigator.vendor;
console.log(val);
val = window.navigator.language;
console.log(val);