import "./About2.css";
import React from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import img2 from '../images/image 2.png'


function About2 () {
    return (
    <section className="about2">
        <div className="container">
            <div className="about2-column">
                <div className="about2-title">
                    <h1 id="about2-title">Бидний хийсэн үйл
                    <br></br> ажилгаанууд</h1>
                </div>
                <div className="box-container">
                    <CardGroup>
                        <Card>
                            <Card.Img variant="top" src={img2} />
                            <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={img2} />
                            <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This card has supporting text below as a natural lead-in to
                                additional content.{' '}
                            </Card.Text>
                            </Card.Body>
                        </Card>                    
                            <Card>
                                <Card.Img variant="top" src={img2} />
                                <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This card has even longer content than the
                                    first to show that equal height action.
                                </Card.Text>
                                </Card.Body>
                            </Card>
                    </CardGroup>
                </div>
            </div>
        </div>
    </section>
    )
}
export default About2;