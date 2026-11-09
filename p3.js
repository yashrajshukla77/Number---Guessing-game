let randomnum = Math.floor(Math.random() * 100) + 1;

const submit = document.querySelector("#guess-button");
const newGameButton = document.querySelector("#new-game-button");
const userInput = document.querySelector("#guess-input");
const slot = document.querySelector(".guesses");
const prev = document.querySelector("#previous-guesses");
const remaining = document.querySelector("#remaining-attempts");
const indicator = document.querySelector(".indicator");
const startover= document.querySelector(".result");

const p = document.createElement("p");

let prevGuesses=[];
let numGuess=1;
let playgame = true;

if(playgame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        if (!playgame) return;
        const guess = parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess);
    })
}

newGameButton.addEventListener("click", newgame);


function validateGuess(guess){
    if(isNaN(guess)){
        alert('PLEASE ENTER A VALID NUMBER!')
    }else if(guess<1){
        alert('PLEASE ENTER A VALID NUMBER more than 1!')
    }else if(guess>100){
        alert('PLEASE ENTER A VALID NUMBER less than 100!')
    }else{
        prevGuesses.push(guess);
        displayGuess(guess);
        if (guess === randomnum) {
            checkGuess(guess);
        } else if (numGuess > 10) {
            displayMessage(`Game Over. Random Number was ${randomnum}`);
            endgame();
        } else {
            checkGuess(guess);
        }
    }

}

function checkGuess(guess){
    if(guess===randomnum){
        displayMessage("Congratulations ! You Guessed it Right !")
        endgame()
    }else if(guess>randomnum){
        displayMessage("Please Enter a lower Number")
    }else if(guess<randomnum){
        displayMessage("Please Enter a higher Number  ")
    }

}

function displayGuess(guess){
userInput.value=''
slot.innerHTML+= `${guess} `
numGuess++
remaining.innerHTML=`Remaining attempts: ${11-numGuess}`

}

function displayMessage(message){
indicator.innerHTML=`<h2>${message}</h2>`
}

function newgame(){
    randomnum = Math.floor(Math.random() * 100) + 1;
    prevGuesses = [];
    numGuess = 1;
    playgame = true;
    slot.textContent = "";
    remaining.textContent = "Remaining attempts: 10";
    indicator.textContent = "";
    userInput.value = "";
    userInput.disabled = false;
    submit.disabled = false;
    userInput.focus();
}

function endgame(){
    playgame = false;
    userInput.disabled = true;
    submit.disabled = true;
}