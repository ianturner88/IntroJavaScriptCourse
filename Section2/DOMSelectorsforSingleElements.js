// document.getElementById()

console.log(document.getElementById('task-title'));

//get things from the element
console.log(document.getElementById('task-title').id);

// change styling 
document.getElementById('task-title').style.background = "#333";
document.getElementById('task-title').style.color = "#fff";
document.getElementById('task-title').style.padding = "10px";
// document.getElementById('task-title').style.display = "none";

//alternative approach -> better than above approach
const tastTitle = document.getElementById('task-title');

//change content
tastTitle.textContent = 'Task List';
tastTitle.innerText = 'My Tasks';
tastTitle.innerHTML = '<span style = "color:red"> Task List </span>';

console.log("Hello");
console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

//first and only first 'li' turns red
document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'blue';

//last child
document.querySelector('li:last-child').style.color = 'red';
//nth child
document.querySelector('li:nth-child(3)').style.color = 'yellow';
document.querySelector('li:nth-child(4)').textContent = 'Hello World';
document.querySelector('li:nth-child(odd)').style.background = '#ccc';
document.querySelector('li:nth-child(odd)').style.background = '#f4f4f4';