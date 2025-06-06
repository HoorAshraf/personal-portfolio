import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Projects from "./Components/projects/Projects";
import Contact from "./Components/contact/Contact";
import ProjectDetails from "./Components/projects/ProjectDetails"; 

function App() {
  return (
<BrowserRouter basename={import.meta.env.BASE_URL}>  

      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <Projects />
              <Contact />
            </>
          }
        />
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
