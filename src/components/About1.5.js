import "./About1.5.css";
import React from "react";
import img from '../images/IMG_6482.jpg'


function About15 () {
    return (  
    <section className="about15">
        <div className="container"> 
            <div className="about-cont15">
                <div data-aos="fade-down-right"data-aos-duration="1000" className="about-21">
                    <h1 id="about-title">
                        Бидний тухай
                    </h1>
                  
                    <p id="about-text">
                        <span>Манай</span> төрийн бус байгууллага нь 2022 оны 12 сарын 1нд хуулийн хүрээнд албан ёсоор үйл ажиллагаагаа явуулж байна. Бидний зорилго нь нийгмийн нэн зорилтод бүлгийн иргэд болон хүүхэд залуусд боловсрол бөгөөд хувь хүний хөгжлийн сургалт ба буцалтгүй тусламж үзүүлдэг болно.
                    </p>
                </div>
                <div data-aos="fade-down-left" data-aos-duration="1000" className="about-11">
                        <img id="img-about" src={img}  ></img>
                </div>
            </div>
        </div>
    </section>
    )
}
export default About15;