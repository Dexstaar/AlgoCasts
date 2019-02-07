// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false




// my Solution 2
function palindrome(str) {
    return str.split('').every((elem, i) => {
        return elem === str[str.length-i-1];
    });
}












// Solution 2
// function palindrome(str) {
//     return str.split('').every((char, i) => {
//         return char === str[str.length - i - 1];
//     });
// }




// Solution 1
// function palindrome(str) {
//     const reversed = str.split('').reverse().join('');
//
//     return str === reversed;
// }



// My solution
// function palindrome(str) {
//     const arr = str.split('');
//     const stack = [];
//     let truningPoint = 0;
//
//     (arr.length % 2 === 0) ? truningPoint = arr.length/2 : truningPoint = arr.length/2-1;
//
//     for(let i=0; i<arr.length; i++) {
//         if(i<truningPoint) {
//             stack.push(arr[i]);
//         } else {
//             if (stack[stack.length-1] === arr[i]) stack.pop();
//         }
//     }
//
//     if(stack.length === 0) return true;
//
//     return false;
// }

module.exports = palindrome;
