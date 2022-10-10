import { async } from '@firebase/util';
import React, { useState } from 'react'
import {Link,useHistory} from 'react-router-dom'
import {UserAuth} from '../context/AuthContext'

function Signin() {
 
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [error,setError] = useState('')

  const history = useHistory()

  const handleSubmit = async (e) =>{
     e.preventDefault();
     setError('')

     try{
       await signIn(email,password)
       history.push('/dashboard');

     } catch(e){
       setError(e.message)
       console.log(e.message)

     }
  }
  const {signIn} = UserAuth();

  return (

    <div className="h-screen bg-gradient-to-br from-blue-600 to-indigo-600 flex justify-center items-center w-full">
  <form onSubmit={handleSubmit}>
    <div className="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
      <div className="space-y-4">
        <h1 className="text-center text-2xl font-semibold text-gray-600">Log in to your Account</h1>
        <div>
          <label for="email" className="block mb-1 text-gray-600 font-semibold">EMAIL</label>
          <input type="text" onChange={(e)=>setEmail(e.target.value)} className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
        </div>
        <div>
          <label for="password" className="block mb-1 text-gray-600 font-semibold">Password</label>
          <input type="password" onChange={(e)=>setPassword(e.target.value)} className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
        </div>
        
      </div>
      <button className="mt-4 w-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-indigo-100 py-2 rounded-md text-lg tracking-wide">Login</button>
      <p>Don't have an account yet? <Link to='/signup' className='underline cursor-pointer text-blue-600'>Sigh Up</Link></p>
    </div>
  </form>
</div>
  )
}

export default Signin