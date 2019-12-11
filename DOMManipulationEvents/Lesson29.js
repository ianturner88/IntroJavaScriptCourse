//EVENT LISTENERS & THE EVENT OBJECT

// document.querySelector('.clear-tasks').addEventListener('click', function(){
//     // href="#" -> causes a system pause
//     // href="google.com" -> Hello World will flash + redirect to google.com
//     console.log('Hello World');
// });

// document.querySelector('.clear-tasks').addEventListener('click', function(e){
//     // href="#" -> causes a system pause
//     // href="google.com" -> Hello World will flash + redirect to google.com
//     console.log('Hello World');
    
//     //prevents from google link being activated
//     e.preventDefault();
// });

document.querySelector('.clear-tasks').addEventListener('click', onClick);
function onClick(e){
    //console.log('Clicked');

    let val;
    val = e;
    //element target element
    val = e.target;
    val = e.target.id;
    val = e.target.className;
    val = e.target.classList;

    //event type
    val = e.type;

    //event time stamp
    val = e.timeStamp;

    //coordinate event relative to the window
    val = e.clientY;
    val = e.clientX;

    val = e.offsetY;
    val = e.offsetX;
    console.log(val);
}