
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j + 1]
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
let array = [64, 34, 25, 12, 22, 11, 90];
let sortedArray = bubbleSort(array);
console.log("Sorted array: " + sortedArray);



const explantion = `
──────────────────────────────────────────
           CODE EXPLANATION
──────────────────────────────────────────

This function implements the Bubble Sort algorithm to sort an array of numbers in ascending order.
It uses two nested loops: the outer loop iterates through the entire array, while the inner loop compares adjacent elements.
If the current element is greater than the next element, they are swapped to move the larger element towards the end of the array.
This process is repeated until the entire array is sorted.
The algorithm has a time complexity of O(n^2) in the worst and average cases, making it less efficient for large datasets compared to more advanced sorting algorithms.




──────────────────────────────────────────
     CODE EXPLANATION in Interview Style
──────────────────────────────────────────

This function sorts an array of numbers using the Bubble Sort algorithm.
The algorithm works by repeatedly stepping through the list, comparing adjacent elements and swapping them if they are in the wrong order.
This process is repeated until no swaps are needed, indicating that the array is sorted.
The outer loop runs for each element in the array, while the inner loop performs the comparisons and swaps.
The time complexity of Bubble Sort is O(n^2) in the average and worst cases, which makes it less efficient for large datasets compared to more advanced sorting algorithms like Quick Sort or Merge Sort.



───────────────────────────────────────────────────────────
    LOGIC BEHIND THE CODE EXPLANATION in detailed way
───────────────────────────────────────────────────────────

The Bubble Sort algorithm is based on the concept of repeatedly comparing adjacent elements in an array and swapping them if they are in the wrong order.
The outer loop of the algorithm runs from the first element to the second-to-last element of the array.
For each iteration of the outer loop, the inner loop runs from the first element to the last unsorted element (which decreases with each pass).
During each iteration of the inner loop, the algorithm compares the current element (arr[j]) with the next element (arr[j + 1]).
If the current element is greater than the next element, they are swapped.
This process continues until the entire array is sorted.
The algorithm has a time complexity of O(n^2) in the worst and average cases, making it less efficient for large datasets compared to more advanced sorting algorithms.
This inefficiency arises because, in the worst case, each element needs to be compared with every other element, leading to a quadratic number of comparisons.

why in outer loop this function is checking till less than n-1 instead till n-1?

The outer loop checks till less than n-1 because, in each pass of the outer loop, the largest 
unsorted element "bubbles up" to its correct position at the end of the array.
Therefore, after the first pass, the last element is already sorted, after the second pass, the last two elements are sorted, and so on.
This is why the inner loop only needs to go up to n - 1 - i in each iteration, as the last i elements are already sorted.
This optimization reduces the number of comparisons needed in each pass, improving the efficiency of the algorithm slightly, 
although the overall time complexity remains O(n^2).
The outer loop runs from 0 to n-2 (i < n-1) because after n-1 passes, the array will be fully sorted.

`

function bubble(arr){
    let n= arr.length;
    for(let i=0; i<n-1; i++){
        for(let j=0; j<n-1-i; j++){
            if(arr[j]>arr[j+1]){
                let temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }

    return arr;

}

console.log(bubble([64, 34, 25, 12, 22, 11, 90]));