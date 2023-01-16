import React from 'react'; 
import { Link } from 'react-router-dom'; 
import vrLogo from "./vr_logo.png";

const Logo = () => {
  return (
    <> 
        {/* linked to home page */}
        <Link to="/"> <img src={vrLogo} style={{height:"100px"}}/></Link>
       
        </>
  )
}

export default Logo