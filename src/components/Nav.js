import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../images/logo.png'
import "./Nav.css";






function Na() {


  return (
    <>

    
    <Navbar sticky='top' bg="white" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
            <img id='img' src={Logo}></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="container-fluid">
          <Navbar.Collapse className="justify-content-end">
                <Nav.Link  href="#home">Нүүр</Nav.Link>
                <Nav.Link  href="#link">Бидний тухай</Nav.Link>
                <Nav.Link  href="#link">Холбогдох</Nav.Link>
                <Nav.Link  href="#link">Элсэх</Nav.Link>
                <Nav.Link  href="#link">
                    <button type="button" class="btn btn-outline ">Donation</button>
                </Nav.Link>
            </Navbar.Collapse>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </>
    
  );
}

export default Na;