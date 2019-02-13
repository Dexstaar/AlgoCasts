// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// 3가지 방법
function reverse(str) {
}






















//solution 3
// function reverse(str) {
//   return str
//     .split("")
//     .reduce((reversed, character) => character + reversed);
// }

// solution 2
// function reverse(str) {
//     let reversed = '';

//     for (const char of str) {
//         reversed = char + reversed;
//     }

//     return reversed;
// }

// solution 1
// function reverse(str) {
//     return str.split('').reverse().join('');
// }

// My solution
// function reverse(str) {
//     let reversed = '';
//     const strArr = str.split('');

//     for(const elem of strArr) {
//         reversed = elem + reversed;
//     }

//     return reversed;
// }

module.exports = reverse;
