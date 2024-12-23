import React from "react";
import "./App.css";

import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="App">
      <HomePage />

      <main>
        <Home />
        <About />
        <Services />
        <Contact />
      </main>

      <footer>
        <p>&copy; 2024 D and I Janitorial and Carpet Cleaning</p>
      </footer>
    </div>
  );
}

export default App;
