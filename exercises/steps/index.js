// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'




function steps(n, row = 0, stair = '') {
    if (n === row) return;

    if (n === stair.length) {
        console.log(stair);
        return steps(n, row+1);
    }

    const add = (stair.length <= row) ? '#' : ' ';

    steps(n, row, stair+add);
}





// solution 2
// function steps(n, row = 0, stair = '') {
//     if (n === row) {
//         return;
//     }
//
//     if (n === stair.length) {
//         console.log(stair);
//         return steps(n, row + 1);
//     }
//
//     const add = stair.length <= row ? '#' : ' ';
//
//     // if (stair.length <= row) {
//     //     stair += '#';
//     // } else {
//     //     stair += ' ';
//     // }
//
//     steps(n, row, stair + add);
// }




// solution 1
// function steps(n) {
//     for (let row = 0; row < n; row++) {
//         let stair = '';
//
//         for (let column = 0; column < n; column++) {
//             if (column <= row) {
//                 stair += '#';
//             } else {
//                 stair += ' ';
//             }
//         }
//
//         console.log(stair);
//     }
// }



// my solution
// function steps(n) {
//     let cnt = 0;
//     let str = '';
//
//     for(let i=0; i<n; i++){
//         for(let j=0; j<n; j++) {
//             if(j<=cnt) {
//                 str += '#';
//             } else {
//                 str += ' ';
//             }
//         }
//
//         console.log(str);
//         cnt++;
//         str = '';
//     }
// }

module.exports = steps;
