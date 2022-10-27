import React, { useState } from 'react'
import {Link,useHistory} from 'react-router-dom'
import {UserAuth} from '../context/AuthContext'


function Login() {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [error,setError] = useState('')
  const history = useHistory()
  

const {createUser} = UserAuth()

  const handleSubmit= async (e) =>{
        e.preventDefault()
        setError('')

        try{
               await createUser(email,password)
               history.push('/account');
        }catch (e){
          setError(e.message)
          console.log(e.message)
        }
  }
  return (
  <div className="h-screen bg-gradient-to-br from-blue-600 to-indigo-600 flex justify-center items-center w-full">
  <form onSubmit={handleSubmit}>
    <div className="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
      <div className="space-y-4">
        <h1 className="text-center text-2xl font-semibold text-gray-600">Sign Up for New Account</h1>
        

        <div>
          <label for="email" className="block mb-1 text-gray-600 font-semibold">Email</label>
          <input type="email" onChange={(e)=>setEmail(e.target.value)}  className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
        </div>
        <div>
          <label for="password" className="block mb-1 text-gray-600 font-semibold">Password</label>
          <input type="password" onChange={(e)=>setPassword(e.target.value)} className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
        </div>
        
        {/* <div>
          <label for="password" className="block mb-1 text-gray-600 font-semibold">Confirm Password</label>
          <input type="password" onChange={(e)=>setConfirm(e.target.value)} className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
        </div> */}
      </div>
      <button className="mt-4 w-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-indigo-100 py-2 rounded-md text-lg tracking-wide">Register</button>
      <p>Already have an account yet? <Link to='/signin' className='underline cursor-pointer text-blue-600'>Sign In</Link></p>
    </div>
  </form>
</div>
  )
}
export default Login





