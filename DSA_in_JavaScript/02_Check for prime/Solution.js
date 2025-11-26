
function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;

    for (let i = 3; i ** i <= num; i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

let number = 26;
if (isPrime(number)) {
    console.log(number + " is a prime number.");
} else {
    console.log(number + " is not a prime number.");
}



`Every composite number N has factor pairs (a, b) such that a × b = N.
In every pair, one factor must be ≤ √N and the other ≥ √N.
So if N has any divisor at all, we will always find the smaller one by the time we reach √N.
If no number ≤ √N divides N, then no number > √N will divide it either.
Therefore, checking up to √N guarantees correctness and reduces complexity from O(N) to O(√N).`


`This function checks whether a number is prime using an optimized approach.
I first handle edge cases like numbers ≤ 1, the number 2, and even numbers.
Then I check divisors only up to √n, because factors come in pairs, and if a number has a divisor 
greater than √n, its paired divisor must be smaller than √n.
I also skip even numbers by incrementing by 2, which cuts the iterations in half.
The condition i * i <= num avoids repeated calls to Math.sqrt(), making the loop more efficient.
Overall, the algorithm runs in O(√n/2), which is effectively O(√n).`