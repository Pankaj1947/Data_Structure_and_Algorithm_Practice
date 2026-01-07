
function binaryToDecimal(binaryStr) {
    let decimal = 0;
    let power = 0;
    for (let i = binaryStr.length - 1; i >= 0; i--) {
        if (binaryStr[i] === '1') {
            decimal += Math.pow(2, power);
        }
        power++;
    }
    return decimal;
}

let binaryString = "10000";
let number = binaryToDecimal(binaryString);
console.log(number);

const explantion = `
──────────────────────────────────────────
           CODE EXPLANATION
──────────────────────────────────────────

This function converts a binary string to its decimal equivalent.
It initializes a decimal variable to store the result and a power variable to track the current power of 2.
The function iterates through the binary string from right to left.
For each character, if it is '1', it adds the corresponding power of 2 to the decimal result.
The power variable is incremented with each iteration to represent the increasing powers of 2.
Finally, the function returns the computed decimal value.
This approach runs in O(n) time complexity, where n is the length of the binary string.

──────────────────────────────────────────
     CODE EXPLANATION in Interview Style
──────────────────────────────────────────

This function takes a binary string as input and converts it to its decimal representation.
The conversion process involves iterating through each bit of the binary string, starting from the least significant bit (rightmost).
For each bit, if it is '1', we calculate its decimal value by raising 2 to the power of its position index and add that value to a cumulative total.
The position index is tracked using a separate variable that increments with each iteration.
By the end of the loop, we have summed all the contributions from the '1' bits, resulting in the final decimal value.
This method is efficient and straightforward, with a time complexity of O(n), where n is the length of the binary string.


───────────────────────────────────────────────────────────
    LOGIC BEHIND THE CODE EXPLANATION in detailed way
───────────────────────────────────────────────────────────

The logic behind converting a binary string to a decimal number is based on the positional value of each bit in the binary system.
In binary, each bit represents a power of 2, starting from 2^0 at the rightmost bit and increasing by one power as you move left.
For example, the binary string "10000" can be broken down as follows:
- The rightmost bit (0) represents 2^0 = 1, contributing 0 to the decimal value.
- The next bit (0) represents 2^1 = 2, contributing 0 to the decimal value.
- The next bit (0) represents 2^2 = 4, contributing 0 to the decimal value.
- The next bit (0) represents 2^3 = 8, contributing 0 to the decimal value.
- The leftmost bit (1) represents 2^4 = 16, contributing 16 to the decimal value.
By iterating through the binary string from right to left, we can easily calculate the decimal value by checking each bit.
If the bit is '1', we add the corresponding power of 2 to our total decimal value.
This method ensures that we account for the contribution of each bit based on its position, 
ultimately yielding the correct decimal representation of the binary input.

`

function binarytonum(binaryStr) {
    let number = 0;
    let power = 0;
    for (let i = binaryStr.length - 1; i >= 0; i--) {
        if (binaryStr[i] == "1") {
            number += Math.pow(2, power);
        }
        power++;
    }
    console.log(number);
}

binarytonum("10000");