// // Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
// function even_or_odd(number) {
//     return number % 2 === 0 ? "Even" : "Odd";
// };

// console.log(even_or_odd(2));
// // "Even"

// console.log(even_or_odd(7));
// // "Odd"

// console.log(even_or_odd(-42));
// // "Even"

// console.log(even_or_odd(-7));
// // "Odd"

// console.log(even_or_odd(0));
// // "Even"

// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

// function positiveSum(arr) {
//     let total = 0;
//     for (i = 0; i < arr.length; i++) {    // setup loop to go through array of given length
//       if (arr[i] > 0) {                   // if arr[i] is greater than zero
//         total += arr[i];                  // add arr[i] to total
//       }
//     }
//     return total;                         // return total
// }

// function positiveSum(arr) {
//     return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
// }

// function positiveSum (arr) {
//     return arr.filter(x => x>=0).reduce((a, c) => a + c, 0);
// }

// console.log(positiveSum([1,2,3,4,5]));
// // 15

// console.log(positiveSum([1,-2,3,4,5]));
// // 13
// console.log(positiveSum([]));
// // 0

// console.log(positiveSum([-1,-2,-3,-4,-5]));
// // 0)

// console.log(positiveSum([-1,2,3,4,-5]));
// // 9