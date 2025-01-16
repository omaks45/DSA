#!/usr/bin/env node
/**
 * @return {Function}
 *
 */

function createHelloWorld(){
	return function(...args) {
		return "Hellow World"
	}
}
const f = createHelloWorld()
console.log(f())
