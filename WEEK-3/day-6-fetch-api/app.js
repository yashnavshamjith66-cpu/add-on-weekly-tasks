console.log("=== Day 6: Fetch API (All Tasks Combined) ===");

// TASK 1 + TASK 2 + TASK 3 combined
async function fetchApiData() {
  try {
    // Task 1: Fetch data
    const response = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=10&longitude=76&current_weather=true"
    );

    // Task 2: Convert response to JSON
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();

    // Task 3: Display required values
    console.log("Location: Kerala");
    console.log("Temperature:", data.current_weather.temperature, "°C");
    console.log("Wind Speed:", data.current_weather.windspeed, "km/h");

  } catch (error) {
    console.log("Error:", error.message);
  }
}

// Function call
fetchApiData();
