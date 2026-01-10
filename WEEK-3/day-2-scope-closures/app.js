console.log("=== Hoisting Examples ===");

// 1️⃣ var hoisting
console.log("var hoisting:", a);
var a = 10;

// 2️⃣ let hoisting (handled safely)
try {
  console.log(b);
} catch (error) {
  console.log("let hoisting error:", error.message);
}
let b = 20;

// 3️⃣ const hoisting (handled safely)
try {
  console.log(c);
} catch (error) {
  console.log("const hoisting error:", error.message);
}
const c = 30;

// 4️⃣ Function declaration hoisting
sayHello();
function sayHello() {
  console.log("Hello from function declaration");
}

// 5️⃣ Function expression hoisting
try {
  sayHi();
} catch (error) {
  console.log("Function expression error:", error.message);
}
var sayHi = function () {
  console.log("Hi");
};

console.log("\n=== Scope Examples ===");

// Global scope
var globalVar = "I am global";
console.log(globalVar);

// Function scope
function testScope() {
  let localVar = "I am local";
  console.log(localVar);
}
testScope();

// Block scope
if (true) {
  const blockVar = "I am block scoped";
  console.log(blockVar);
}

console.log("\n=== Closure Example ===");

function counter() {
  let count = 0;
  return function () {
    count++;
    console.log("Counter:", count);
  };
}

const increment = counter();
increment();
increment();
increment();

