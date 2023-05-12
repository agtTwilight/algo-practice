/**
 * Fibonacci sequence
 * "given a number `n`, find the first n elements of the fibonacci sequence."
 * 
 * A Fibonacci sequence is a sequence in which each number is the sum of the two preceding ones.
 * 
 */

const fibonacci = (n) => {
    arr = [];

    for (let i = 0; i < n; i ++) {
        if (!arr.length) {
            arr.push(0);
        } else if (arr.length === 1) {
            arr.push(1);
        } else {
            arr.push(arr[i-1] + arr[i-2]);
        }
    }

    return arr;
}

console.log(fibonacci(7));