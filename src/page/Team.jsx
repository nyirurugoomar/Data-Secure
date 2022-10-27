import React from 'react'
import Sidebar from "../components/Sidebar"
import './Team.css'
import aboutImg from '../assets/Technologies .png';




const Team = () => {
    return (
<>
 <Sidebar/>
    <div class='Team'>
      <div className='text-orange-600 text-center'>
         <h1>Our Team</h1>
      </div>
        <div class='Card'>
         <div>
          <img class="img" src={aboutImg} alt="" />
          <div class="container">
           <h4><b>John Doe</b></h4> 
           <p>Architect and Engineer</p> 
         </div>
         </div>

         <div>
         <img class="img" src={aboutImg} alt="" />
          <div class="container">
           <h4><b>John Doe</b></h4> 
           <p>Architect and Engineer</p> 
         </div>
         </div>


         <div>
         <img class="img" src={aboutImg} alt="" />
          <div class="container">
           <h4><b>John Doe</b></h4> 
           <p>Architect and Engineer</p> 
         </div>
         </div>
        </div>


    </div>
        
 </>
    )
}

export default Team