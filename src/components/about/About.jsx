import React from 'react'
import './About.css'
import IMG1 from '../../assets/container.png'
import IMG2 from '../../assets/plane-cut.png'
import IMG3 from '../../assets/lady.png'
import IMG4 from '../../assets/box.png'
import IMG5 from '../../assets/ticket.png'




const About = () => {
  return (

    <section id="about">
      <div className='about-container'>
        <img src={IMG1} alt="" />

        <div className="child-container">
          <div className="row child_container">
            <div className="col-md-6 ">
              <p className='abt-text1'>Why Us</p>
              <h2 className='h2-text'>
                We provide full range global logistics solution

              </h2>
              <p className='abt-text2'>Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition.
              </p> 
              <p  className='abt-text2'> Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.

              </p>
              <div className="delivery">
                <div className="box d-flex mb-3">
                <img src={IMG4} className="box-icon " alt="" />
                <p>Delivery on Time</p>
                </div>
               
                
                <div className='ticket d-flex'>
                <img src={IMG5} className="ticket-icon" alt="" />
                <p>Optimized Travel Cost</p>
                </div>
              </div>
      

            </div>

            <div className="col-md-6 plane-pic">
              <div>
                  <img src={IMG2} alt="" />

              </div>

              <div className='lady-pic'>
                <img src={IMG3} className='lady'alt="" />
              </div>
            </div>
          </div>


          <div className='d-flex lines'>
           <div className="col-md-6 " >
            <h2 className='nos'>1294 <span>Delivered Packages</span> </h2>

           </div>
           
           <div className="col-md-6">
           <h2 className='nos1'>3594 <span>Satisfied Clients</span> </h2>
           
           </div>
            
          </div>
        </div>
      </div>
    </section>

  )
}

export default About