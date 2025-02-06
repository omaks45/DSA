#!/usr/bin/env node
/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
function chunkArray(arr, size) {
    let chunkedArray = []
    for (let i = 0; i < arr.length; i += size) {
        chunkedArray.push(arr.slice(i, i + size))
    }
    return chunkedArray
}
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 3))
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 'egg', 'apple'], 4))