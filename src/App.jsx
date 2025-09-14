import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./pages/home-1/Footer";
import Home from "./pages/Home";
import About from "./pages/home-1/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import ProblemSolving from "./pages/ProblemSolving";
import Education from "./pages/Education";
import Achievements from "./pages/Achievement";
import Contact from "./pages/Contact";
import Home1 from "./pages/home-1/Home1";
// import HomePage from "./pages2/Home-page/HomePage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="min-h-screen bg-[#0a0f1c] text-white scroll-smooth">
          <Navbar />
          {/* spacer for fixed navbar */}
          <div className="h-16" />
          <Routes>
            <Route path="/" element={<Home1 />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/problemsolving" element={<ProblemSolving />} />
            <Route path="/education" element={<Education />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          {/* <Footer /> */}
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
