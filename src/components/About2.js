import "./About2.css";
import React from "react";
import img2 from '../images/image 2.png'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



function About2 () {
    return (
    <section className="about2">
        <div className="container">
            <div className="about2-title">
                <h1 id="about2-title">Бидний хийх үйл
                <br></br> ажилгаанууд</h1>
            </div>
            <div className="card-container">
            <Row id="card-cont" xs={1} md={3} className="g-4">
                <Col>
                    <Card data-aos="fade-up-right"
                    data-aos-duration="1000">
                        <Card.Img variant="top" src={img2} />
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit
                            longer.
                        </Card.Text> 
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card data-aos="fade-up"
                    data-aos-duration="1000">
                        <Card.Img variant="top" src={img2} />
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit
                            longer.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card data-aos="fade-up-left"
                         data-aos-duration="1000">
                        <Card.Img variant="top" src={img2} />
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit
                            longer.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            </div>
        </div>
    </section>
    )
}
export default About2;