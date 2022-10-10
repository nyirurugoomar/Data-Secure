import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {FaBars} from 'react-icons/fa'
import { AiOutlineClose, AiOutlineFontSize } from 'react-icons/ai'
import { SIdebarData } from './SidebarData'
import { IconContext } from 'react-icons/lib'
import {UserAuth} from '../context/AuthContext'
import {useHistory} from 'react-router-dom'
import "./Navbar.css"
const Navbar = () => {
    const {user,logout} = UserAuth()
    const history = useHistory()

    const handleLogout =async ()=>{
        try{
            await logout()
            history.push('/signin')
            console.log('you are logged out')
        }catch (e){
          console.log(e.message)
    
        }
      }
    

    const [sidebar, setSidebar] = useState(false)
    
    const showSidebar = () => {
        setSidebar(!sidebar)
    }
     return (
         <>
         
             <IconContext.Provider value={{color: "#fff"}}>
            <div className="navbar">
                
                <Link to="#" className="menu-bars font-mono">
                    <div style={{color: 'white',marginLeft:'5rem', fontSize:'1rem',fontFamily:'Montserrat'}}>
                     <p>Welcame,{user && user.email}</p>
                    </div>
                
                    <FaBars onClick={showSidebar} />  
                </Link>
            </div>

            <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                
                <ul onClick={showSidebar} className='nav-menu-items'>
                
                    <li className='navbar-toggle'>
                    
                        <Link to="#" className='menu-bars'>
                        
                   <AiOutlineClose />
                        </Link>
                     </li>
                     {
                         SIdebarData.map((item, index) => {
                             return (
                                 <li key={index} className={item.cName}>
                                     <Link to={item.path} >
                                         {item.icon} 
                                         <span style={{fontSize:'18px',fontFamily:'Montserrat'}}>
                                             {item.title}
                                         </span>
                                   </Link>  
                                </li>
                            ) 
                         })
                     }
                     <button onClick={handleLogout} className='border px-6 py-2 my-4'>Logout</button>
                </ul>
                
                
                 </nav>
            </IconContext.Provider> 
        </>
    )
}

export default Navbar



