//Prime factorization method to find factors of a number
var prompt = require("prompt-sync")();
let number = prompt("Enter a number: ");
console.log("The prime factor of " + number + " are:");
for (let count = 2; count <= number; count++) {
    if (number % count == 0) {
        let isPrime = 1;
        for (let j = 2; j <= count / 2; j++) {
            if (count % j == 0) {
                isPrime = 0;
                break;
            }
        }
        if (isPrime == 1) {
            console.log(count)
        }
    }
}
