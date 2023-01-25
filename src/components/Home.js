import "./Home.css";
import React from "react";
import home from "../images/home.svg";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

 

function Home () {
    useEffect(() => {
        AOS.init();
      }, [])

    return (
        

    <section className="home">
        <div className="container">
            <div className="home-cont">
                <div data-aos="zoom-out-right"data-aos-duration="1000" className="home-1">
                    <h1 id="home-title">
                        Эерэг өөрчлөлтөд хөтлөх
                        <span> сайн дурын ажилд </span>
                        таныг урьж байна.
                    </h1>
                </div>
                <div data-aos="zoom-out-left"data-aos-duration="1000" className="home-2">
                    <img id="home-img" src={home}></img>
                </div>
            </div>
        </div> 
    </section>
    
    )
}
export default Home;