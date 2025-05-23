/*-------------- Constants -------------*/
const guessSubmit = document.getElementById("guess");
const guessInput = document.getElementById("guessing");
const messageElm = document.getElementById("messagee");
const attemptsElm = document.getElementById("Attempts");
const remainingAttmps = document.getElementById("remainingAttempts");
const restartGame = document.getElementById("restart");

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
    message.textContent = `Congrats you win!! 🎉, the number is ${randomNumber} !`;
    message.style.color = "Purple";
    message.style.animation = "sparkleWin 4s ease-out";
    const winSound = new Audio('./sounds/270402__littlerobotsoundfactory__jingle_win_00.wav');
winSound.play();
    disableInput();
    
} else if ( remAttempts === 0) {
    message.textContent = `GAME OVER!😢 you lose! the correct number was ${randomNumber} !`;
    message.style.color = "red";
    message.style.animation = "zoomBig 4s ease-out";
    const loseSound = new Audio('./sounds/796863__jw_audio__synth-hit-44.wav');
loseSound.play();
    disableInput();
} else if ( theGuess < randomNumber){
    message.textContent = "Number is low 🫠, think again!";
    message.style.color = "green";
} else  {
    message.textContent= "Number is high🤔, think again!";
    message.style.color = "orange";

} 
}

             /*------- Restart the game ---------*/

function restart() {
    randomNumber = Math.floor(Math.random() * 30) + 1;
    attempts = 0;
    remAttempts = maximumAttempts;
    attemptsElm.textContent = attempts;
    remainingAttmps.textContent = remAttempts;
    guessInput.value = "";
    messageElm.textContent = "";
    enableInput();
}
            /*------- Disable ---------*/
function disableInput() {
    guessInput.disabled = true;
    guessSubmit.disabled = true;
}

             /*------- Enable ---------*/
function enableInput() {
    guessInput.disabled = false;
    guessSubmit.disabled = false;
}

/*----------- Event Listeners ----------*/

guessSubmit.addEventListener('click', guessBtn);
restartGame.addEventListener('click', restart);