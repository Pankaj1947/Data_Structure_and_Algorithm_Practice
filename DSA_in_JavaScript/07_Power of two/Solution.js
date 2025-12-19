
function isPowerOfTwo(n) {
    if (n <= 0) return false;
    return (n & (n - 1)) === 0;
}
let number = 16;
console.log(isPowerOfTwo(number));



const explantion = `
──────────────────────────────────────────
           CODE EXPLANATION
──────────────────────────────────────────

This function checks if a given number is a power of two using a bitwise operation.
A number is a power of two if it has exactly one bit set in its binary representation.
The function first checks if the number is less than or equal to zero, in which case it cannot be a power of two.
Then, it uses the expression (n & (n - 1)) to determine if there is only one bit set.
If the result of this expression is zero, it means that n is a power of two; otherwise, it is not.
This method is efficient and runs in constant time O(1).


──────────────────────────────────────────
     CODE EXPLANATION in Interview Style
──────────────────────────────────────────

This function determines if a number is a power of two by leveraging a fundamental property of binary numbers.
A power of two in binary form has a single '1' bit followed by '0' bits (e.g., 1 is 0001, 2 is 0010, 4 is 0100, 8 is 1000).
When you subtract 1 from a power of two, all bits after the '1' bit flip (e.g., 4 (0100) - 1 = 3 (0011)).
Thus, performing a bitwise AND operation between n and (n - 1) will yield 0 if n is a power of two, since there are no overlapping '1' bits.
The function also checks if n is positive, as powers of two are defined only for positive integers.
This approach is optimal with a time complexity of O(1), making it very efficient for this problem.

───────────────────────────────────────────────────────────
    LOGIC BEHIND THE CODE EXPLANATION in detailed way
───────────────────────────────────────────────────────────

The logic behind using the expression (n & (n - 1)) to check if a number is a power of two is based on the binary representation of numbers.
In binary, a power of two has a unique characteristic: it has exactly one bit set to '1', and all other bits are '0'.
For example:
- 1 in binary is 0001
- 2 in binary is 0010
- 4 in binary is 0100
- 8 in binary is 1000
When you subtract 1 from a power of two, the binary representation changes such that all bits after the single '1' bit flip to '1', and the '1' bit itself becomes '0'.
For example:
- 4 (0100) - 1 = 3 (0011)
- 8 (1000) - 1 = 7 (0111)
When you perform a bitwise AND operation between n (a power of two) and (n - 1), the result will be 0 because there are no overlapping '1' bits.
For instance:
- For n = 4 (0100) and n - 1 = 3 (0011), the AND operation yields 0000.
- For n = 8 (1000) and n - 1 = 7 (0111), the AND operation yields 0000.
If n is not a power of two, there will be more than one '1' bit in its binary representation, and thus the AND operation will yield a non-zero result.
For example:
- For n = 6 (0110) and n - 1 = 5 (0101), the AND operation yields 0100 (which is not zero).
Therefore, by checking if (n & (n - 1)) equals zero, we can efficiently determine if n is a power of two.
This method is both elegant and efficient, operating in constant time O(1) since it involves only a couple of arithmetic and bitwise operations.

`


function isPowerOfTwoNormalSolution(n) {
    if (n <= 0) return false;
    while (n > 1) {
        if (n % 2 !== 0) return false;
        n = n / 2;
    }
    return true;
}


console.log(isPowerOfTwoNormalSolution(16));


const explantion2 = `
──────────────────────────────────────────
           CODE EXPLANATION
──────────────────────────────────────────

This function checks if a given number is a power of two using a loop and division.
A number is a power of two if it can be repeatedly divided by two until it reaches one.
The function first checks if the number is less than or equal to zero, in which case it cannot be a power of two.
Then, it enters a loop that continues as long as n is greater than one.
Inside the loop, it checks if n is odd (i.e., n % 2 !== 0). If it is, the function returns false, indicating that n is not a power of two.
If n is even, it divides n by two and continues the loop.
If the loop completes and n reaches one, the function returns true, indicating that n is a power of two.
This method runs in O(log n) time complexity, where n is the input number.
`