import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/component/Navbar";
import HomePage from "./pages/home-page/HomePage";
import Footer from "./components/sections/footer/Footer";
import ReadmeViewer from "./components/modal/ReadmeViewer";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="min-h-screen dark: bg-[#0a0f1c] text-white">
          <Navbar />
          <div className="h-16" />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/asif"
              element={
                <ReadmeViewer
                  owner="MohammadAsif34"
                  repo="Portfolio"
                  branch="main"
                />
              }
            />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
