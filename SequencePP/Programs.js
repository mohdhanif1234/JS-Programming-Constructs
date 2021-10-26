console.log("Enter 1 for single digit number\nEnter 2 for dice number\nEnter 3 to add two random dice numbera and print the result\nEnter 4 to to find the sum and average of 5 random 2 digit numbers\nEnter 5 for unit conversion");
const ps = require("prompt-sync");
const prompt = ps();
let choice = prompt("Enter your choice: ");
let option = parseInt(choice);
switch (option) {
    // 1 - To get a single digit random number using the random number function
    case 1:
        let number = Math.floor(Math.random() * 10);
        console.log("Random Number = " + number);
        break;
    // 2 - To get a random number between 1 and 6
    case 2:
        let diceNum = Math.floor(Math.random() * 6) + 1;
        console.log("Random Dice Number = " + diceNum);
        break;
    // 3 - To add two random dice numbers and print the result
    case 3:
        let diceNum1 = Math.floor(Math.random() * 6) + 1;
        let diceNum2 = Math.floor(Math.random() * 6) + 1;
        let sum = diceNum1 + diceNum2;
        console.log("Addition of two dice numbers = " + sum);
        break;
    // 4 - To get 5 random 2 digit numbers and print their sum and average
    case 4:
        let num1 = Math.floor(Math.random() * 100);
        let num2 = Math.floor(Math.random() * 100);
        let num3 = Math.floor(Math.random() * 100);
        let num4 = Math.floor(Math.random() * 100);
        let num5 = Math.floor(Math.random() * 100);
        let add = num1 + num2 + num3 + num4 + num5;
        let average = add / 5;
        console.log("Sum of 5 numbers = " + add);
        console.log("Average of 5 numbers = " + average);
        break;
    // 5 - To perform unit conversion
    case 5:
        let conv = 42 / 12;
        console.log("42 in = " + conv + " feet");
        let lengthInMts = 60 * 0.3048;
        let breadthInMts = 40 * 0.3048;
        let area = lengthInMts * breadthInMts;
        console.log("Area in sq. meters = " + area);
        let areaOf25Plots = area * 25;
        console.log("Area of 25 plots in sq. meters =  " + areaOf25Plots);
        break;
    default:
        console.log("Enter a valid input!!!");
        break;
}
