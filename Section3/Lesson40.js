/*
GAME FUNCTION:
- Player must guess a number between a minimum and a maximum
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

// Game values
let min = 1, max = 10, winningNum = 2, guessesLeft = 3;

// UI elements
const game = document.querySelector('#game'), minNum = document.querySelector('.min-num'), maxNum = document.querySelector('.max-num'), guessBTN = document.querySelector('#guess-btn'), guessInput = document.querySelector('#guess-input'), message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Listen for guess
guessBTN.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);

    // Validate
    if (isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }

    // Check if won
    if (guess === winningNum){
        // Disable input
        guessInput.disabled = true;
        // Turn border green to show user won
        guessInput.style.borderColor = 'green'; 
        // Set message
        setMessage(`${winningNum} is correct!`, 'green');
    } else {

    }
});

// Set message
function setMessage(msg, color){
    message.style.color = 'red';
    message.textContent = msg;
}