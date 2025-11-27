
function decimalToBinary(num) {
    if (num === 0) return "0";
    let binary = ""; 
    
    while (num > 0) {
        binary = (num % 2) + binary;
        num = Math.floor(num / 2);
    }
    return binary;

}
let number = 18;
let binaryRepresentation = decimalToBinary(number);
console.log("Binary representation of " + number + " is: " + binaryRepresentation);



const explantion = `
──────────────────────────────────────────
           CODE EXPLANATION
──────────────────────────────────────────

This function converts a given decimal number to its binary representation.
It uses repeated division by 2 to extract the binary digits (bits) from least significant to most significant.
The remainder when dividing by 2 gives the current least significant bit, which is prepended to the result string.
The process continues until the number is reduced to 0.
If the input number is 0, it directly returns "0" as its binary representation.
This method effectively builds the binary representation in O(log n) time complexity, where n is the input number.


`