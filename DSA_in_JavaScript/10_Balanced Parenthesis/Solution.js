
function balancedParenthesis(str) {
    const stack = [];
    const pairs = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of str) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else if (char === ')' || char === '}' || char === ']') {
            if (stack.pop() !== pairs[char]) {
                return false;
            }
        }
    }

    return stack.length === 0;

}

let expression = "{[()]}";
console.log(balancedParenthesis(expression));



const explantion = `
──────────────────────────────────────────
           CODE EXPLANATION
──────────────────────────────────────────

This function checks if a string of parentheses is balanced using a stack data structure.
It iterates through each character in the string, pushing opening parentheses onto the stack.
When a closing parenthesis is encountered, it checks if it matches the most recent opening parenthesis by popping from the stack.
If there is a mismatch or if the stack is empty when a closing parenthesis is found, the function returns false.
At the end of the iteration, if the stack is empty, it means all parentheses were balanced, and the function returns true.
This approach ensures that every opening parenthesis has a corresponding closing parenthesis in the correct order.




──────────────────────────────────────────
     CODE EXPLANATION in Interview Style
──────────────────────────────────────────

This function determines if a string of parentheses is balanced by utilizing a stack.
As we iterate through each character in the string, we push opening parentheses onto the stack.
When we encounter a closing parenthesis, we check if it matches the most recent opening parenthesis by popping from the stack.
If there is a mismatch or if the stack is empty when a closing parenthesis is found, we return false immediately.
Finally, after processing all characters, if the stack is empty, it indicates that all parentheses were balanced, and we return true.



───────────────────────────────────────────────────────────
    LOGIC BEHIND THE CODE EXPLANATION in detailed way
───────────────────────────────────────────────────────────
The logic behind using a stack to check for balanced parentheses is based on the Last In, First Out (LIFO) principle of stacks.
When we encounter an opening parenthesis (i.e., '(', '{', '['), we push it onto the stack.
This action records that we are expecting a corresponding closing parenthesis in the future.
When we encounter a closing parenthesis (i.e., ')', '}', ']'), we need to ensure that it matches the most recent opening parenthesis.
To do this, we pop the top element from the stack and check if it corresponds to the type of closing parenthesis we have encountered.
If it does not match, or if the stack is empty (indicating there was no corresponding opening parenthesis), we can immediately 
 conclude that the parentheses are not balanced and return false.
If we successfully process all characters in the string and the stack is empty at the end, it means that every opening 
 parenthesis had a matching closing parenthesis in the correct order.
This method efficiently checks for balanced parentheses in a single pass through the string, resulting in a time 
 complexity of O(n), where n is the length of the string.
The space complexity is also O(n) in the worst case, where all characters are opening parentheses and are stored in the stack.
This method is efficient and effective for validating balanced parentheses in expressions.



`

//Revision

function balanced(str) {
    let stack = [];
    let pairs = {
        ")": "(",
        "}": "{",
        "]": "[",
    }
    for (let char of str) {
        if (str[char] == "(" || str[char] == "{" || str[char] == "[") {
            stack.push(str[char]);
        } else if (str[char] == ")" || str[char] == "}" || str[char] == "]") {
            if (stack.pop() !== pairs[char]) {
                return false;
            }
        }

    }

    return stack.length == 0;
}


console.log(balanced(expression));

