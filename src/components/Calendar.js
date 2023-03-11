import "./Calendar.css";
import React from "react";
import img1 from '../images/tom-tsohilt-deesh.png'
import img2 from '../images/tom-tsohilt-doosh.png'
import img3 from '../images/jijig-tsohilt-deesh.png'
import img4 from '../images/jijig-tsohilt-doosh.png'
import img5 from '../images/zuraas.png'
import img6 from '../images/zuraas-deer.png'


function Calendar () {
    return (  
    <section className="calendar">
        <div className="box-cont-text">
            <div className="box-text">

            </div>
            <div className="box-text">
                <p id="calendar-text"> 04.15 СБД 5–р хороо их цэвэрлэгээ.</p>
            </div>
            <div className="box-text">
            <p id="calendar-text"> 04.22 Байгаль орчныг хайрлан хамгаалах сургалтууд.</p>
            </div>
            <div className="box-text">

            </div>
            <div className="box-text">

            </div>
            <div className="box-text">
            <p id="calendar-text"> 05.20 Хандивын аян.</p>
            </div>
            <div className="box-text">
            <p id="calendar-text"> 06.01 Хүүхдийн баярын тоглолт.</p>
            </div>
        </div>
        <div className="box-cont-img">
            <div className="box">
                
            </div>
            
            <div className="box">
                <img id="beat-img" src={img1} ></img>
            </div>
            
            <div className="box">
                <img id="beat-img" src={img1} ></img>
            </div>
            <div className="box">
    
            </div>
            <div className="box">

            </div>
            <div className="box">
                <img id="beat-img" src={img1} ></img>
            </div>
            <div className="box">
                <img id="beat-img" src={img1} ></img>
            </div>
        </div>
        <div className="box-cont-img-bot">
            <div className="box">
                <img id="beat-img" src={img4} ></img>
            </div>
            <div className="box">
                
            </div>
            <div className="box">
                
            </div>
            <div className="box">
                <img id="beat-img" src={img4} ></img>
            </div>
            <div className="box">
                <img id="beat-img" src={img4} ></img>
            </div>
            <div className="box">
                
            </div>
            <div className="box">
            
            </div>
            
        </div>
        <div className="box-cont-text-bot">
            <div className="box-text">
                <p id="calendar-text"> 03.06 Шинэ гишүүдийн элсэлт</p>
            </div>
            <div className="box-text">

            </div>
            <div className="box-text">
                
            </div>
            <div className="box-text">
            <p id="calendar-text"> 03.16 Мэтгэлцээн ярих ур чадварын тэмцээн.</p>
            </div>
            <div className="box-text">
            <p id="calendar-text">03.29 Хүүхдийн урлан бүтээх төвтэй хамтран Бавуугийн Цэрэндоржийн нэрэмжит зургийн уралдаан.</p>
            </div>
            <div className="box-text">

            </div>
            <div className="box-text">

            </div>
        </div>
    </section>
    )
}
export default Calendar;