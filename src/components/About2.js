import "./About2.css";
import React from "react";
import img2 from '../images/IMG_5417.jpg'
import img3 from '../images/IMG_5423.jpg'
import img4 from '../images/IMG_6859.jpg'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



function About2 () {
    return (
    <section className="about2">
        <div className="container">
            <div className="about2-title">
                <h1 id="about2-title">Бидний үйл ажиллагаа
                <br></br> явуулдаг сургалтууд</h1>
            </div>
            <div className="card-container">
            <Row id="card-cont" xs={1} md={3} className="g-4">
                <Col>
                    <Card data-aos="fade-down-right"
                    data-aos-duration="1000">
                        <Card.Img variant="top" src={img2} />
                        <Card.Body>
                        <Card.Title>Япон хэл</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col> 
                    <Card data-aos="fade-down"
                    data-aos-duration="1000">
                        <Card.Img variant="top" src={img3} />
                        <Card.Body>
                        <Card.Title>Хичээлийн дундуур</Card.Title>
                        
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card data-aos="fade-down-left"
                         data-aos-duration="1000">
                        <Card.Img variant="top" src={img4} />
                        <Card.Body>
                        <Card.Title>Хувь хүний хөгжил</Card.Title>
                        
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