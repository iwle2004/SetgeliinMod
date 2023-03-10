import React, { useRef } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from "./images/logo.png"
import {Nav, Navbar, Container} from 'react-bootstrap';
import Home from "./components/Home";
import About from "./components/About";
import About2 from "./components/About2";
import About3 from "./components/About3";
import Footer from "./components/Footer";
import About15 from "./components/About1.5";
import Bee from "./components/Bee";
import Calendar from "./components/Calendar";


function App() {


  return (
  

    <>
    <Navbar sticky='top' bg="white" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
            <img id='img-brand' src={Logo}></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="container-fluid">
          <Navbar.Collapse className="justify-content-end">
                <Nav.Link >Нүүр</Nav.Link>
                <Nav.Link >Бидний тухай</Nav.Link>
                <Nav.Link >Холбогдох</Nav.Link>
                <Nav.Link>Элсэх</Nav.Link>
                <Nav.Link>
                    <button type="button" class="btn btn-outline ">Donation</button>
                </Nav.Link>
            </Navbar.Collapse>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <React.Fragment>
  
      <Home />
      <About15 />
      <About />
      <Bee />
      <About2 />
      <Calendar />
      <Footer />
    </React.Fragment>
  
    </>
  );
}

export default App;