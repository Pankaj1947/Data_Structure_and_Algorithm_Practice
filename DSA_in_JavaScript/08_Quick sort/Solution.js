
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}
let array = [64, 34, 25, 12, 22, 11, 90];
let sortedArray = quickSort(array);
console.log("Sorted array: " + sortedArray);



const explantion = `
──────────────────────────────────────────
           CODE EXPLANATION
──────────────────────────────────────────

This function implements Quick Sort using a divide-and-conquer strategy.

At a high level:

* A pivot element is selected.
* The array is partitioned into two subarrays:

  * Elements less than the pivot
  * Elements greater than or equal to the pivot
* The same logic is recursively applied to the subarrays.
* The final sorted array is constructed by combining results.

This implementation is functional, not in-place.


──────────────────────────────────────────
     CODE EXPLANATION in Interview Style
──────────────────────────────────────────

> “This is a recursive Quick Sort implementation using the last element as pivot.
> If the array has zero or one element, it is already sorted and returned immediately.
> Otherwise, I partition the array into two subarrays—left and right—based on comparison with the pivot.
> I then recursively sort both subarrays and concatenate the results with the pivot in between.”

### Step-by-step execution:

1. Base Case

if (arr.length <= 1) {
    return arr;
}

* Prevents infinite recursion
* Ensures termination
* Time complexity anchor

---

2. Pivot Selection

const pivot = arr[arr.length - 1];

* Uses the last element as pivot
* Simple but risky (can cause worst-case O(n²) on sorted input)


3. Partitioning

const left = [];
const right = [];

for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
        left.push(arr[i]);
    } else {
        right.push(arr[i]);
    }
}

* Traverses array once → O(n)
* Ensures:

  * left contains elements smaller than pivot
  * right contains elements greater than or equal to pivot

---

4. Recursive Composition

return [...quickSort(left), pivot, ...quickSort(right)];


* Recursively sorts partitions
* Combines results using spread operator
* Builds a new array at every recursion level



───────────────────────────────────────────────────────────
    LOGIC BEHIND THE CODE EXPLANATION in detailed way
───────────────────────────────────────────────────────────

## LOGIC BEHIND THE CODE (Detailed, No-Nonsense)

### Core Strategy: Divide and Conquer

* Break the problem into smaller independent subproblems
* Solve each subproblem recursively
* Merge results with minimal overhead

---

### Why this Works

* Every recursive call reduces problem size
* Pivot ends up in its correct sorted position
* Recursion ensures global ordering

---

### Time Complexity Analysis

| Case    | Reason                     | Complexity |
| ------- | -------------------------- | ---------- |
| Best    | Balanced partitions        | O(n log n) |
| Average | Random distribution        | O(n log n) |
| Worst   | Already sorted + bad pivot | O(n²)      |

---

### Space Complexity Analysis

* Uses extra arrays (left, right)
* Recursion stack depth: O(log n) average
* Overall space: O(n)
  ⚠️ This is not in-place Quick Sort

---

## Strengths of This Implementation

* Highly readable
* Interview-friendly
* Functional and immutable
* Easy to reason about

---

## Weaknesses (Be Honest in Interviews)

* Not in-place
* Extra memory allocation
* Poor pivot strategy
* Vulnerable to worst-case scenarios

---

## How to Improve This in Production

* Use randomized pivot
* Use in-place partitioning
* Switch to Insertion Sort for small subarrays
* Implement Intro Sort behavior

---

## Final Interview Takeaway

> “This implementation prioritizes clarity over optimal space usage.
> In production, I’d use an in-place Quick Sort or rely on the language’s optimized sorting library.”


`
