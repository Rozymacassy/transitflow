import React from "react";
import "./Testimonials.css";
import IMG1 from "../../assets/arrow-left.png";
import IMG2 from "../../assets/arrow-right.png";
import IMG3 from "../../assets/man3.png";
import IMG4 from "../../assets/qoute.png";
import IMG5 from "../../assets/man1.png";
import { BsFillStarFill } from 'react-icons/bs'


const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="container testimonial-container">
        <p className="testimonial-text">Testimonial</p>
        <div className="W-O-C-S d-flex">
          <h2 className="W-O-C-S-text">What Our Customer Say</h2>
          <div className="arrow">
            <img src={IMG1} alt="" />
            <img src={IMG2} alt="" />
          </div>
        </div>

        <div className="row testi-row">
          <div className="col-md-6 col1">
            <div className="customer1 d-flex">
              <img src={IMG3} alt="" />
              <div className="customer-name d-flex">
                <div>
                  <h4 className="name">Kathleen Smith</h4>
                  <p className="job">Fuel Company</p>
                </div>
                <img src={IMG4} alt="" />
              </div>
            </div>
            <br />

            <p className="review">
              Leverage agile frameworks to provide a robust synopsis for
              strategy foster collaborative thinking to further the overall
              value proposition. Organically grow the holistic world view of
              disruptive innovation via workplace diversity and empowerment.
            </p>

            <div className="star ">
              <BsFillStarFill />
              <BsFillStarFill />
              <BsFillStarFill />
              <BsFillStarFill />
              <BsFillStarFill />
            </div>
          </div>

          <div className="col-md-6 col2">
            <div className="customer2 d-flex">
              <img src={IMG5} alt="" />
              <div className="customer-name d-flex">
                <div >
                  <h4 className="name">John Martin</h4>
                  <p className="job">Restoration Company</p>
                </div>
              <img src={IMG4} alt="" />

              </div>
            </div>
            <br />
            <p className="review">
              Leverage agile frameworks to provide a robust synopsis for strategy
              foster collaborative thinking to further the overall value
              proposition. Organically grow the holistic world view of disruptive
              innovation via workplace diversity and empowerment.
            </p>
            <div className="star ">
              <BsFillStarFill />
              <BsFillStarFill />
              <BsFillStarFill />
              <BsFillStarFill />
              <BsFillStarFill />
            </div>
          </div>
        </div>
      </div>

    </section >
  );
};

export default Testimonials;
