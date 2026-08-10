
function minStack() {
    this.stack = [];
    this.minStack = [];
    this.push = function (value) {
        this.stack.push(value);
        if (this.minStack.length === 0 || value <= this.getMin()) {
            this.minStack.push(value);
        }
    };
    this.pop = function () {
        if (this.stack.length === 0) return null;
        const value = this.stack.pop();
        if (value === this.getMin()) {
            this.minStack.pop();
        }
        return value;
    };
    this.top = function () {
        if (this.stack.length === 0) return null;
        return this.stack[this.stack.length - 1];
    };
    this.getMin = function () {
        if (this.minStack.length === 0) return null;
        return this.minStack[this.minStack.length - 1];
    };

    this.isEmpty = function () {
        return this.stack.length === 0;
    }
    this.size = function () {
        return this.stack.length;
    }

    this.print = function () {
        console.log("Stack: ", this.stack);
        console.log("Min Stack: ", this.minStack);
    }

}

// Example usage:
const stack = new minStack();
stack.push(5);
stack.push(3);
stack.push(7);
console.log("Current Min: ", stack.getMin());
stack.pop();
console.log("Top Element: ", stack.top());
console.log("Current Min: ", stack.getMin());
stack.print();




const explantion = `
──────────────────────────────────────────
           CODE EXPLANATION
──────────────────────────────────────────



──────────────────────────────────────────
     CODE EXPLANATION in Interview Style
──────────────────────────────────────────



───────────────────────────────────────────────────────────
    LOGIC BEHIND THE CODE in detailed way
───────────────────────────────────────────────────────────



`
