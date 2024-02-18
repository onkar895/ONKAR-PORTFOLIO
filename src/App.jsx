/* eslint-disable no-unused-vars */
import React, { useState, useEffect, Suspense } from "react";
import Header from './Components/Header';
import Banner from './Components/Banner';
import NavBar from './Components/NavBar';
import About from './Components/About';
import Education from './Components/Education';
import Services from './Components/Services';
import Work from './Components/Work';
import Contact from './Components/Contact';
import { BarLoader } from "react-spinners";

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
            <div className="bg-no-repeat bg-cover overflow-hidden bg-gray-900 h-screen w-full flex items-center justify-center">
              <BarLoader className="text-gradient" height={6} />
            </div>
          ) : (
            <div className='bg-no-repeat bg-cover overflow-hidden bg-gray-900'>
              <Header />
              <Banner />
              <NavBar />
              <About />
              <Education />
              <Services />
              <Work />
              <Contact />
            </div>
          )
        }
      </Suspense>
    </>
  );
}

export default App;
