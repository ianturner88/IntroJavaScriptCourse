// //set local storage item
// localStorage.setItem('name', 'John');

// //set local storage item
// localStorage.setItem('name', 'Beth');

// //remove from local storage
// localStorage.removeItem('name');

// //get from storage
// const name = localStorage.getItem('name');
// console.log(name);

// //clear local storage
// localStorage.clear();

document.querySelector('form').addEventListener('submit', function(e){
    const task = document.getElementById('task').value;

    let tasks;

    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = localStorage.getItem('tasks');
    }

    localStorage.setItem('task', task);
    alert('Task saved');
    e.preventDefault();
});