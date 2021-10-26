//Print the prime number in range given by user input
var prompt = require("prompt-sync")();
// take input from  user
let lowerNum = prompt("Enter lower limit: ");
let higherNum = prompt("Enter upper limit: ");
let res = "";
for (let i = lowerNum; i <= higherNum; i++) {
    let flag = 0;
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }
    // if number greater than 1 and not divisible by other numbers
    if (i > 1 && flag == 0) {
        res += i + " ";
    }
}
console.log("The prime numbers between " + lowerNum + " and " + higherNum + " are :");
console.log(res);