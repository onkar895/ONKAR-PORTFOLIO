/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import { BarLoader, BeatLoader } from "react-spinners";
import Home from "./Pages/Home";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import WorkPage from "./Pages/WorkPage";
import NavBar from "./Components/NavBar";
import ParticleBackground from './Components/ParticleBackground';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={loading ? "setBackground w-full h-screen flex items-center justify-center" : "setBackground w-full flex items-center justify-center"}>
      <ParticleBackground />
      {loading ? (
        <BeatLoader className="text-gradient" size={50} color={"#D76571"} />
      ) : (
        <Router>
          <Header />
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<AboutPage />} />
            <Route exact path="/work" element={<WorkPage />} />
            <Route exact path="/contact" element={<ContactPage />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
