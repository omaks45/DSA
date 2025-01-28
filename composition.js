#!/usr/bin/env node
/**
 * @param {Function[]} functions
 * @return {Function}
 */

function compose(functions) {
	return function(x) {
		return functions.reduceRight((acc, fn) => fn(acc), x)
	}
}

const fn = compose([x => x + 1, x => 2 * x])
console.log(fn(7))
