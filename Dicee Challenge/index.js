// Dice 1 image change 
var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6
var randomImageSource = "images/dice" + randomNumber1 + ".png"; // images/dice1.png - images/dice6.png
document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);

// Dice 2 image change
var randomNumber2 = Math.floor(Math.random() * 6) + 1; // 1-6
var randomImageSource2 = "images/dice" + randomNumber2 + ".png"; // images/dice1.png - images/dice6.png
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// Changing h1 depending on winner. 
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Payer 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Payer 2 Wins! 🚩"
} else {
    document.querySelector("h1").innerHTML = "Draw!"
}