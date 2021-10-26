//Converison of temperature from fahrenheit-celusis or celusis-fahrenheit 
var prompt = require("prompt-sync")();
//Function to get temperature and checking the freezing and boiling point condition
//fahrenheit to celsius conversion
function fahrenheitToCelsius(inputTemp) 
{
  return ((inputTemp - 32) * 5) / 9;

}
// celsius to fahrenheit conversion
function celsiusToFahrenheit(inputTemp)
 {
  return (inputTemp * 9) / 5 + 32;
}
//Caling the get temperature function to get inputs frm the user
getTemperature();

function getTemperature()
{
  var options= prompt("Enter the temperature in: \n 1-Degree celcius \n 2-Degree farenheit");
  switch (options)
  {
    case "1":
      let input1 = prompt("Enter the fahrenheit value:");
      res1= fahrenheitToCelsius(input1);
      if (res1 >= 0 && res1 <= 100) 
      {
        console.log("Celusis value is between the freezing and boiling point " + res1+ "C");
      } 
      else 
      {
        console.log("The celcius value should be in between freezing and boiling point!");
      }
      break;
    case "2":
      let input2 = prompt("Enter the Celsius value");
      res2 = celsiusToFahrenheit(input2);
      if (res2>= 32 && res2 <= 212) 
      {
        console.log("Fahrenheit value is between the freezing and boiling point " + res2 + "F");
      } 
      else 
      {
        console.log("The fahrenheit value should be in between freezing and boiling point!");
      }
      break;
      default:
          console.log("Please enter the valid option!");
          break;
  }
}
//fahrenheit to celsius conversion
function fahrenheitToCelsius(inputVal) 
{
  return ((inputVal - 32) * 5) / 9;

}
// celsius to fahrenheit conversion
function celsiusToFahrenheit(inputVal)
 {
  return (inputVal * 9) / 5 + 32;
}
getTemperature();