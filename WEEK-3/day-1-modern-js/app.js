// Task 1: Arrow Function
const sum = (a, b) => a + b;
console.log("Sum of 5 + 10:", sum(5, 10));

// Task 2: Template Literals
const name = "Yashna";
const course = "Advanced JavaScript";
console.log(`Hello ${name}, welcome to ${course}!`);

// Task 3: Ternary Operator
const age = 18;
const status = age >= 18 ? "Adult" : "Minor";
console.log("Age status:", status);

// Task 4: Destructuring
const student = { id: 1, name: "Yashna", dept: "CSE" };
const { id, name: studentName, dept } = student;
console.log(`ID: ${id}, Name: ${studentName}, Dept: ${dept}`);

const arr = [10, 20, 30];
const [first, second, third] = arr;
console.log("Array values:", first, second, third);
