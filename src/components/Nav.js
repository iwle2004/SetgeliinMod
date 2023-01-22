import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../images/logo.png'
import "./Nav.css";

const ReadingProgress = ({ target }) => {
  const [readingProgress, setReadingProgress] = React.useState(0);
  const scrollListener = () => {
    if (!target.current) {
      return;
    }

    const element         = target.current;
    const totalHeight     = element.clientHeight - element.offsetTop - (window.innerHeight);
    const windowScrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (windowScrollTop === 0) {
      return setReadingProgress(0);
    }

    if (windowScrollTop > totalHeight) {
      return setReadingProgress(100);
    }
   
    setReadingProgress((windowScrollTop / totalHeight) * 100);
  };
  
  React.useEffect(() => {
    window.addEventListener("scroll", scrollListener);
    return () => window.removeEventListener("scroll", scrollListener);
  });

  return <div className={`reading-progress-bar`} style={{width: `${readingProgress}%`}} />;
};



function Na() {
  const target = React.createRef();

  return (
    <>
    <ReadingProgress target={target} />
    <div className={`post`} ref={target}>

    
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
    </div>
    </>
    
  );
}

export default Na;