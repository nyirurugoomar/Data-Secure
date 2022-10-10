import React,{useState} from 'react'
import {MenuIcon,XIcon} from '@heroicons/react/outline'
// import { Links,animateScroll as scroll } from 'react-scroll'
import { Link } from 'react-router-dom'
import mainLogo from '../assets/logo2.png'



function Navbar() {
    const [nav,setNav] =useState(false)
    const handleClick = () => setNav(!nav)
   
    const handleClose =()=> setNav(!nav)
   
   
     return (
       <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg'>
           <div className='px-2 flex justify-between items-center w-full h-full'>
             <div className='flex items-center'>
                 <h1 className=' mr-4 sm:text-4xl cursor-pointer w-60 h-70'><img src={mainLogo}/></h1>
                 <ul className='hidden md:flex cursor-pointer'>
                    <li><Link to="home" smooth={true}  offset={-300}duration={500}>Home</Link></li>
                    <li><Link to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
                    <li><Link to="feature" smooth={true} offset={-100} duration={500}>Feature</Link></li>
                    <li><Link to="price" smooth={true} offset={-50} duration={500}>Pricing</Link></li>
                    {/* <li><Link to="support" smooth={true} offset={-50} duration={500}>Support</Link></li> */}
                 </ul>
             </div>
             
             <div className='md:hidden' onClick={handleClick}>
               {!nav ? <MenuIcon className='w-5'/> : <XIcon className='w-5'/>}
             
   
             </div>
   
             <div className='hidden md:flex pr-4'>
             
               <button className='border-none bg-transparent text-black mr-4'><Link to='/signin'>Sign In</Link></button>
               
               
                 <button className='px-8 py-3'><Link to='/signup'>Sign Up</Link></button>
                
                   
             </div>
           </div> 
   
           <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
   
                     <li><Link onClick={handleClose} to="home" smooth={true}  duration={500}>Home</Link></li>
                     <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
                     {/* <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="support" smooth={true} offset={-50} duration={500}>Support</Link></li> */}
                     <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="feature" smooth={true} offset={-100} duration={500}>Feature</Link></li>
                     <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="price" smooth={true} offset={-50} duration={500}>Pricing</Link></li>
                     
                     <div className='flex flex-col my-4'>


                      
                       <button className='bg-transparent text-indigo-600 px-8 py-3 mb-4'><Link onClick={handleClose} to='/signin'>Sign In</Link></button>
                       

                       
                       <button className='px-8 py-3'><Link onClick={handleClose} to='/signup'>Sign Up</Link></button>
                
                     </div>
                     
           </ul> 
       </div>
     )
   }
   export default Navbar
   
