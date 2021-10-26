console.log("Enter 1 for digit in words display program\nEnter 2 for number diplay in week day\nEnter 3 for number display in unit's,ten's,hundered's place\nEnter 4 for finding the maximum result of the arithmetic operations");
const ps = require("prompt-sync");
const prompt = ps();
let choice = prompt("Enter your choice: ");
let option = parseInt(choice);
switch (option) {
    case 1:
        let num = prompt("Enter any number between 0 to 9: ");
        let number = parseInt(num);
        if (number == 0) {
            console.log("Zero");
        }
        else if (number == 1) {
            console.log("One");
        }
        else if (number == 2) {
            console.log("Two");
        }
        else if (number == 3) {
            console.log("Three");
        }
        else if (number == 4) {
            console.log("Four");
        }
        else if (number == 5) {
            console.log("Five");
        }
        else if (number == 6) {
            console.log("Six");
        }
        else if (number == 7) {
            console.log("Seven");
        }
        else if (number == 8) {
            console.log("Eight");
        }
        else {
            console.log("Nine");
        }
        break;
    case 2:
        let weekDay = prompt("Enter any number between 1 and 7:");
        if (weekDay == 1) {
            console.log("Sunday");
        }
        else if (weekDay == 2) {
            console.log("Monday");
        }
        else if (weekDay == 3) {
            console.log("Tuesday");
        }
        else if (weekDay == 4) {
            console.log("Wednesday");
        }
        else if (weekDay == 5) {
            console.log("Thursday");
        }
        else if (weekDay == 6) {
            console.log("Friday");
        }
        else {
            console.log("Saturday")
        }
        break;
    case 3:
        let inp = prompt("Enter any number out of 1, 10, 100 or 1000: ");
        if (inp == 1) {
            console.log("One");
        }
        else if (inp == 10) {
            console.log("Ten");
        }
        else if (inp == 100) {
            console.log("Hundred");
        }
        else {
            console.log("One thousand");
        }
        break;
    case 4:
        let a = prompt("Enter first number: ");
        let b = prompt("Enter second number: ");
        let c = prompt("Enter third number: ");
        let res1 = a + (b * c);
        let res2 = c + (a / b);
        let res3 = (a % b) + c;
        let res4 = (a * b) + c;
        if (res1 > res2 && res1 > res3 && res1 > res4) {
            console.log("Result from the first operation is the maximum");
        }
        else if (res2 > res1 && res2 > res3 && res2 > res4) {
            console.log("Result from the second operation is the maximum");
        }
        else if (res3 > res1 && res3 > res2 && res3 > res4) {
            console.log("Result from the third operation is the maximum");
        }
        else {
            console.log("Result from the fourth operation is the maximum");
        }
        break;
}