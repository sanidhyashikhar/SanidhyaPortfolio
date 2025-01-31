// src/App.jsx
import Header from "./src/components/Header";
import Home from "./src/components/Home";
import About from "./src/components/About";
import Projects from "./src/components/Projects";
import Contact from "./src/components/Contact";
import Footer from "./src/components/Footer"; // Import Footer
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer /> {/* Add Footer at the bottom */}
    </div>
  );
}

export default App;
