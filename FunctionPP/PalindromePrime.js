//Check the given number is palindrome and also prime number using function
var prompt = require("prompt-sync")();
// take input from the user
function checkPrime()
{
    //var number = prompt("Enter a number: ");
    number=65;
    let isPrime = true;
    if (number === 1)
    {
        console.log("1 is a prime number.");
    }

    else if (number > 1)
    {
        for (let i = 2; i < number; i++)
        {
            if (number % i == 0)
            {
                isPrime = false;
                break;
            }
        }
    } 
    if(isPrime = true)   
    {
        console.log(number+" is a prime number");
        Palindrome(number);
    }
    else
    {
        console.log(number+" is not a prime number");
    }
}

//function for checking a number is palindrome or not
function Palindrome(number)
{
	let rem=0;
    let temp=0;
    let num1 = 0;

	temp = number;
	while(number>0)
	{
		rem = number%10;
		number = parseInt(number/10);
		num1 = num1*10+rem;
	}

	if(num1==temp)
	{
		console.log("The number  "+ temp + " is Palindorme");
	}
	else
	{
		console.log("The number "+ temp + " is not a Palindorme");
	}
}

checkPrime();