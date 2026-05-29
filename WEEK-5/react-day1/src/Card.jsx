function Card(props) {
  return (
    <div style={{ border: "1px solid black", padding: "10px", margin: "10px", width: "200px" }}>
      <img
        src="https://via.placeholder.com/100"
        alt="profile"
      />
      <h3>{props.name}</h3>
      <p>{props.role}</p>
    </div>
  )
}

export default Card
