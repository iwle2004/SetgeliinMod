import React from "react";
import "./App.css";
import Navb from "./components/Nav";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home";
import About from "./components/About";




function App() {
  return (

    <React.Fragment>
      <Navb />
      <Home />
      <About />
    </React.Fragment>

  );
}

export default App;