// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// solution 2
function vowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

// solution 1
// function vowels(str) {
//   let count = 0;
//   const checker = ["a", "e", "i", "o", "u"];

//   for (let char of str.toLowerCase()) {
//     if (checker.includes(char)) {
//       count++;
//     }
//   }

//   return count;
// }

// my solution
// function vowels(str) {
//     let cnt = 0;
//     vowels = ['a', 'e', 'i', 'o', 'u'];

//     str.split('').forEach(elem => {
//         if(vowels.indexOf(elem.toLowerCase()) > -1) cnt++;
//     });

//     return cnt;
// }

module.exports = vowels;
