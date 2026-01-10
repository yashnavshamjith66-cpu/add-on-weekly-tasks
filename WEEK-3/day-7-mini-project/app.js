console.log("=== Day 7: Final Mini Project ===");

// User data
const users = [
  { id: 1, name: "Yashna", age: 19, active: true },
  { id: 2, name: "Akhil", age: 22, active: false },
  { id: 3, name: "Meera", age: 20, active: true }
];

// Task 1: Display all users
console.log("\nAll Users:");
users.map(user => console.log(user));

// Task 2: Filter active users
const activeUsers = users.filter(user => user.active);
console.log("\nActive Users:");
activeUsers.map(user => console.log(user.name));

// Task 3: Calculate average age using reduce
const averageAge =
  users.reduce((sum, user) => sum + user.age, 0) / users.length;

console.log("\nAverage Age:", averageAge);

// Task 4: Simulate async operation using Promise
function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(users);
    }, 1500);
  });
}

// Task 5: Consume Promise using async/await
async function displayUsers() {
  try {
    const data = await fetchUserData();
    console.log("\nFetched Users (Async):");
    data.forEach(user => console.log(user.name));
  } catch (error) {
    console.log("Error fetching users");
  }
}

displayUsers();
