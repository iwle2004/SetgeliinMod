import "./Home.css";
import React from "react";
import home from "../images/home.svg";


 

function Home () {

    return (

    <section className="home">
        <div id="" className="container">
            <div className="home-cont">
                <div className="home-1">
                    <h1 id="home-title">
                        Эерэг өөрчлөлтөд хөтлөх
                        <span> сайн дурын ажилд </span>
                        таныг урьж байна.
                    </h1>
                </div>
                <div className="home-2">
                    <img id="home-img" src={home}></img>
                </div>
            </div>
        </div> 
    </section>
    
    )
}
export default Home;