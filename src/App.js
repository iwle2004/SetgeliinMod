import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import About2 from "./components/About2";
import Footer from "./components/Footer";




function App() {
  return (
    <>
    <React.Fragment>
      <Nav />
      <Home />
      <About />
      <About2 />
      <Footer />
    </React.Fragment>
  
    </>
  );
}

export default App;