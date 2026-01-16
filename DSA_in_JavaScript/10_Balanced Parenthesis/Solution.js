
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



──────────────────────────────────────────
     CODE EXPLANATION in Interview Style
──────────────────────────────────────────


───────────────────────────────────────────────────────────
    LOGIC BEHIND THE CODE EXPLANATION in detailed way
───────────────────────────────────────────────────────────


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

