//Check number is Palindrome or not 
const prompt = require("prompt-sync")();

function Palindrome() {
    let rem = 0;
    let temp = 0;
    let num1 = 0;
    let number = prompt("Enter a number ");

    temp = number;
    while (number > 0) {
        rem = number % 10;
        number = parseInt(number / 10);
        num1 = num1 * 10 + rem;
    }

    if (num1 == temp) {
        console.log("The number  " + temp + " is Palindorme");
    }
    else {
        console.log("The number " + temp + " is not a Palindorme");
    }
}
//caling function
Palindrome();