/**
 * Checks if a given string is a palindrome.
 *
 * @param {string} str - The input string to check.
 * @returns {boolean} - Returns true if the string is a palindrome, and false otherwise.
 */
function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;
    
	    while (left < right) {
			
			if (str[left].toLowerCase() != str[right].toLowerCase) {
				return false;
			}
			left++;
			right--;
		}
		return true;
}


module.exports = {
    isPalindrome
}