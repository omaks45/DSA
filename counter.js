#!/usr/bin/env node
/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */

function createCounter(init) {
	let counter = init;
	return {
		increment: function(){
			counter += 1
			return counter;
		},
		decrement: function(){
			counter -= 1
			return counter;
		},
		reset: function(){
			counter = init
			return counter;
		}
	}
}
const count = (createCounter(5))
console.log(count.increment())
console.log(count.reset())
console.log(count.decrement())
