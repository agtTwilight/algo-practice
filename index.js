/**
 * Fibonacci sequence
 * "given a number `n`, find the first n elements of the fibonacci sequence."
 * 
 * A Fibonacci sequence is a sequence in which each number is the sum of the two preceding ones.
 * 
 */

// const fibonacci = (n) => {
//     fib = [0,1];

//     for (let i = 2; i < n; i ++) {
//         fib.push(fib[i-1] + fib[i-2]);
//     }

//     return fib;
// };

// // Test cases
// console.log(fibonacci(2));
// console.log(fibonacci(3));
// console.log(fibonacci(7));

// // Big O = linear time complexity

/**
 * Factorial of a number
 * "Given and integer `n` find the factorial of that integer"
 * 
 * The factorial of a non-negative integer `n`, denoted by `!n` is the product of all positive integers less than or equel to `n`.
 * 
 * Factorial of 0 = 1
 */

// const factorial = (n) => {
//     if(n === 0) {
//         return 1;
//     }

//     let i = n-1;
//     let ans = n;

//     while (i > 0) {
//         ans = ans*i;
//         --i;
//     }

//     return ans;
// };

// // test cases:
// console.log(factorial(0)); // 1
// console.log(factorial(4)); // 24
// console.log(factorial(5)); // 120

// // Big O = linear

/**
 * Prime Number
 * "Given a natural number `n` determine if the number is prime or not"
 * 
 * A prime number is a natural number great4er than 1 that is not a product of two smaller natural numbers
 */

const isPrime = (n) => {
    for (let i = 2; i < n; i++) {
        if(n%i === 0) {
            return false;
        };
    };

    return true;
};

// test cases
console.log(isPrime(5));
console.log(isPrime(4));

// Big O = linear