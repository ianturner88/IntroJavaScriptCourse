let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
console.log(val);

val = list;
console.log(val);

//get child nodes
val = list.childNodes;
console.log("test");
console.log(val);

//element 0
val = list.childNodes[0];
console.log(val);

//get children element nodes
val = list.children;
console.log(val);

//node name
val = list.childNodes[0].nodeName;
console.log(val);

//node type
val = list.childNodes[3].nodeType;
console.log(val);

// node Types
// 1 -> Element
// 2 -> Attribute (deprecated)
// 3 -> Text node
// 8 -> Comment
// 9 -> Document itself
// 10 -> Doctype

val = list.children[0];
console.log(val);

list.children[1].textContent = 'Hello';
console.log(val);

//first child
val = list.firstChild;
console.log(val);

val = list.firstElementChild
console.log(val);

//last child
val = list.lastChild;
console.log(val);
val = list.lastElementChild;
console.log(val);

//count child elements
val = list.childElementCount;
console.log(val);

//get parent node
val = listItem.parentNode;
console.log(val);

console.log('789');
val = listItem.parentElement;
console.log(val);

val = listItem.parentElement.parentElement;
console.log(val);

//get next sibling
val = listItem.nextSibling;
console.log(val);

val = listItem.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;
console.log(val);

val = listItem.previousSibling;
val = listItem.previousElementSibling;
console.log(val);