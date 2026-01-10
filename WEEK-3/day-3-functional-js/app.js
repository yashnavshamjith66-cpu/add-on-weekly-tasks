console.log("=== Day 3: Functional JavaScript ===");

// Sample data
const numbers = [1, 2, 3, 4, 5];

// 1️⃣ map() – square each number
const squares = numbers.map(num => num * num);
console.log("Squares:", squares);

// 2️⃣ filter() – get even numbers
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even Numbers:", evenNumbers);

// 3️⃣ reduce() – sum of numbers
const total = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Sum:", total);

// 4️⃣ Pure function example
const multiply = (a, b) => a * b;
console.log("Multiply 4 and 5:", multiply(4, 5));
