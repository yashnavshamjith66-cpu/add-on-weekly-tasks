# Day 2 – Scope & Closures

This task demonstrates how JavaScript handles execution context, scope, and closures.

## Concepts Covered
- Hoisting using var, let, and const
- Global, function, and block scope
- Closures using a counter example

## Explanation
- Variables declared with var are hoisted and initialized as undefined
- let and const are hoisted but stay in the Temporal Dead Zone
- Closures allow inner functions to access outer function variables even after execution

## Sample Output
var hoisting: undefined
let hoisting error: Cannot access 'b' before initialization
const hoisting error: Cannot access 'c' before initialization
Counter: 1
Counter: 2
Counter: 3
