import { useState } from 'react';
import './App.css';
import Alert from './Components/Alert';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   // Link
// } from "react-router-dom";

function App() {
  const [Mode, setMode] = useState('Light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const toggleMode = () => {
    if (Mode === 'Light') {
      setMode('dark');
      document.body.style.backgroundColor = '#1b1b1d';
      showAlert(' Dark Mode has been enabled', 'success');
    }
    else {
      setMode('Light');
      document.body.style.backgroundColor = 'white';
      showAlert(' Dark Mode has been disabled', 'success');
    }
  }
  return (
    <>
      {/* <Router> */}
        <Navbar title="ZetaText" aboutText="About Us" mode={Mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container mb-3">
          {/* <Routes> */}
            {/* <Route exact path="/about" element={<About mode={Mode}/>} /> */}
            <Textform showalert={showAlert} heading="Enter the Text to Analyze below" mode={Mode}/>
          {/* </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
