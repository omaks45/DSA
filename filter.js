#!/usr/bin/env node
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let result = []
    for (let i = 0; i < arr.length; i++){
        if (fn(arr[i], i)) {
            result.push(arr[i])
        }
    }

    return result
    
};
const inputs = [8, 9, 14, 17 ,3]
const filterFunction = (elem, index) => elem % 2 === 0 && index >= 0
const outputs = filter(inputs, filterFunction)
console.log(outputs)