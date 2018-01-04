// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


// solution 1
function anagrams(stringA, stringB) {
    const aCharMap = buildCharMap(stringA);
    const bCharMap = buildCharMap(stringB);

    console.log('aCharMap : ', aCharMap);
    console.log('bCharMap : ', bCharMap);

    if(Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
        return false;
    }

    for (let char in aCharMap) {
        if (aCharMap[char] !== bCharMap[char]) {
            return false;
        }
    }

    return true;
}

function buildCharMap(str) {
    const charMap = {};

    for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
        charMap[char] = charMap[char] + 1 || 1;
    }

    return charMap;
}





// My solution
// function anagrams(stringA, stringB) {
//     const store = [];
//
//     let rtnVal = true;
//
//     stringA.split('').forEach(elem => {
//         if(elem != ' ') {
//             if(store[elem]) {
//                 store[elem]++;
//             } else {
//                 store[elem] = 1;
//             }
//         }
//     });
//
//     stringB.split('').forEach(elem => {
//         if(elem != ' ') {
//             console.log('store[elem] : ', store[elem]);
//             if(!store[elem]) {
//                 rtnVal = false;
//             }
//
//             if(store[elem] > 0) {
//                 store[elem]--;
//             } else {
//                 rtnVal = false;
//             }
//         }
//     });
//
//     stringA.split('').forEach(elem => {
//         if(store[elem]) {
//             rtnVal = false;
//         }
//     });
//
//     return rtnVal;
// }

module.exports = anagrams;
