// Assignment code here


var upperC = ['Q','W','E','R','T','Y','U','I','O','P','L','K','J','H','G','F','D','S','A','Z','X','C','V','B','N','M'];
var lowerC = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numeric = [0,1,2,3,4,5,6,7,8,9];
var specChter = ['!','#','$','%','&','*','+','-','.','/',':',';','<','=','>','?','@','^','_','~'];
var result = []; 








// console.log("These are random character " + randomUpperC, randomlowerC, randomnumeric, randomspecChter)var
// for(var i = 0; i < specChter.lenght; i++) {
// console.log(specChter[i])
// };
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
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
 };

 while(result.length <= Plength-1){

if(firstConfirm == true)
 {
  var randomUpperC = upperC[Math.floor(Math.random()*upperC.length)];
   result.push(randomUpperC)
  if(result.length==Plength) {
    break;
  }
 }
  
 if(secondConfirm == true)
 {
  var randomlowerC = lowerC[Math.floor(Math.random()*lowerC.length)];
  result.push(randomlowerC)
  if(result.length==Plength) {
    break;
  }
 }
 if(thirdConfirm == true)
 {
  var randomnumeric = numeric[Math.floor(Math.random() * numeric.length)];
  result.push(randomnumeric)
  if(result.length==Plength) {
    break;
  }
 }

if(fourthConfirm == true)
 {
  var randomspecChter = specChter[Math.floor(Math.random()*specChter.length)];
  result.push(randomspecChter)
  if(result.length==Plength) {
    break;
  }
 }

}
console.log(result.length);
console.log(result)


// you need a while loop or a for loop that runs as long as the result array has the same length as the number input at the beginning

 
  var passwordText = document.querySelector("#password");
  

  passwordText.value = result.join(""); // it will change ["A", "v", 0, 0, "&", "A", "U"];  into one string, so it will look like: "Av00&AU";

}
// var divItem = document.createElement("div");
// var listItem = document.createElement("li");
// listItem.textContect = "Fonzi";
// listItem.setAttribute("class");

// divItem.appendChild(listItem);


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
