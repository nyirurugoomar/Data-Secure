import React from 'react'
import { useHistory} from 'react-router-dom'
import {UserAuth} from '../context/AuthContext'


const ProtectedRoute = ({children}) => {
  const history = useHistory()
    const {user} = UserAuth()

    if(!user){
        return (history.push('/'))
    }
  return children;
}

export default ProtectedRoute