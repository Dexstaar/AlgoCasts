// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]



// my Solution
function chunk(array, size) {
  const chunked = [];
  let index = 0;

  while(index < array.length) {
    chunked.push(array.slice(index, index+size));
    index += size;
  }

  return chunked;
}















// Solution 2
// function chunk(array, size) {
//     const chunked = [];
//     let index = 0;

//     while(index < array.length) {
//         chunked.push(array.slice(index, index + size));
//         index += size;
//     }

//     return chunked;
// }




// Solution 1
// function chunk(array, size) {
//     const chunked = [];
//
//     for (let element of array) {
//         const last = chunked[chunked.length - 1];
//
//         if(!last || last.length === size) {
//             chunked.push([element])
//         } else {
//             last.push(element);
//         }
//     }
//
//     return chunked;
// }


// My solution
// function chunk(array, size) {
//
//   let rtnArr = [];
//   let cnt = 0;
//   let overAllCnt = 0;
//   let tempArr = [];
//
//   array.forEach((elem) => {
//     tempArr.push(elem);
//     cnt++;
//     overAllCnt++;
//
//     if(cnt === size || overAllCnt === array.length) {
//       rtnArr.push(tempArr);
//       cnt = 0;
//       tempArr = [];
//     }
//
//   });
//
//   return rtnArr;
// }

module.exports = chunk;
