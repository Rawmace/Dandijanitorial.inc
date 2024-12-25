import React from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import About from "./components/AboutUs";
import Services from "./components/Services";
import Contact from "./components/Contact";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <div className="App">
      <HomePage />

      <main>
        <Services />
        <AboutUs />

        <Contact />
      </main>

      <footer>
        <p>&copy; 2024 D and I Janitorial and Carpet Cleaning</p>
      </footer>
    </div>
  );
}

export default App;
