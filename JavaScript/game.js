//create secret number
var secretNumber = 4;

//ask user for guess
var stringGuess = prompt("Guess a number");
var guess =  Number(stringGuess);

//check guess is right
if (guess === secretNumber) {
	alert("You got it right.");
}
// check if guess is higher or lower
else if (guess > secretNumber ){
	alert ("Too high. Guess again!");
}
else {
	alert ("Too low. Guess again!");
}





