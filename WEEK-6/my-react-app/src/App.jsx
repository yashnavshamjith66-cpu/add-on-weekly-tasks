import { useState } from "react";

function App() {
  // ===== Task 1: Controlled Input =====
  const [name, setName] = useState("");

  // ===== Task 2: Multi-Field Form =====
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  // Handle input change for multi-field form
  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  // Handle form submit
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      
      {/* Task 1: Controlled Input */}
      <div style={{ marginBottom: "30px" }}>
        <h2>Controlled Input</h2>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: "5px", marginRight: "10px" }}
        />
        <p>Hello, {name}</p>
      </div>

      <hr />

      {/* Task 2: Multi-Field Form */}
      <div>
        <h2>Multi-Field Form</h2>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", maxWidth: "300px" }}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            style={{ marginBottom: "10px", padding: "5px" }}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            style={{ marginBottom: "10px", padding: "5px" }}
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            style={{ marginBottom: "10px", padding: "5px" }}
          />
          <button type="submit" style={{ padding: "5px" }}>Submit</button>
        </form>
      </div>

    </div>
  );
}

export default App;
