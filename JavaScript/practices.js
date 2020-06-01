// String practice
var name = prompt("What is your name?");
var firstChar = name.slice(0, 1);
var upperCaseFirstChar = firstChar.toUpperCase();
var restOfName = name.slice(1, name.length);
restOfName = restOfName.toLowerCase();
var capitalizedName = upperCaseFirstChar + restOfName;
alert("Hello, " + capitalizedName);

// Math practice
var cost = 3 + 5 * 2;
var cost = 3 + (5 * 2);
var cost = (3 + 5) * 2;

// Dog age challenge
var dogAge = prompt("How old is your dog?");
humanAge = ((dogAge - 2) * 4) + 21;
alert("Your dogs age is " + humanAge + " in human years.");

// Increment and Decrement Expressions
var x = 5;
x++; // equals x + 1 or 6
var y = 3;
x += y; // 6 + 3

// Worked with Karel from http://stanford.edu/~cpiech/karel/ide.html
// Task was to get Karel to the corner

// Solution #1
function main() {
    goToCorner();
}

function goToCorner() {
    move();
    move();
    move();
    move();
    turnLeft();
    move();
    move();
    move();
    move();
}

// Solution #2

function main() {
    moveFourTimes();
    turnLeft();
    moveFourTimes();
}

function moveFourTimes() {
    move();
    move();
    move();
    move();
}

// Next task to drop a beeper in a diagonal

function main() {
    putBeeper();
    diagonalMoveAndBeeper();
    diagonalMoveAndBeeper();
    diagonalMoveAndBeeper();
    diagonalMoveAndBeeper();
}

function diagonalMoveAndBeeper() {
    move();
    turnLeft();
    move();
    putBeeper();
    turnRight();
}

// Next task to create a chess board

function main() {
    row1();
    row2();
    turnRight();
    row1();
    row2();
    turnRight();
    row1();
}

function row1() {
    putBeeper();
    move();
    move();
    putBeeper();
    move();
    move();
    putBeeper();
    turnLeft();
    move();
    turnLeft();
}

function row2() {
    move();
    putBeeper();
    move();
    move();
    putBeeper();
    move();
    turnRight();
    move();
}

// Another solution

function main() {
    beepersRight();
    goUpTurnLeft();
    beepersLeft();
    goUpTurnRight();
    beepersRight();
    goUpTurnLeft();
    beepersLeft();
    goUpTurnRight();
    beepersRight();
}

function goUpTurnRight() {
    turnRight();
    move();
    turnRight();
}

function goUpTurnLeft() {
    turnLeft();
    move();
    turnLeft();
}

function beepersRight() {
    putBeeper();
    move();
    move();
    putBeeper();
    move();
    move();
    putBeeper();
}

function beepersLeft() {
    move();
    putBeeper();
    move();
    move();
    move();
}

// new section for parameters and arguments

function lifeInWeeks(age) {

    var yearsRemaining = 90 - age;
    var days = yearsRemaining * 365;
    var weeks = yearsRemaining * 52;
    var months = yearsRemaining * 12;

    console.log("You have " + days + " days, " + weeks + " weeks, " + "and " + months + " months left.")

}

// BMI calculator challenge

// Create your function below this line.
// The first parameter should be the weight and the second should be the height.


function bmiCalculator(weight, height) {
    var bmi = weight / Math.pow(height, 2);
    return Math.round(bmi);
}

var bmi = bmiCalculator(65, 1.8);


/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

var bmi = bmiCalculator(65, 1.8); 

bmi should equal 20 when it's rounded to the nearest whole number.

*/

// random number generator between 1 and 6 like a die

var n = Math.random();
n = n * 6;
n = Math.floor(n) + 1;
console.log(n);

// challenge to create a random love percentage for two people between 1-100%

var person1 = prompt("What is the name of person 1?");
var person2 = prompt("what is the name of person 2?");
var lovePercent = Math.random();
lovePercent = lovePercent * 100;
lovePercent = Math.floor(lovePercent) + 1;
alert(person1 + " and " + person2 + " are " + lovePercent + "% compatible.");

// same but adding if else statements

var person1 = prompt("What is the name of person 1?");
var person2 = prompt("what is the name of person 2?");
var lovePercent = Math.random();
lovePercent = lovePercent * 100;
lovePercent = Math.floor(lovePercent) + 1; //1-100

if (lovePercent > 70) {
    alert(person1 + " and " + person2 + " are " + lovePercent + "% compatible! You love each other like Kanye loves Kanye.");
} else {
    alert(person1 + " and " + person2 + " are " + lovePercent + "% compatible.");
}

// same but combining comparatives

var person1 = prompt("What is the name of person 1?");
var person2 = prompt("what is the name of person 2?");
var lovePercent = Math.random();
lovePercent = lovePercent * 100;
lovePercent = Math.floor(lovePercent) + 1; //1-100

if (lovePercent > 70) {
    alert(person1 + " and " + person2 + " are " + lovePercent + "% compatible! You love each other like Kanye loves Kanye.");
}
if (lovePercent > 30 && lovePercent <= 70) {
    alert(person1 + " and " + person2 + " are " + lovePercent + "% compatible!");
}
if (lovePercent <= 30) {
    alert(person1 + " and " + person2 + " are " + lovePercent + "% compatible. You go together like oil and water.");
}

// BMI calculator challenge

function bmiCalculator(weight, height) {
    var bmi = weight / Math.pow(height, 2);
    bmi = Math.round(bmi);

    if (bmi > 24.9) {
        interpretation = ("Your BMI is " + bmi + ", so you are overweight.");
    }
    if (bmi > 18.5 && bmi <= 24.9) {
        interpretation = ("Your BMI is " + bmi + ", so you have a normail weight.");
    }
    if (bmi <= 18.5) {
        interpretation = ("Your BMI is " + bmi + ", so you are underweight.");
    }

    return interpretation;
}

var bmi = bmiCalculator(220, 5.8);
console.log(interpretation);

// leap year challenge

function isLeap(year) {

    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return "Leap year.";
            } else {
                return "Not leap year.";
            }
        } else {
            return "Leap year.";
        }
    } else {
        return "Not leap year.";
    }
}

isLeap(1948);

// array challange 

var name = prompt("What is your name?");
var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];
if (guestList.includes(name)) {
    alert("Welcome!");
} else {
    alert("Sorry, maybe next time!");
}

// FizzBUzz challenge

var output = [];
var count = 1;

function fizzBuzz() {
    if ((count % 3 === 0) && (count % 5 === 0)) {
        output.push("FizzBuzz");
    } else if (count % 3 === 0) {
        output.push("Fizz");
    } else if (count % 5 === 0) {
        output.push("Buzz");
    } else {
        output.push(count);
    }
    count++;
    console.log(output);
};

// Who's buying lunch?

function whosPaying(names) {

    var numberOfPeople = names.length;
    var buyLunch = Math.floor(Math.random() * numberOfPeople);
    var randomPerson = names[buyLunch];

    return randomPerson + " is going to buy lunch today!"

}

// while loops updating FizzBuzz

var output = [];
var count = 1;

function fizzBuzz() {
    while (count <= 100) {

        if ((count % 3 === 0) && (count % 5 === 0)) {
            output.push("FizzBuzz");
        } else if (count % 3 === 0) {
            output.push("Fizz");
        } else if (count % 5 === 0) {
            output.push("Buzz");
        } else {
            output.push(count);
        }
        count++;
    }
    console.log(output);
};

// beer on the wall challenge

var numberOfBeer = 99;

function beer() {
    while (numberOfBeer > 1) {
        console.log(numberOfBeer + " bottles of beer on the wall, " + numberOfBeer + " bottles of beer. Take 1 down, pass it around, " + (numberOfBeer - 1) + " bottles of beer on the wall.");
        numberOfBeer--;
    }
    if (numberOfBeer === 1) {
        console.log(numberOfBeer + " bottle of beer on the wall, " + numberOfBeer + " bottle of beer. Take 1 down, pass it around, no more bottles of beer on the wall.");
        numberOfBeer--;
    }
    if (numberOfBeer === 0) {
        console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");
    }
}

// for loops fizzbuzz 
var output = [];

function fizzBuzz() {
    for (var count = 1; count <= 100; count++) {
        if ((count % 3 === 0) && (count % 5 === 0)) {
            output.push("FizzBuzz");
        } else if (count % 3 === 0) {
            output.push("Fizz");
        } else if (count % 5 === 0) {
            output.push("Buzz");
        } else {
            output.push(count);
        }
    }
    console.log(output);
};

// Fibonacci Challenge 

function fibonacciGenerator(n) {
    var output = [];

    if (n === 1) {
        output = [0];
        return output;
    } else if (n === 2) {
        output = [0, 1];
        return output;
    } else {
        output = [0, 1];

        for (var i = 2; i < n; i++) {
            output.push(output[output.length - 2] + output[output.length - 1]); // [0,1,1]
        }
    }
    return output;
}
fibonacciGenerator(12);

