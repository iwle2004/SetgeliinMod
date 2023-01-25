import "./About.css";
import React from "react";
import img from '../images/image 1.png'


function About () {
    return ( 
    <section className="about">
        <div className="container">
            <div className="about-cont">
                <div data-aos="fade-up-right" data-aos-duration="1000" className="about-1">
                        <img id="img-about" src={img}></img>
                </div>
                <div data-aos="fade-up-left"data-aos-duration="1000" className="about-2">
                    <h1 id="about-title">
                        Бид юу хийдэг вэ?
                    </h1>
                  
                    <p id="about-text">
                        <span>Сэтгэлийн мод</span> нь 2023 онд үүсгэн байгуулагдсан бөгөөд Сайн дурынхан ажилтнууд болон байгууллагуудыг холбох, сайн дурын үйл ажиллагаа нийгэмд тустай төсөл хөтөлбөрүүдийг дэмжих зорилготой нээлттэй санаачилга юм.
                    </p>
                </div>
            </div>
        </div>
    </section>
    )
}
export default About;