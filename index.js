const { consoleLog } = require("mocha/lib/reporters/base");

function isPalindrome(string) {
  // Write your algorithm here
  let stringChars ="";
  for(let i=0; i< string.length; i++){
    let char = string[i];
    //check if char is an alphapbet letter
    if(/[a-zA-z]/.test(char)){
      //convert to lowercase
      stringChars += char.toLowerCase();
    }else{
      //preserve
      stringChars += char;
    }
    
    
  }
  //trim white space 
  stringChars = stringChars.trim();

  let reversedString = stringChars.split("").reverse().join("");

  //check if string is palindrome
  if(string === reversedString){
      
    return true;
  } else{
    return false;
  }
  
}
let string = "madam";
console.log(isPalindrome(string));

/* 
  Add your pseudocode here
  Define function ispalindrome
  takes input: alphabet letter, lowercase, no spaces, no special characters, no digits
  define method to check letters,digits and special characters = /[a-zA-Z]/.test() 
  convert to lowercase = .toLowerCase()
  remove spaces = .trim(
  check if returned string is palindrome: stringchars.split('').reverse().join('');
  expected output = lowercase string, true of false  
  ) 
*/

/*
  Add written explanation of your solution here
  The function IsPalindrome takes a string as an argument
  checks if the characters in the string are alphabets letters only
  converts the characters to lowercase and removes whitespaces
  returns a string in lowercase and checks if it's a palindrome
  returns false if it's not and true if it is a palindrome
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
