#!/usr/bin/env node

function expect(val) {
	return {
		toBe: function(outputs) {
			if (val === outputs) {
				return true;
			} else {
				throw new Error('Not Equal')
			}
		},
		notToBe: function(outputs) {
			if (val !== outputs){
				return true;
			} else {
				throw new Error('Equal')
			}
		}
	}
}
console.log(expect(5).toBe(5));
console.log(expect(8).notToBe(20))
