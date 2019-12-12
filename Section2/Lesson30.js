const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

//click
clearBtn.addEventListener('click', runEvent);
// doubleclick
clearBtn.addEventListener('dblclick', runEvent);
//mousedown
clearBtn.addEventListener('mousedown', runEvent);
//mouseup
clearBtn.addEventListener('mouseup', runEvent);
//mouseenter
clearBtn.addEventListener('mouseenter', runEvent);
//mouseleave
clearBtn.addEventListener('mouseleave', runEvent);
//mouseover
clearBtn.addEventListener('mouseover', runEvent);
//mouseout
clearBtn.addEventListener('mouseout', runEvent);
//mousemove
card.addEventListener('mousemove', runEvent);

//Event Handler
function runEvent(e){
    console.log(`EVENT TYPE: ${e.type}`);

    heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

    document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},40)`;
}