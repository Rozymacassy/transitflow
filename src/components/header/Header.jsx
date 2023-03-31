import React from "react";
import "./Header.css";
// import Nav from '../nav/Nav'
// import Banner from '../banner/Banner'
import IMG1 from "../../assets/Logo.png";
import IMG2 from "../../assets/call.png";
import IMG3 from "../../assets/mail.png";
import IMG4 from "../../assets/time.png";

const Header = () => {
  return (
    <header>
        <div className="container header-container">

          <div className="logo-container">
            <img src={IMG1} alt="logo" className="logo" />
          </div>

          <div className="address-bar_container">
            <div className="time">
              <img src={IMG4} className="time-icon " alt="" />
              <p className="text-white time-text" >
                Mon - Sat 9.00 - 18.00 <br />
                Sunday Closed
              </p>
            </div>
            <div className="email">
              <img src={IMG3} className="email-icon" alt="" />
              <p className="text-white email-text">
                Email <br /> contact@logistics.com
              </p>
            </div>
            <div className="call">
              <img src={IMG2} className="call-icon" alt="" />
              <p className="text-white call-text">
                Call Us <br /> (00) 112 365 489
              </p>
            </div>
          </div>
          
        {/* <Nav/>
        <Banner /> */}
      </div>

    </header>
  );
};

export default Header;
