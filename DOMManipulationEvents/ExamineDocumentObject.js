let val;

val = document;
val = document.all;

//access items of the array
val = document.all[0];
console.log(val);

val = document.all.length;
console.log(val);

val = document.head;
console.log(val);

val = document.body;
console.log(val);

val = document.doctype;
console.log(val);

val = document.domain;
console.log(val);

val = document.URL;
console.log(val);

val = document.characterSet;
console.log(val);

val = document.contentType;
console.log(val);

val = document.forms;
console.log(val);

val = document.forms[0];
console.log(val);

val = document.all[0].id;
console.log(val);

val = document.links;
console.log(val);

val = document.links[0];
console.log(val);

val = document.all[0].id;
console.log(val);

// val = document.links[0].classList;
// console.log(val);

// val = document.links[0].className;
// console.log(val);

val = document.images;
console.log(val);

val = document.scripts;
console.log(val);

// val = document.scripts[2].getAttribute('src');
console.log(val);

console.log("Test");

let scripts = document.scripts;
let scriptsArr = Array.from(scripts);
scriptsArr.forEach(function(scripts){
    console.log(scripts);
});

console.log(val);