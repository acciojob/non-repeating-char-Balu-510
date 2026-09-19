function firstNonRepeatedChar(str) {
 // Write your code here
	const charCount = {};

  // Count the frequency of each character
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Find the first character with a frequency of 1
  for (let char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  // Return null if no non-repeated character exists or str is empty
  return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
