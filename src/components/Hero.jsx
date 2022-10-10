import React from 'react'
import bgImg from '../assets/secure_data.png'
import Bounce from 'react-reveal/Bounce';

function Hero() {
  return (
    <div name='home' className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
           <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
               <p className='text-2xl'>Get Sequencing & Secure Data</p>
               <h1 className='py-3 text-5xl md:text-7xl font-bold'>Data Secure Tool</h1>
               <p className='text-2xl'>Link with Us for more info👇</p>
               <button className='py-3 px-6 sm:w-[60%] my-4'>Get Started</button>
           </div>
            
            
            <div>
                    <Bounce bottom>
                      <img className='w-full mt-10' src={bgImg} alt='/'/>
                    </Bounce>
            </div>    
                
            
            
            
        </div>
    </div>
  )
}

export default Hero