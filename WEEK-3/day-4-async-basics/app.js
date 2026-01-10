console.log("=== Day 4: Asynchronous JavaScript ===");

// 1️⃣ setTimeout example
console.log("Start");

setTimeout(() => {
  console.log("This message is delayed by 2 seconds");
}, 2000);

console.log("End");

// 2️⃣ Callback example
function fetchData(callback) {
  setTimeout(() => {
    callback("Data received successfully");
  }, 1500);
}

fetchData((message) => {
  console.log("Callback Output:", message);
});
