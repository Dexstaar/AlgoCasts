// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  // console.log("array :", array);

  let rtnArr = [];
  let cnt = 0;
  let tempArr = [];

  array.forEach((elem) => {

    tempArr.push(elem);
    cnt++;

    if(cnt === size) {
      rtnArr.push(tempArr);
      cnt = 0;
      tempArr = [];

    }
    



    // if (cnt < size) {
    //   tempArr.push(elem);
    //   cnt++;

    //   if(i === array.length-1) rtnArr.push(tempArr);

    // } else {
    //   // console.log("tempArr :", tempArr);
    //   // console.log("elem :", elem);
    //   rtnArr.push(tempArr);
    //   cnt = 0;
    //   tempArr = [];
    //   tempArr.push(elem);
    // }


  });

  return rtnArr;
}

module.exports = chunk;
