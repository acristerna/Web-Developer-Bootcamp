// var answer = prompt("Are we there yet?");

// while (answer !== "yes" && answer !== "yeah") {
// 	var answer = prompt("Are we there yet?");
// }

// alert ("Yay! We made it!");

// VERSION 2
// index of is similar the .contains method - if the str contains the 
// whatever we are checking it will return the index value 
// if it doesnt contain it, it will return -1

var answer = prompt("Are we there yet?");

while (answer.indexOf("yes") === -1) {
	var answer = prompt("Are we there yet?");
}

alert ("Yay! We made it!");


