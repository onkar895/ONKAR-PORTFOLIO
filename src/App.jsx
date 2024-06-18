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
import Video from './assets/VideoP.mp4'

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app-container">
      <div className={loading ? "loader-container" : "main-content"}>
        {loading ? (
          <BeatLoader className="text-gradient" size={50} color={"#F978B4"} />
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
      <video autoPlay muted loop id="background-video">
        <source src={Video} type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
