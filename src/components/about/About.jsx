import React from 'react'
import './About.css'
import IMG1 from '../../assets/container.png'
import IMG2 from '../../assets/plane-cut.png'
import IMG3 from '../../assets/lady.png'



const About = () => {
  return (

    <section id="about">
      <div className='about-container'>
        <img src={IMG1} alt="" />

        <div className="child-container">
          <div className="row">
            <div className="col-md-6">
              <p>Why Us</p>
              <h2>
                We provide full range global logistics solution

              </h2>
              <p>Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. <br />
              Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
              </p>

            </div>

            <div className="col-md-6">
              <img src={IMG2} alt="" />

              <div>
                <img src={IMG3} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default About