import { useState } from "react"
import "./App.css"
import Card from "./Card"


/* Header Component */
function App() {
  return (
    <div>
      <h1>Profile Cards</h1>

      <Card name="Anu" role="Developer" />
      <Card name="Rahul" role="Designer" />
      <Card name="Yashna" role="Frontend Developer" />
    </div>
  )
}

export default App
