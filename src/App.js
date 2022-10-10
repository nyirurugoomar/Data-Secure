
import About from "./components/About";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
// import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Price from "./components/Price";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import Home from "./components/Home";
import Testing from "./components/Testing"
import Account from "./components/Account";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from './page/Dashboard'
import Files from "./page/Files"
import Recyclebin from "./page/Recyclebin"
import Team from "./page/Team"
import Setting from "./page/Setting"
import Profile from "./page/Profile"
import Sidebar from "./components/Sidebar"
import './App.css';




function App() {
  return (

  <AuthContextProvider>
    <Router>
      
     <div className="Dashboard">
       <ProtectedRoute> 
          <Route path="/account" component={Account}/>
       </ProtectedRoute>
          {/* <Sidebar/> */}
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/files" component={Files} />
          <Route path="/recyclebin" component={Recyclebin} />
          <Route path="/team" component={Team} />
          <Route path="/setting" component={Setting} />
          <Route path="/profile" component={Profile} />
     </div> 
    
     <Navbar/> 
     
    <>
     
      <Switch>
          <Route exact path="/" component={Home} />
          <Route  path="/home" component={Home} />
          <Route  path="/about" component={About} />
          <Route  path="/feature" component={Feature} />
          <Route  path="/price" component={Price} />
          <Route  path="/footer" component={Footer} />
          <Route path="/signup" component={Signup}/>
          <Route path="/signin" component={Signin}/>
          {/* -------------------dashboard-------------------------- */}
          
          
          
          {/* <Route path="/testing" component={Testing}/> */}
          
          {/* <Route component={Testing} />     */}
      </Switch>
        
    </>
    <Footer/>
      </Router>  
  </AuthContextProvider>
      
    
  );
}

export default App
