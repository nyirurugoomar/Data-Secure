import React from 'react'
import { CheckIcon } from '@heroicons/react/solid';
import Bounce from 'react-reveal/Bounce';
import Navbar from './Navbar';


function Price() {
  return (

    
   
    
    
    <div  className='grid md:grid-cols-2 my-0.5'>
        <Bounce bottom>
          <div className='bg-indigo-600 text-slate-900 m-20 p-8 rounded-3xl shadow-2xl relative  '>
            
            <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Standard</span>
            <div>
              <p className='text-6xl font-bold py-4 flex text-white'>$100<span className='text-xl text-white flex flex-col justify-end'>/mo</span></p>
            </div>
            <p className='text-3xl py-8 text-white'>Usage-based pricing</p>
            <p className='text-1xl py-8 text-white'>This simple, scalable option allows you to start small with initial users and capabilities and easily scale as you add more users, capabilities and data.</p>
            <div className='text-2xl'>
                <p className='flex py-4 text-white'><CheckIcon className='w-8 mr-5 text-white'  />Ability to scale seamlessly</p>
                <p className='flex py-4 text-white'><CheckIcon className='w-8 mr-5 text-white'  />Pay only for what you need</p>
                <p className='flex py-4 text-white'><CheckIcon className='w-8 mr-5 text-white'  />Subscription license available</p>
                <p className='flex py-4 text-white'><CheckIcon className='w-8 mr-5 text-white'  />Managed option available with SaaS</p>
                <p className='flex py-4 text-white'><CheckIcon className='w-8 mr-5 text-white'  />Starting at USD 800 per month</p>
                <button className='w-full py-4 my-4 border-gray-50'>Get Started</button>
            </div>
          </div>
          </Bounce> 
          <Bounce bottom>   
          <div className='bg-indigo-600 text-slate-900 m-20 p-8 rounded-3xl shadow-2xl relative '>
            <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Premium</span>
            <div>
              <p className='text-6xl font-bold py-4 flex text-white'>$500<span className='text-xl  flex flex-col justify-end text-white'>/mo</span></p>
            </div>
            <p className='text-3xl py-8 text-white'>Enterprise-wide pricing</p>
            <p className='text-1xl py-8 text-white'>This option is based on the size of your enterprise-wide IT infrastructure, or the size and type of data sources being secured. This option helps avoid unexpected data costs.</p>
            <div className='text-2xl'>
                <p className='flex py-4 text-white'><CheckIcon className='w-8 mr-5 text-white'  />Predictable pricing at enterprise scale</p>
                <p className='flex py-4 text-white'><CheckIcon className='w-8 mr-5 text-white'  />Unlimited users</p>
                <p className='flex py-4 text-white'><CheckIcon className='w-8 mr-5 text-white'  />Unlimited actions</p>
                <p className='flex py-4 text-white'><CheckIcon className='w-8 mr-5 text-white'  />Unlimited data usage for threat management solution</p>
                <p className='flex py-4 text-white'><CheckIcon className='w-8 mr-5 text-white'  />No data ingestion charges</p>
                <p className='flex py-4 text-white'><CheckIcon className='w-8 mr-5 text-white'  />Subscription license available</p>
                <button className='w-full py-4 my-4 border-gray-50'>Get Started</button>
            </div>
          </div>
          </Bounce>  
        </div>
        
        
  )
}

export default Price