import React from 'react'
import Sidebar from "../components/Sidebar"
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import LockIcon from '@mui/icons-material/Lock';
import { PhoneIcon, ArrowSmRightIcon } from '@heroicons/react/outline';
import {ChipIcon, SupportIcon} from '@heroicons/react/solid'
import CountUp from 'react-countup';

const Dashboard = () => {
    return (
    <>
    <Sidebar/>
      <div className='home-dashboard'>  
        <div name='dashboard' className='w-full mt-12'>
        <div className='max-w-[1240px] mx-auto'>
            <div className='grid md:grid-cols-3 gap-3 px-2 text-center'>
                <div className='border py-8 rounded-xl shadow-xl bg-black'>

                    <div className=' text-white mr-60'> 
                
                       <LockIcon fontSize='10rem'/>
                      
                    </div>
                    
                    <p style={{color: 'white', fontSize:'2rem'}}>
                        <CountUp
                        start={0}
                        end={100}
                        duration={0.80}
                        /> 
                     %</p>

                    
                    
                      <p className='text-white mt-2'>Security</p>
                    
                </div>
                <div className='border py-8 rounded-xl shadow-xl'>
                <div className=' text-indigo-600 mr-60'>
                     
                      <HowToRegIcon fontSize='10rem'/>
                     
                    </div>
                    <p style={{color: 'green', fontSize:'2rem'}}>
                    <CountUp
                        start={0}
                        end={89}
                        duration={0.80}
                        />  
                    
                    %</p>
                    <p className='text-white-400 mt-2'>Users Registration</p>
                </div>
                <div className='border py-8 rounded-xl shadow-xl bg-indigo-600'>
                <div className=' text-white mr-60'>
                      <PeopleAltIcon fontSize='10rem'/>
                    </div>
                    <p style={{color: 'white', fontSize:'2rem'}}>
                    <CountUp
                        start={0}
                        end={95}
                        duration={0.80}
                        />  
                    %</p>    
                    <p className='text-white mt-2'>Users Registration</p>
                </div>
            </div>
        </div>

     </div>
     
        
        
        {/* ------------------support----------------------------- */}

        <div className='max-w-[1240px] mx-auto text-white mt-12'>
          <h1 className='text-center text-black font-bold text-lg'>Support</h1>

          <div className='grid grid-cols-1 lg:grid-cols-3  gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8'>
                      <PhoneIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
                      <h3 className='font-bold text-2xl my-6'>Sales</h3>
                      <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.</p>
                  </div>
                  <div className='bg-slate-100 pl-8 py-4'>
                      {/* <p className='flex items-center text-indigo-600'>Contact Us <ArrowSmRightIcon className='w-5 ml-2' /></p> */}
                  </div>
              </div>
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8'>
                      <SupportIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
                      <h3 className='font-bold text-2xl my-6'>Technical Support</h3>
                      <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.</p>
                  </div>
                  <div className='bg-slate-100 pl-8 py-4'>
                     
                  </div>
              </div>
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8'>
                      <ChipIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
                      <h3 className='font-bold text-2xl my-6'>Media Inquiries</h3>
                      <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.</p>
                  </div>
                  <div className='bg-slate-100 pl-8 py-4'>
                      {/* <p className='flex items-center text-indigo-600'>Contact Us <ArrowSmRightIcon className='w-5 ml-2' /></p> */}
                  </div>
              </div>
          </div>
      </div>
      </div>
     </> 
      
    )
}

export default Dashboard