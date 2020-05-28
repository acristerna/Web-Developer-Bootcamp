// String practice
var name = prompt("What is your name?");
var firstChar = name.slice(0,1);
var upperCaseFirstChar = firstChar.toUpperCase();
var restOfName = name.slice(1,name.length);
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
function main(){
    goToCorner();
 }
 
 function goToCorner(){
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

 function main(){
    moveFourTimes();
    turnLeft();
    moveFourTimes();
 }
 
 function moveFourTimes(){
    move();
    move();
    move();
    move();
 }

 // Next task to drop a beeper in a diagonal

 function main(){
    putBeeper();
    diagonalMoveAndBeeper();
    diagonalMoveAndBeeper();
    diagonalMoveAndBeeper();
    diagonalMoveAndBeeper();
  }
  
  function diagonalMoveAndBeeper(){
     move();
     turnLeft();
     move();
     putBeeper();
     turnRight();
  }

  // Next task to create a chess board

  function main(){
    row1();
    row2();
    turnRight();
    row1();
    row2();
    turnRight();
    row1();
  }
  
  function row1(){
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
  
  function row2(){
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

 function main(){
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
    var months = yearsRemaining *12;

    console.log("You have " + days + " days, " + weeks + " weeks, " + "and " + months + " months left.")

    }

// BMI calculator challenge

//Create your function below this line.
//The first parameter should be the weight and the second should be the height.


function bmiCalculator(weight, height){
    var bmi = weight/Math.pow(height,2);
    return Math.round(bmi);
}

var bmi = bmiCalculator(65, 1.8); 


/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

var bmi = bmiCalculator(65, 1.8); 

bmi should equal 20 when it's rounded to the nearest whole number.

*/



    
    