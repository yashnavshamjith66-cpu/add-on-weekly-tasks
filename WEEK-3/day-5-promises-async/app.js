console.log("=== Day 5: Promises & async/await ===");

// 1️⃣ Creating a Promise
const myPromise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("Promise resolved successfully");
  } else {
    reject("Promise rejected");
  }
});

// 2️⃣ Consuming Promise using then & catch
myPromise
  .then((message) => {
    console.log("Then:", message);
  })
  .catch((error) => {
    console.log("Catch:", error);
  });

// 3️⃣ Consuming Promise using async/await
async function handlePromise() {
  try {
    const result = await myPromise;
    console.log("Async/Await:", result);
  } catch (error) {
    console.log("Error:", error);
  }
}

handlePromise();
