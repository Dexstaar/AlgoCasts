// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3




// solution 2 : recursive
function fib(n) {
    if (n<2) return n;

    return fib(n-1) + fib(n-2);
}




// solution 1 : iterative
// function fib(n) {
//     const result = [0, 1];

//     for (let i=2; i<=n; i++) {
//         const a = result[i-1];
//         const b = result[i-2];

//         result.push(a+b);
//     }

//     return result[n];
// }



// my iterative solution
// function fib(n) {
//     let fib = [];

//     if(n<2) return n;

//     fib.push(0);
//     fib.push(1);
//     let val = 0;

//     for(let i=2; i<=n; i++) {
//         val = fib[i-2] + fib[i-1];

//         if(i===n) return val;
//         fib.push(val);
//     }
// }





//my resursive solution
// function fib(n) {
//     if(n<2) return n;

//     return fib(n-2) + fib(n-1);
// }






module.exports = fib;
