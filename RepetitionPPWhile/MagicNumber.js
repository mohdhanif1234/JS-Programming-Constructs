//Think a number between 1-100 , program to find that number 
var prompt = require("prompt-sync")();
let found = false;
let start = 0;
let end = 100;

function GuessNumber() {
    console.log("Think of a number in between 1-100 \n");
    while (start != end && found != true) {
        let midNumber = Math.round((end + start) / 2);
        userInput(midNumber);
    }
    if (start == end) {
        console.log("Your number is :" + end);
    }
}

function userInput(midNumber) {
    let option = parseInt(prompt("Enter:\n 1-Is " + midNumber + " your number?\n 2-Is your number less than " + midNumber + "?\n 3-Is your number greater than " + midNumber + "?"));
    switch (option) {
        case 1:
            console.log(" Your number is " + midNumber);
            found = true;
            break;
        case 2:
            end = midNumber - 1;
            break;
        case 3:
            start = midNumber + 1;
            break;
        default:
            console.log("Enter the valid option!!");
            break;
    }
}

GuessNumber();