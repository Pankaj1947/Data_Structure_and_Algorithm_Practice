## **FIND DUPLICATE IN AN ARRAY**
Given an array A of N elements that contains elements from 1 to N-1. All elements occur once except one which occurs twice. Find the repeating element.

#### **Sample Input**
	N = 5, A = [1, 3, 3, 2, 4].

#### **Sample Output**
	Output: 3

#### **Sample Explanation**
Element 3 appears twice in the array. Hence it is the only repeating element.

## **Expected Time Complexity**
__O__(N), where N is the size of the array

## **Expected Space Complexity**
__O__(1), i.e., constant space complexity.

## **Constraints**
	1 <= N <= 100000
	

==================================================================================


### **Find Duplicate in Array - Editorial**
### **Difficulty: Easy**
### **Prerequisite: 1-Dimensional Arrays**
---
### **Hint**:
The sum of first N natural numbers is given `sum = N * (N + 1)/2`

### **Short Explanation**:
In this question we are given an array A, of size N, having values between 1 to N-1, such that all the numbers occur once except for one, which occurs twice. A simple intuitive solution would be to find the sum of all the elements in the array, and also to find the sum of first (N-1) natural numbers using the formula given in the hint. The difference between the two sums, will be the element that is occuring twice.

### **Detailed Explanation**:
In this question, we are given an array A, consisting of N elements, such that the numbers present in the range are of [1, N-1].All the elements occur once, except for one which occurs twice. A brute force solution would be to fix a particular element, and look for its presence again in the array, at some other position. The worst case time complexity of this solution would be `O(N^2)`, where N is the size of the array.
An optimized approach to this could be, that the array contains only elements in the range of [1,N-1]. Therefore, the difference between the sum of all the elements in the array, and the sum of first N - 1 natural numbers, results in the value which occurs twice.

For example, given an array `A = [1,3,3,2,4]` has 5 elements. Therefore, the sum of all the elements of the array is S1 = 13, and the sum of first N-1 natural numbers is S2 = 10. Therefore, the difference between the two is 3, which is the value which is repeated in the array. 




### *Pseudo Code*
```python
	function findDuplicates(int[] array)
	S1 = 0
	for (int i=0;i<array.length;i++) 
		S1 += array[i]
	n = array.length - 1
	S2 = [n * (n + 1)]/2
	int ans = S1 - S2
	return ans
```

### Time Complexity:

`O(N)` where N is the size of the array, as a single traversal of the array is needed.

### Space Complexity:

`O(1)` - No extra space required.


## Alternate Solution:
A brute force has been mentioned in the detailed explanation