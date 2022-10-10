import React from 'react'
import notfound from '../assets/404.png'

function testing() {
  return (
    <div className='w-full h-screen flex flex-col justify-between items-center'>
      
      <h1 className='text-2xl font-bold mt-28'>Sorry, the resources you are looking for does not exist.</h1>
      <img className='w-6/12 mt-1 ' src={notfound} alt='/'/>
    </div>
  )
}

export default testing