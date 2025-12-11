
function checkAnagram(a, b) {
    if (a.length !== b.length) {
        console.log("Not an Anagram");
        return;
    }
    let charCount = {};
    for (let char of a) {
        charCount[char] = (charCount[char] || 0) + 1;
        console.log(charCount);
    }
    for (let char of b) {
        if (!charCount[char]) {
            console.log("Not an Anagram");
            return;
        }
        charCount[char]--;
        console.log(charCount);
    }
    console.log("Anagram");


}

let a="abcdaa";
let b= "cdbaaa";

checkAnagram(a,b);




const explantion = `
──────────────────────────────────────────
           CODE EXPLANATION
──────────────────────────────────────────

This function checks if two strings are anagrams by comparing character frequencies.
It first checks if the strings have the same length; if not, they cannot be anagrams.
Then, it counts the occurrences of each character in the first string using a hash map (object).
Next, it iterates through the second string, decrementing the count for each character found.
If a character in the second string is not found in the hash map or its count goes below zero, 
the strings are not anagrams.
If all character counts return to zero, the strings are anagrams.
This approach runs in O(n) time complexity, where n is the length of the strings, 
making it efficient for this problem.



`

