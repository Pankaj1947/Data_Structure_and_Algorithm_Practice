
function infixPostfix(expression) {
    const precedence = {
        '+': 1,
        '-': 1,
        '*': 2,
        '/': 2,
        '^': 3
    };
    const stack = [];
    let postfix = '';
    for (let char of expression) {
        if (/[a-zA-Z0-9]/.test(char)) {
            postfix += char;
        } else if (char === '(') {
            stack.push(char);
        } else if (char === ')') {
            while (stack.length && stack[stack.length - 1] !== '(') {
                postfix += stack.pop();
            }
            stack.pop(); // Remove '(' from stack
        } else {
            while (stack.length && precedence[char] <= precedence[stack[stack.length - 1]]) {
                postfix += stack.pop();
            }
            stack.push(char);
        }
    }
    while (stack.length) {
        postfix += stack.pop();
    }
    return postfix;
}

let infixExpression = "a+b-c+d*(e-f)/g+(h*(i/j))";
console.log(infixPostfix(infixExpression));





const explantion = `
──────────────────────────────────────────
           CODE EXPLANATION
──────────────────────────────────────────

This function converts an infix expression to a postfix expression using the Shunting Yard algorithm.

At a high level:
* It uses a stack to hold operators and parentheses.
* It iterates through each character in the infix expression.
* Operands (letters/numbers) are added directly to the postfix output.
* Operators are pushed onto the stack, ensuring that operators with higher or equal precedence are popped to the output first.
* Parentheses are handled by pushing '(' onto the stack and popping until '(' is found when ')' is encountered.
* Finally, any remaining operators in the stack are popped to the output.



──────────────────────────────────────────
     CODE EXPLANATION in Interview Style
──────────────────────────────────────────

This function implements the Shunting Yard algorithm to convert an infix expression to postfix notation.
As we iterate through each character in the expression, we check if it is an operand, operator, or parenthesis.
Operands are added directly to the postfix output.
For operators, we compare their precedence with the operator at the top of the stack and pop operators from the stack to
 the output if they have higher or equal precedence.
When we encounter a '(', we push it onto the stack, and when we encounter a ')', we pop from the stack to the output until we find the matching '('.
At the end of the iteration, we pop any remaining operators from the stack to complete the postfix expression.


───────────────────────────────────────────────────────────
    LOGIC BEHIND THE CODE in detailed way
───────────────────────────────────────────────────────────
The logic behind the Shunting Yard algorithm involves using a stack to manage operators and parentheses while constructing the postfix expression.
1. **Operands**: When we encounter an operand (a letter or number), we append it directly to the postfix output since operands appear in the same order in both infix and postfix notations.
2. **Operators**: For operators, we need to consider their precedence. We maintain a precedence mapping for operators. When we encounter an
 operator, we compare its precedence with the operator at the top of the stack:
    - If the stack is not empty and the operator at the top of the stack has higher or equal precedence,
     we pop operators from the stack to the postfix output until this condition is false.
    - We then push the current operator onto the stack.
3. **Parentheses**: When we encounter a '(', we push it onto the stack to denote the start of a sub-expression.
 When we encounter a ')', we pop operators from the stack to the postfix output until we find the matching '('.
4. **End of Expression**: After processing all characters in the infix expression, any remaining operators in the
 stack are popped to the postfix output to complete the conversion.
This method ensures that the resulting postfix expression maintains the correct order of operations as defined by
 the original infix expression.


───────────────────────────────────────────────────────────
    MATHEMATICAL LOGIC BEHIND THE CODE
───────────────────────────────────────────────────────────

The mathematical logic behind converting infix expressions to postfix expressions lies in the order of operations and
 the need to eliminate ambiguity in expression evaluation.
In infix notation, operators are placed between operands, which can lead to confusion about the order in which
 operations should be performed, especially when parentheses are involved.
Postfix notation, on the other hand, places operators after their operands, which allows for unambiguous evaluation without the need for parentheses.
The Shunting Yard algorithm systematically processes the infix expression to ensure that the resulting postfix
 expression respects the precedence and associativity of operators.
By using a stack to temporarily hold operators and parentheses, the algorithm can effectively manage the order of operations.
This ensures that when the postfix expression is evaluated, it produces the same result as the original infix
 expression would, adhering to mathematical conventions.



`
