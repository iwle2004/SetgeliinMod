import React from "react";
import "./App.css";
import Navb from "./components/Nav";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home";




function App() {
  return (

    <React.Fragment>
      <Navb />
      <Home />
    </React.Fragment>

  );
}

export default App;