// While Loops Problem Set

// Printing all numbers between -10 and 19
console.log("Printing all numbers between -10 and 19");
var num = -10;

while (num < 20) {
	console.log(num);
	num++;
}

// Printing all even numbers between 10 and 40
console.log("Printing all even numbers between 10 and 40");
// var num = 10;

// while (num <= 40) {
// 	if (num % 2 === 0){
// 	console.log(num);
// 	}
// 	num++;
// }
 
//  or if the starting number for sure is even you can code
num = 10
while (num <= 40) {
	console.log(num);
	num+=2;
}

// Printing all odd numbers between 300 and 333
console.log("Printing all odd numbers between 300 and 333");
var num = 300;

while (num <= 333) {
	if (num % 2 !== 0){
	console.log(num);
	}
	num++;
}

// Printing all numbers divisible by 5 AND 3 between 5 and 50
console.log("Printing all numbers divisible by 5 AND 3 between 5 and 50");
var num = 5;

while (num <= 50) {
	if (num % 5 === 0 && num % 3 === 0 ) {
	console.log(num);
	}
	num++;
}