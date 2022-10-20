import { createContext,useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword,
         signInWithEmailAndPassword,
         signOut,
         onAuthStateChanged, 
         updateCurrentUser
        } from "firebase/auth";
import {auth} from '../firebase' 

const UserContext = createContext()

export const AuthContextProvider=({children}) =>{ 
    const [user, setUser] = useState({})

    const createUser = (email,password,name) =>{
        return createUserWithEmailAndPassword(auth, email, password,name)
    };

    const signIn =(email,password,name)=>{
        return signInWithEmailAndPassword(auth,email,password,name)

    }

    const logout =()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=> {
            console.log(currentUser)
            setUser(currentUser)
        })
        return () =>{
            unsubscribe();
        }
    })

  return(
      <UserContext.Provider value= { {createUser,user,logout,signIn}}>
          {children}
      </UserContext.Provider>
  )
}

export const UserAuth =()=>{
    return useContext(UserContext)
}