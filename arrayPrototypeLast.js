#!/usr/bin/env node
/**
 *  @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function() {
    //If there are no elements in the array, it should return -1.
    if (this.length === 0) {
        return -1
    }
    return this[this.length - 1]
}
console.log([1, 2, 3, 4, 5].last())
console.log([].last())