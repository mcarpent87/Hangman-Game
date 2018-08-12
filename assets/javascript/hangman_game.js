// Variables
var wins = 0;
var losses = 0;
//Array containing all letters of the alphabet
var letterChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//Create array containing the words that will be used for the game
var wordArray = ["dinger", "triple", "boomstick", "homer", "balk", "popup", "tootblan","double", "strikeout", "single", "walkoff", "doubleheader"];
var guessesLeft = 9;
var displayWord = "";
var letterBank = [];
//Variable for random word that is selected from the array
var randomWord = "";
//Empty array to store the letters of the chosen word
var splitUpWord = [];
var drawRandomWord = "";
var storedGuess = [];
var lettersAlreadyGuessed = "";
var letterChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Select a random word from the array wordArray

function chooseWord () {
    randomWord = wordArray[Math.floor(Math.random () * wordArray.length)];
    console.log(randomWord);
    guessesLeft = 9;
    displayWord = "";
    letterBank = [];
    lettersAlreadyGuessed = "";
    spacesWord();

}

// splits string of randomWord into an array consisting of each letter
function spacesWord () {
    splitUpWord = randomWord.split("");
    console.log(splitUpWord);
    for (var i = 0; i < splitUpWord.length; i++) {
        splitUpWord[i] = "_ ";
        displayWord += splitUpWord[i];
    }
    console.log(displayWord);
}

// Running Code
chooseWord();
console.log(splitUpWord);

document.onkeyup = function (event) {

//Convert user guessesLeft to all lower case user inputs a capital letter
var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

//Push user guess and display the letter
if (randomWord.indexOf(userGuess) > -1) {
    storedGuess.push(userGuess);
    drawRandomWord = "";
    for (var i = 0; i < randomWord.length; i++) {
        if (storedGuess.indexOf(randomWord[i]) > -1) {
            drawRandomWord += randomWord[i];
        }
        else {
            drawRandomWord += "_ ";
        }

    }
    displayWord = drawRandomWord;
    console.log(drawRandomWord);
    
    
// Add to win counter if the word is chosen correctly, if a the wrong letter is chosen, subtract from the remaining guesses
    if (displayWord == randomWord) {
        wins++;
        alert ("WINNER!!")
        chooseWord();
        storedGuess = [];
    }
}
else {
    if (letterChoices.indexOf(userGuess) < 0) {
        console.log(userGuess);
    }
    else if (letterBank.indexOf(userGuess) > -1) {
        console.log(userGuess);
    }
    else {
		if (letterChoices.indexOf(userGuess) < 0) {
			console.log(userGuess);
		}
		else if (letterBank.indexOf(userGuess) > -1) {
			console.log(userGuess);
		}
		else {
			guessesLeft--;
			letterBank.push(userGuess);
			console.log(letterBank);
			lettersAlreadyGuessed = letterBank.join(" ");
			console.log("Wrong Letter");
			if (guessesLeft < 0) {
                losses++;
                alert ("GAME OVER!")
				guessesLeft = 9;
				chooseWord();
			}
		}
	}
};

//Dump to HTML
var html = "<p>Choose a Letter!</p>" + 
    "<p>Wins: " + wins + "</p>" +
    "<p>Losses: " + losses + "</p>" +  
    "<p> Current Word: " + "</p>" + 
    "<p>" + displayWord + "</p>" + 
    "<p>Number of Guesses Remaining: " + guessesLeft + "</p>" + 
    "<p>Letters Already Guessed: </p>" + 
    "<p>" + lettersAlreadyGuessed + "</p>";

document.querySelector("#game").innerHTML = html;
}

