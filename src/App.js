import './App.css';
import React, { useState } from 'react'
import About from './components/About';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === "light") {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled!", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled!", "success");
    }
  }

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }



  return (
    <>
      <Router>
        <NavBar title="Text Utilizer" toggleMode={toggleMode} mode={mode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route  path="/" element={<TextForm heading="Try Text Utilizer - word counter, character counter, remove extra spaces" showAlert={showAlert} mode={mode} />} />
            <Route  path="/about" element={<About mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
