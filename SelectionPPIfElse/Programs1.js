console.log("Enter 1 to find the maximum and minimum number out of the 5 random 3 digit numbers\nEnter 2 to run a program to take a command line argument and print true if the day if the month is between 20th March and 20th June otherwise false\nEnter 3 to check whether a year is a leap year or not\nEnter 4 for a simple coin flip simulation");
const ps = require("prompt-sync");
const prompt = ps();
let choice = prompt("Enter your choice: ");
let option = parseInt(choice);
switch (option) {
    case 1:
        num1 = Math.floor(Math.random() * 1000);
        num2 = Math.floor(Math.random() * 1000);
        num3 = Math.floor(Math.random() * 1000);
        num4 = Math.floor(Math.random() * 1000);
        num5 = Math.floor(Math.random() * 1000);
        console.log(`The 3 digit random numbers are ${num1},${num2},${num3},${num4} and ${num5}`);
        console.log("-----Displaying the maximum number-----")
        if (num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5) {
            console.log(`${num1} is the maximum number`);
        }
        else if (num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5) {
            console.log(`${num2} is the maximum number`);
        }
        else if (num3 > num1 && num3 > num2 && num3 > num4 && num3 > num5) {
            console.log(`${num3} is the maximum number`);
        }
        else if (num4 > num1 && num4 > num2 && num4 > num3 && num4 > num5) {
            console.log(`${num4} is the maximum number`);
        }
        else {
            console.log(`${num5} is the maximum number`);
        }
        console.log("-----Displaying the minimum number-----")
        if (num1 < num2 && num1 < num3 && num1 < num4 && num1 < num5) {
            console.log(`${num1} is the minimum number`);
        }
        else if (num2 < num1 && num2 < num3 && num2 < num4 && num2 < num5) {
            console.log(`${num2} is the minimum number`);
        }
        else if (num3 < num1 && num3 < num2 && num3 < num4 && num3 < num5) {
            console.log(`${num3} is the minimum number`);
        }
        else if (num4 < num1 && num4 < num2 && num4 < num3 && num4 < num5) {
            console.log(`${num4} is the minimum number`);
        }
        else {
            console.log(`${num5} is the minimum number`);
        }
        break;
    case 2:
        const ps = require("prompt-sync");
        const prompt = ps();
        let day = prompt("Enter a day in number: ");
        let month = prompt("Enter a month in number: ");
        if (day <= 31 && day >= 20 && month >= 3 && month <= 6) {
            if (day >= 20 && month == 6) {
                console.log("False");
            }
            else {
                console.log("True");
            }
        }
        else {
            console.log("False");
        }
        break;
    case 3:
        let year = prompt("Enter a year: ");
        if (year % 4 == 0) {
            if (year % 100 == 0) {
                if (year % 400 == 0) {
                    console.log(`${year} is a leap year}`);
                }
                else {
                    console.log(`${year} is not a leap year`);
                }
            }
            else {
                console.log(`${year} is a leap year`);
            }
        }
        else {
            console.log(`${year} is not a leap year`);
        }
        break;
    case 4:
        let head = 1;
        let diceCheck = (Math.floor(Math.random() * 10)) % 2;
        if (diceCheck == head) {
            console.log("Heads");
        }
        else {
            console.log("Tails");
        }
        break;
    default:
        console.log("Enter a valid input!!!");
        break;
}