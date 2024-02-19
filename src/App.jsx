/* eslint-disable no-unused-vars */
import React, { useState, useEffect, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import { BarLoader } from "react-spinners";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Work from "./Pages/Work";
import Contact from "./Pages/Contact";
import NavBar from "./Components/NavBar";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Suspense
        fallback={
          <div className="h-screen w-full flex items-center justify-center btn">
            <BarLoader className="text-gradient" height={6} />
          </div>
        }
      >
        {
          loading ? (
            <div className="bg-gray-900 w-full h-screen flex items-center justify-center">
              <BarLoader className="text-gradient" height={6} />
            </div>
          ) : (
            <div className='bg-gray-900 w-full flex items-center justify-center'>
              <Router>
                <Header />
                <NavBar />
                <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route exact path="/about" element={<About />} />
                  <Route exact path="/work" element={<Work />} />
                  <Route exact path="/contact" element={<Contact />} />
                </Routes>
              </Router>
            </div>
          )
        }
      </Suspense>
    </>
  );
}

export default App;