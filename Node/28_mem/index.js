const mem = require('mem');

let i = 0;
const counter = () => ++i;
const memoized = mem(counter);

console.log(memoized('foo'));
//=> 1

// Cached as it's the same argument
console.log(memoized('foo'));
//=> 1

console.log(memoized('foo'));

// Not cached anymore as the argument changed
console.log(memoized('bar'));
//=> 2

console.log(memoized('bar'));
//=> 2

console.log(memoized('mem'));

// Only the first argument is considered by default
console.log(memoized('bar', 'foo'));
//=> 2
