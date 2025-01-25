#!/usr/bin/env node
let arr = ['juice', 7, {name: 'Peter', age: 24}, true];

arr.push('Lagos');
//console.log(arr)
let arrs = arr.splice(3, 1, "great")
console.log(arr)
console.log(arrs)

