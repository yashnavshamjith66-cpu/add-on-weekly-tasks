import Header from "./Components/Header";
import StudentCard from "./Components/StudentCard";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Header />

      <StudentCard name="Anu" course="React" age={21} />
      <StudentCard name="Rahul" course="Frontend" age={22} />

      <Footer />
    </div>
  );
}

export default App;
