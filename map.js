#!/usr/bin/env node
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

function arrayMapping(arr, fn) {
    let results = []
    for (let i = 0; i < arr.length; i++) {
        results.push(fn(arr[i], i))
    }
    return results
}
const inputs = [8, 9, 4, 7 ,3]
const mapFunction = (elem, index) => elem * elem + index
const outputs = arrayMapping(inputs, mapFunction)
console.log(outputs)