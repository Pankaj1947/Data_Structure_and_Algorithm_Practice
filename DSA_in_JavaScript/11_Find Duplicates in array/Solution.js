
function findDuplicatesInArray(arr) {
    let seen = new Set();
    let duplicates = new Set();

    for (let num of arr) {
        if (seen.has(num)) {
            duplicates.add(num);
        } else {
            seen.add(num);
        }
    }

    return [...duplicates];
}

let array = [1, 2, 3, 4, 2, 3, 5, 6, 1];
console.log(findDuplicatesInArray(array));




const explantion = `
──────────────────────────────────────────
           CODE EXPLANATION
──────────────────────────────────────────

This function identifies duplicate elements in an array using two sets.
It iterates through each element in the array, checking if it has been seen before by looking it up in the 'seen' set.
If the element is already in the 'seen' set, it is added to the 'duplicates' set.
If it is not in the 'seen' set, it is added there for future reference.
Finally, the function returns an array of the duplicate elements by converting the 'duplicates' set to an array.
This approach ensures that each duplicate is recorded only once, regardless of how many times it appears in the input array.


──────────────────────────────────────────
     CODE EXPLANATION in Interview Style
──────────────────────────────────────────

This function finds duplicate elements in an array by utilizing two sets.
As we iterate through each number in the array, we check if it has already been encountered by looking it up in the 'seen' set.
If it has, we add it to the 'duplicates' set to keep track of duplicates.
If it hasn't, we add it to the 'seen' set for future reference.
At the end of the iteration, we convert the 'duplicates' set to an array and return it.
This method efficiently captures all duplicates while ensuring that each duplicate is only recorded once.




───────────────────────────────────────────────────────────
    LOGIC BEHIND THE CODE in detailed way
───────────────────────────────────────────────────────────

The logic behind using two sets to find duplicates in an array is based on the properties of sets, which do not allow duplicate values.
When we encounter an element in the array, we first check if it exists in the 'seen' set.
If it does, this indicates that we have encountered this element before, and thus it is a duplicate.
We then add this element to the 'duplicates' set, which automatically handles any further duplicates of the same element by only storing unique values.
If the element is not found in the 'seen' set, we add it there to mark it as encountered.
This way, we maintain a record of all unique elements we have seen so far.
At the end of the process, we convert the 'duplicates' set to an array to return the list of duplicate elements.
This approach is efficient, with a time complexity of O(n) due to the single pass through the array and O(1) average time complexity for set operations.



`
//Revision
function findDuplicates(arr){
    let seen = new Set();
    let dubplicates = new Set();

    for(let num of arr){
        if(seen.has(num)){
            dubplicates.add(num);
        }else{
            seen.add(num);
        }
    }

    return [...dubplicates];
}

console.log(findDuplicates(array));