// Assignment code here


var upperC = ['Q','W','E','R','T','Y','U','I','O','P','L','K','J','H','G','F','D','S','A','Z','X','C','V','B','N','M'];
var lowerC = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numeric = [0,1,2,3,4,5,6,7,8,9];
var specChter = ['!','#','$','%','&','*','+','-','.','/',':',';','<','=','>','?','@','^','_','~'];
var result = []; 



var randomUpperC = upperC[Math.floor(Math.random()*upperC.length)];
var randomlowerC = lowerC[Math.floor(Math.random()*lowerC.length)];
var randomnumeric = numeric[Math.floor(Math.random() * numeric.length)];
var randomspecChter = specChter[Math.floor(Math.random()*specChter.length)];

// console.log("These are random character " + randomUpperC, randomlowerC, randomnumeric, randomspecChter)var
// for(var i = 0; i < lenght; i++) {
//   console.log(specChter[i])
// };

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  console.log("These are random character " + randomUpperC + randomlowerC + randomnumeric + randomspecChter);
  var Plength= window.prompt("Choose from 8 - 128 the length of the password");
  if (Plength < 8 || Plength > 128) {
    window.alert("You need to provide a valid answer! Please try again.");
      return writePassword();
  };

  var firstConfirm = window.confirm("Would you like to have Upper Case");
  var secondConfirm = window.confirm("Would you like to have Lower Case");
  var thirdConfirm = window.confirm("Would you like to have Numbers");
  var fourthConfirm = window.confirm("Would you like to have Special characters");
 if(firstConfirm == false && secondConfirm == false && thirdConfirm == false && fourthConfirm == false)
 {
   alert("you need to pick at least one type!");
 }
 while(result.length <= Plength){
if(firstConfirm == true)
 {
   result.push(randomUpperC)
 }
 else if(secondConfirm == true)
 {
  result.push(randomlowerC)
 }
 else if(thirdConfirm == true)
 {
  result.push(randomnumeric)
 }

 else if(fourthConfirm == true)
 {
  result.push(randomspecChter)
 }
}
Console.log(result)
// you need a while loop or a for loop that runs as long as the result array has the same length as the number input at the beginning

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = result.join(","); // it will change ["A", "v", 0, 0, "&", "A", "U"];  into one string, so it will look like: "Av00&AU";

}
// var divItem = document.createElement("div");
// var listItem = document.createElement("li");
// listItem.textContect = "Fonzi";
// listItem.setAttribute("class");

// divItem.appendChild(listItem);


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
