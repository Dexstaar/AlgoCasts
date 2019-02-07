// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9



//My Solution 2
function reverseInt(n) {
    const reversed = n.toString().split('').reverse().join('');

    return parseInt(reversed) * Math.sign(n);
}































//Solution 1
// function reverseInt(n) {
//     const reversed = n.toString().split('').reverse().join('');

//     return parseInt(reversed) * Math.sign(n);
// }

//My solution
// function reverseInt(n) {
//     let arr = n.toString().split('');
//     let reversed = '';
//
//     arr.forEach(elem => {
//         if(elem !== '-') reversed = elem + reversed;
//     });
//
//     if(arr[0] === '-') reversed = '-' + reversed;
//
//     return parseInt(reversed);
// }

module.exports = reverseInt;
