
function isPalindrome(str) {
    const len = str.length;
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            console.log("Not a Palindrome");
            return;
        }
    }
    console.log("Palindrome");
}

let str = "madam";
isPalindrome(str);




const explantion = `
──────────────────────────────────────────
           CODE EXPLANATION
──────────────────────────────────────────

This function checks if a given string is a palindrome by comparing characters from both ends towards the center.
It calculates the length of the string and iterates only up to half of that length.
During each iteration, it compares the character at the current index with the character at the corresponding index from the end of the string.
If any pair of characters do not match, it concludes that the string is not a palindrome and exits early.
If all character pairs match, it confirms that the string is a palindrome.
This approach runs in O(n) time complexity, where n is the length of the string, making it efficient for this problem.

`

