import React, { useRef } from "react";
import "./App.css";
import "./components/Nav.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from "./images/logo.png"
import {Nav, Navbar, Container} from 'react-bootstrap';
import Home from "./components/Home";
import About from "./components/About";
import About2 from "./components/About2";
import About3 from "./components/About3";
import Footer from "./components/Footer";



function App() {

  const home = useRef(null);
  const about = useRef(null);
  const contact = useRef(null);
  
  const scrollToSection = (elementRef) => {
    console.log(elementRef);

    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

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
                <Nav.Link onClick={() => scrollToSection(home)}>Нүүр</Nav.Link>
                <Nav.Link onClick={() => scrollToSection(about)}>Бидний тухай</Nav.Link>
                <Nav.Link onClick={() => scrollToSection(contact)}>Холбогдох</Nav.Link>
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
      <Home ref={home}/>
      <About ref={about}/>
      <About2 />
      <About3 />
      <Footer ref={contact}/>
    </React.Fragment>
  
    </>
  );
}

export default App;