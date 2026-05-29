function Profile(props) {
  return (
    <div style={{ border: "1px solid black", padding: "10px" }}>
      <h2>Profile Component</h2>

      
      <p>2 + 2 = {2 + 2}</p>

      
      <p>Name: {props.name}</p>
    </div>
  )
}

export default Profile
