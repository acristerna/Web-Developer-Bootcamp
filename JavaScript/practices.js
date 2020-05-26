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

