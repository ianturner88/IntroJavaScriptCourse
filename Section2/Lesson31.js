const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');

//clears input
taskInput.value = '';

// form.addEventListener('submit', runEvent);

// //every time an input made, runEvent runs 
// taskInput.addEventListener('keydown', runEvent);
// //every time the key is 'lifted' up, runEvent runs
// taskInput.addEventListener('keyup', runEvent);
// //every time the key is 'press', runEvent runs
// taskInput.addEventListener('keypress', runEvent);

// //focus -> called when user clicks inside of an input
// taskInput.addEventListener('focus', runEvent);
// //blur -> called when user clicks outside of the input after being inside of the input
// taskInput.addEventListener('blur', runEvent);

// //triggered by 'ctrl + x'
// taskInput.addEventListener('cut', runEvent);
//paste -> 'ctrl + v' 
// taskInput.addEventListener('paste', runEvent);
//input -> any type of input
//taskInput.addEventListener('input', runEvent);

//change
select.addEventListener('change', runEvent);

function runEvent(e){
    console.log(`EVENT TYPE: ${e.type}`);

    // //outputs what is typed
    // console.log(e.target.value);

    //heading becomes what the user input is
    heading.innerText = e.target.value;

    // //get input value
    // console.log(taskInput.value);
    // e.preventDefault();
}