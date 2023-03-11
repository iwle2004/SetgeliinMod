import "./Bee.css";
import React from "react";
import img from '../images/IMG_0004.png'


function Bee () {
    return ( 
    <section className="bee">
        <div className="container">
        <div className="box-cont-text">
            <div data-aos="fade-down-right" data-aos-duration="1000" className="box-text1">
                <p id="bee-text">Хувь хүний хөгжил</p>
            </div>
            <div className="box">
                
            </div>
            <div data-aos="fade-down-left" data-aos-duration="1000" className="box-text-yellow2">
                <p id="bee-text">Анхан шатны тусламж</p>
            </div>
        </div>
        <div className="box-cont">
            <div className="box-image">
                <img id="img-about-bee" src={img} ></img>
            </div>
        </div>
        <div className="box-cont-text">
            <div className="box-text-yellow1" data-aos="fade-up-right" data-aos-duration="1000">
                <p id="bee-text">Хүний эрхийн ойлголт <br></br> Хууль эрх зүй</p>
            </div>
            <div className="box">
                
            </div>
            <div className="box-text2" data-aos="fade-up-left" data-aos-duration="1000">
                <p id="bee-text">Банк санхүү</p>
            </div>
        </div>
        </div>
    </section>
    )
}
export default Bee;