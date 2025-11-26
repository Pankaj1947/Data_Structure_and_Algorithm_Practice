## **Fizz Buzz**
Given an integer N. Print the numbers from 1 to N and for multiples of ‘3’ print “Fizz” instead of the number, for the multiples of ‘5’ print “Buzz” and for multiples of both 5 and 3 print "FizzBuzz"

#### **Sample Input**
	input: N = 10

#### **Sample Output**
	Output: 1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz

#### **Sample Explanation**
Self explanatory.

#### **Expected Time Complexity**
__O__(N)

#### **Expected Space Complexity**
__O__(1), i.e., constant space complexity.

#### **Constraints**
	1 <= N <= 100000

=================================================================================

### FizzBuzz - Editorial

### Difficulty: Easy

### Prerequisite: Maths.
---
### Hint

Check multiples of 3, 5 and 15.

### Short Explanation

- For first N natural numbers multiples of 3 are termed as "Fizz", multiples of 5 are termed as "Buzz", while multiples of 15 are termed as "FizzBuzz". Rest all numbers remain in their original form.

### Detailed Explanation

- All natural numbers divisible by 3 and not by 5 are called as "Fizz" while those divisible by 5 and not by 3 are called as "Buzz". If any number is divisible by both it's called as "FizzBuzz". Rest all natural numbers remain in their original form.

- Hence iterating over all natural numbers from 1 to N and, checking whether the ith number ( 1 <= i <= N ) is divisible by 3 or, 5 or, both will fetch the result accordingly.

- Pseudo code:

```python
N; // Range of natural numbers

for( i from 1 to N ){

if( i%3 == 0 and i%5!= 0 )

  Print("Fizz");

else if( i%5 == 0 and i%3!= 0 )

  Print("Buzz");

else if( i%3 == 0 and i%5== 0 )

  Print("FizzBuzz");

else

  Print(i);

```

- Example -
```python
    N = 10.

    Numbers 3, 6 and, 9 are called as "Fizz" while 5 and 10 are "Buzz". 
    
    Rest all remain same. Hence output is:

    1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz
    
```

### Time Complexity:

`O(N)`. Where N is given integer.

A total of N iterations is required.

### Space Complexity:

`O(1)`.

No extra space is required.

### Alternate Solution:

None