
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

──────────────────────────────────────────
     CODE EXPLANATION in Interview Style
──────────────────────────────────────────

This function determines if a string is a palindrome by comparing characters from both ends towards the center.
It calculates the length of the string and iterates only up to half of that length.
During each iteration, it compares the character at the current index with the character at the corresponding index from the end of the string.
If any pair of characters do not match, it concludes that the string is not a palindrome and exits early.
If all character pairs match, it confirms that the string is a palindrome.
This approach is efficient with a time complexity of O(n), where n is the length of the string.

───────────────────────────────────────────────────────────
    LOGIC BEHIND THE CODE EXPLANATION in detailed way
───────────────────────────────────────────────────────────

The logic behind this palindrome checking function is based on the definition of a palindrome, which is a string that reads the same forwards and backwards.
To determine if a string is a palindrome, the function compares characters from both ends of the string moving towards the center.
It first calculates the length of the string to know how many characters need to be compared.
The function then iterates from the start of the string up to half its length.
During each iteration, it compares the character at the current index (from the start) with the character at the corresponding index from the end of the string (calculated as len - 1 - i).
If any pair of characters do not match, the function immediately concludes that the string is not a palindrome and exits.
This early exit optimizes performance by avoiding unnecessary comparisons once a mismatch is found.
If all character pairs match throughout the iterations, the function confirms that the string is a palindrome.
This method is efficient, with a time complexity of O(n), where n is the length of the string, as it requires only a single pass through half of the string's characters.


`

