#!/usr/bin/env node
/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */

//The sortBy function takes an array and a function as arguments.
function sortBy(arr, fn) {
    //The array is sorted by the result of the function call on each element.
    return arr.sort((a, b) => fn(a) - fn(b))
}
console.log(sortBy([[3, 4], [5, 2], [10, 1]], fn = (x) => x[1]))
console.log(sortBy([5, 4, 1, 2, 3], fn = (x) => x))
