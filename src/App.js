import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Home from "./components/Home";
import About from "./components/About";
import Service from "./components/Service";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/scrollToTop";
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";


function App() {
  return (
    <Router>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route exact path="/" element={ <Home /> } />
        <Route exact path="/service" element= { <Service /> } />
        <Route exact path="/about" element= { <About /> } />
        <Route exact path="/contact" element= { <Contact /> } />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
