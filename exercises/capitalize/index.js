// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'





// my solution 
function capitalize(str) {
}

































// solution 2
// function capitalize(str) {
// 	let result = str[0].toUpperCase();

// 	for (let i = 0; i < str.length; i++) {
// 		if (str[i-1] === ' ') {
// 			result += str[i].toUpperCase();
// 		} eles {
// 			result += str[i];
// 		}
// 	}

// 	return result;
// }



// solution 1
// function capitalize(str) {
// 	const words = [];

// 	for (let word of str.split(' ')) {
// 		words.push(word[0].toUpperCase() + word.slice(1));
// 	}

// 	return words.join(' ');
// }



// my solution
// function capitalize(str) {
// 	let arr = [];
// 	let space = false;

// 	str.split('').forEach((elem,i) => {
// 		if(space) {
// 			arr.push(elem.toUpperCase());
// 			space = false;
// 		} else {
// 			arr.push(elem);
// 		}

// 		if(elem === ' ') space = true;
// 	});

// 	arr[0] = arr[0].toUpperCase();

// 	return arr.join('');
// }

module.exports = capitalize;
