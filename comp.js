#!/usr/bin/env node
/**
* @param {Function[]} functions
* @return {Function}
*/


// Define the small reusable functions
const trim = (str) => str.trim();
const toLowerCase = (str) => str.toLowerCase();
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

// Pipe function: Start with the first step and go forward
const pipe = (...functions) => (value) =>
  functions.reduce((currentValue, func) => func(currentValue), value);

// Pipe the processing pipeline
const processNameWithPipe = pipe(trim, toLowerCase, capitalize);

console.log(processNameWithPipe("  OKORO OMAKA  "));
