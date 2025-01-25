#!/usr/bin/env node
/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */

function reduce(nums, fn, init) {
    let result = init;
    for (let i = 0; i < nums.length; i++) {
        result = fn(result, nums[i])
    }
    return result
}
const inputs = [80, 59, 14, 17 , 83]
const reduceFunction = (acc, curr) => acc + curr
const outputs = reduce(inputs, reduceFunction, 0)
console.log(outputs)