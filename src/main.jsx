import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'normalize.css'
import './index.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

AOS.init({
  offset: 0,
  duration: 1000,
});