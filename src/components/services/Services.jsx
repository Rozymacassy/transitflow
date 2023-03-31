import React from 'react'
import './Services.css'

import IMG1 from '../../assets/ship.png'
import IMG2 from '../../assets/F-icon.png'
import IMG3 from '../../assets/warehouse-icon.png'
import IMG4 from '../../assets/van.png'

const Services = () => {
  return (
    <section id="services">
      <div container services-container>
        <div className="row">
          <div className="safe-text col-md-3">
            <p> What We Do</p>
            <h2>Safe & Reliable Cargo Solution</h2>
          </div>

          <div className="col-md-3">
            <div className="safe d-flex ">
              <img src={IMG1} alt="" />
              <div className="line px-3"></div>

              <div className="sea px-3">
                <h3>Sea Transport Services</h3>
                <p>
                  Following the quality of our service thus having gained trust of our many clients.
                </p>
              </div>
            </div>
            <div className="safe d-flex mt-4">
              <img src={IMG2} alt="" />
              <div className="line px-3"></div>


              <div className="sea px-3">
                <h3>Air Fright Services</h3>
                <p>
                  Following the quality of our service thus having gained trust of our many clients.
                </p>
              </div>

            </div>
          </div>

          <div className="col-md-3">
            <div className="safe d-flex ">
              <img src={IMG3} alt="" />
              <div className="line px-3 "></div>


              <div className="sea px-3">
                <h3>Warehousing Services</h3>
                <p>
                  Following the quality of our service thus having gained trust of our many clients.
                </p>
              </div>
            </div>
            <div className="safe d-flex mt-4">
              <img src={IMG4} alt="" />
              <div className="line px-3"></div>


              <div className="sea px-3">
                <h3>Local Shipping Services</h3>
                <p>
                  Following the quality of our service thus having gained trust of our many clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Services