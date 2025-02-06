#!/usr/bin/env node
/**
 * @param {Function} fn
 * @return {Object}
 */
//The groupBy function is added to the Array prototype.
Array.prototype.groupBy = function(fn) {
    //The reduce method is called on the array.
    return this.reduce((acc, val) => {
        //The key is the result of the function call on the value.
        const key = fn(val)
        //If the key does not exist in the accumulator, create it and assign an empty array to it.
        if (!acc[key]) {
            acc[key] = []
        }
        //Push the value to the key in the accumulator.
        acc[key].push(val)
        return acc
        //The initial value of the accumulator is an empty object.
    }, {})
}
//Group the array by whether the value is even or odd.
console.log([1, 2, 3, 4, 5].groupBy((val) => val % 2 === 0 ? 'even' : 'odd'))
//Group the array by the length of the string.
console.log(['apple', 'orange', 'banana', 'pear'].groupBy((val) => val.length))