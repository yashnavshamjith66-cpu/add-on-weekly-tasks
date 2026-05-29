function StudentCard({ name, course, age }) {
  return (
    <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
      <h3>Name: {name}</h3>
      <p>Course: {course}</p>
      <p>Age: {age}</p>

      {/* JSX expression */}
      <p>Birth Year: {2026 - age}</p>
    </div>
  );
}

export default StudentCard;
