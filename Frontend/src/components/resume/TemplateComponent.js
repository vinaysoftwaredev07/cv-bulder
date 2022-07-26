import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import { useContext,useEffect } from "react";
import { AuthContext } from '../../App'

const TemplateData = ()=> {
  const authContext = useContext(AuthContext)
return (
<div className='hero-container'>
  <h3 style={{color : 'rgb(204, 84, 174)'}}>
    <b>Welcome to CV builder</b>
    </h3> <br/>
      <p>Create a professional resume with the only truly free resume builder online.</p>
      <p> Browse our templates, then easily build and get your resume.</p>
      <p style={{color: "brown"}}>Try it for free..</p>
        {
          authContext ?  <Link to = "/signin"> 
          <Button
          className='btn btn-outline-primary'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
        GET STARTED
        </Button>
        </Link>
         : <Link to = "/template-list"> </Link>
        }
      
    </div>
  );
  
}

export default TemplateData;