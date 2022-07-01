// Palindrome Checker : JavaScript Algorithms and Data Structures Projects

// Question: 
// Return true if the given string is a palindrome. Otherwise, return false.
// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
// Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

// My solution:

  function palindrome(str) {
    let letters = str
    .toLowerCase()
    .replace(/[^a-z0-9]/gi,'')
    .split("");
    
    let forwardLetters = letters
    .join("");
    
    let reverseLetters = letters
    .reverse()
    .join("");
    
    if (reverseLetters === forwardLetters) {
      return true;
    } else {
      return false;
    }
 }

//Description: 

// .toLowerCase()
// convert all letters to lowercase (optional)

//.replace(/[^a-z0-9]/gi,'')
// remove all non-alphanumeric characters

