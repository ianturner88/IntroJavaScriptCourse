//create element
const li = document.createElement('li');

//add class
console.log(li);

li.className = 'collection-item';

//add id
li.id = 'new-item';
console.log(li);

//add attribute
li.setAttribute('title', 'New Item');
console.log(li);

//create text node and append
li.appendChild(document.createTextNode('Hello World'));
console.log(li);

//create new link elemet
const link = document.createElement('a');
//add classes
link.className = 'delete-item secondary-content';
//add icon html
link.innerHTML = '<i class="fa fa-remove"></i>';
//append link into li
li.appendChild(link);

//append li as child to ul
document.querySelector('ul.collection').appendChild(li);
console.log(li);