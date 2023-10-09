function isPalindrome(word) {
  // Write your algorithm here
 
  // Split the string into an array of characters, remove spaces, and join them back together
  word = word.split('').filter(char => char !== ' ').join('').toLowerCase();
  
  // Initialize pointers for the start and end of the string
  let start = 0;
  let end = word.length - 1;
  
  // Iterate through the string from both ends
  while (start < end) {
    // If characters at the current positions don't match, it's not a palindrome
    if (word[start] !== word[end]) {
      return false;
    }
    // Move the pointers towards each other
    start++;
    end--;
  }
  
  // If the loop completes without finding a mismatch, it's a palindrome
  return true;
}

/* 
  Add your pseudocode here
  function isPalindrome(word):
    1. Start with the input word.
    2. Remove spaces and convert all characters to lowercase to create a cleaned word.
    3. Initialize two pointers, `start` at the beginning of the cleaned word (position 0) and `end` at the end of the cleaned word (position `length(cleanedWord) - 1`).
    4. While `start` is less than `end`, do the following:
       a. If the character at position `start` in the cleaned word is not equal to the character at position `end` in the cleaned word, return `false` (it's not a palindrome).
       b. Increment `start` by 1.
       c. Decrement `end` by 1.
    5. If the loop completes without finding a mismatch, return `true` (it's a palindrome).

*/

/*
  Add written explanation of your solution here
  1. The isPalindrome function takes one argument, word, which is the string to be checked for palindromic properties.
  2. The first task inside the function is to preprocess the input string. This involves:
      - Splitting the input string into an array of individual characters using split(''). This breaks the string down into its constituent letters.
      - Filtering out any space characters from the array using filter(char => char !== ' '). This step removes spaces from consideration when checking for palindromes.
      - Joining the filtered array of characters back together into a single string using join('').
      - Converting the resulting string to lowercase using .toLowerCase(). This ensures that the function is case-insensitive when determining if a word is a palindrome or not.
  3. Two pointers, start and end, are initialized. These pointers are used to compare characters from both ends of the string.
  4. The while loop runs as long as start is less than end, which means the loop iterates from both ends of the string towards the center.
  5. Inside the loop:
      - Characters at the current positions of start and end are compared. If they don't match, the input string is not a palindrome, and false is immediately returned from the function.
  6. If the loop completes without finding any mismatch between characters, the input string is a palindrome. In this case, true is returned from the function.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("madam"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("Hello, World!"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("was it a car or a cat i saw"));
}

module.exports = isPalindrome;
