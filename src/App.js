import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home";
import About from "./components/About";
import About2 from "./components/About2";




function App() {
  return (

    <React.Fragment>
      <Nav />
      <Home />
      <About />
      <About2 />
    </React.Fragment>

  );
}

export default App;