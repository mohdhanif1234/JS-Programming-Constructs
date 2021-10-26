//Power of 2 table and check the condtion not exceed to 256
const prompt = require("prompt-sync")();
const num = prompt("Enter the number to display the power of 2: ");
let res = "";
let i = 1;
let pow = 0;
while (i <= num && i <= 8) {
    pow = Math.pow(2, i);
    res = res + "2 ^ " + i + " = " + pow + "\n";
    i++;
}
console.log(res);