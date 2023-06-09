import React from 'react'
import './Banner.css'
import Nav from '../nav/Nav'
import Header from '../header/Header'
// import Services from '../services/Services'


const Banner = () => {
  return (

    <section id="banner">

      <div className='banner-container'>
        <Header />
        <Nav />
        <div className="gate">
          <p className="logistics-text">
            Logistics & Supply Chain Solutions
          </p>
          <h1>
            Your Gateway
            to any Destination in the World
          </h1>
          <p className="gate-text">
            In augue ligula, feugiat ut nulla consequat. Ut est lacus, molestie in arcu no, iaculis vehicula ipsum. Nunc faucibus, nisl id dapibus finibus, enim diam interdum nulla, sed laoreet risus lectus.
          </p>

         
            <a className='btn-yellow' href="#">
              Explore More
            </a>

        
          {/* <div className="white-circle"></div> */}
        </div>


      </div>
      {/* <Services /> */}

    </section>
  )
}

export default Banner