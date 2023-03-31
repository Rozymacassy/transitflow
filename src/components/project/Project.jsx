import React from 'react'
import './Project.css'
import IMG1 from '../../assets/tanker-back.png'
import IMG2 from '../../assets/man-lady1.png'
import IMG3 from '../../assets/trailler-front.png'
import IMG4 from '../../assets/cont-road.png'
import IMG5 from '../../assets/sea-ship.png'


const Project = () => {
  return (
    <section id='project'>
      <div className='container project-container'> 
           <h3>Transporting Across The World</h3>

        <div className="row">
         <div className="col-md-2"><img src={IMG1} alt="" /></div>
         <div className="col-md-2"><img src={IMG2} alt="" /></div>
         <div className="col-md-2"><img src={IMG3} alt="" /></div>
         <div className="col-md-2"><img src={IMG4} alt="" /></div>
         <div className="col-md-2"><img src={IMG5} alt="" /></div>  
        </div>
  
            
      </div>
    </section>
    
  )
}

export default Project