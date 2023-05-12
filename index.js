/**
 * Fibonacci sequence
 * "given a number `n`, find the first n elements of the fibonacci sequence."
 * 
 * A Fibonacci sequence is a sequence in which each number is the sum of the two preceding ones.
 * 
 */

const fibonacci = (n) => {
    fib = [0,1];

    for (let i = 2; i < n; i ++) {
        fib.push(fib[i-1] + fib[i-2]);
    }

    return fib;
}

// Test cases
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(7));

// Big O = linear time complexity