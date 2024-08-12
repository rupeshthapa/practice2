import React from "react";
import { BrowserRouter as Router, Route,Routes, Link } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Contact from "./pages/Contact";

function App(){
  return(
    <Router>
      <div className="App">
      <header className="App-header">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="AboutUs">AboutUs</Link></li>
            <li><Link to="Contact">Contact</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="AboutUs" element={<AboutUs/>}/>
          <Route path="Contact" element={<Contact/>}/>
        </Routes>

      </header>
    </div>
    </Router>
    
  );
}
export default App;