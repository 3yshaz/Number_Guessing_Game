/*-------------- Constants -------------*/
const guessSubmit = document.getElementById("guess");
const guessInput = document.getElementById("number");
const messageElm = document.getElementById("messagee");
const attemptsElm = document.getElementById("numAttempt");
const remainingAttmps = document.getAnimations("remainingAttempts");


/*---------- Variables (state) ---------*/
let randomNumber = Math.floor(Math.random()*30) +1;
let attempts = 0;
const maximumAttempts = 5;
let remAttempts = maximumAttempts;


/*----- Cached Element References  -----*/


/*-------------- Functions -------------*/
function guessBtn() {
let theGuess = parseInt(guessInput.value);
let message = messageElm;
let attemptsDisplay = attemptsElm;
let remainingAttmDis = remainingAttmps;

if (isNaN(theGuess) || theGuess < 1 || theGuess > 30) {
    message.textContent = "Invalid Number! Please enter a valid number betweem 1 to 30!";
    message.style.color = "red";
    return;
}
attempts++;
remAttempts--;
attemptsDisplay.textContent = attempts;
remainingAttmDis.textContent = remAttempts;

if ( theGuess === randomNumber) {
    message.textContent = `Congrats you won!! 🎉, the number was ${randomNumber} !`;
    message.style.color = "Purple";
    disableInput();
} else if ( theGuess < randomNumber){
    message.textContent = "Ummmm.. number is too low, thimk again!";
    message.style.color = "orange";
} else if ( theGuess > randomNumber) {
    message.textContent= "Ummmm.. number is too high, thimk again!";
    message.style.color = "orange";

} else if ( remAttempts === 0) {
    message.textContent = `Oh 😢 you loose! the correct number was ${randomNumber} !`;
    message.style.color = "yellow";
    disableInput();
}
}

/*----------- Event Listeners ----------*/

guessSubmit.addEventListener('click', guessBtn);