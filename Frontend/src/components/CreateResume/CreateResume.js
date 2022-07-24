import React from 'react'
  import { Link } from 'react-router-dom';
  import  Button from "../Button"
  import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import "./CreateResume.css";
import resume from "../../Assets/resume.png"
import { useContext,useEffect } from "react";
import { AuthContext } from '../../App'

const CreateResume = () => {
  const authContext = useContext(AuthContext)
 return (
   <>
<div className='create__resume'>
  
    <p>Create Your Resume Here &nbsp;
      <Link to = "/create"> 
        <Button
          className='btn btn-outline-danger'
          buttonStyle='btn--outline'
          buttonSize='btn--medium'
        > <AddCircleOutlineIcon/>&nbsp;
        Create Now
        </Button>
        </Link>


        <Link to = "/template-list"> 
        <Button
          className='btn btn-outline-danger'
          buttonStyle='btn--outline'
          buttonSize='btn--medium'
        > <AddCircleOutlineIcon/>&nbsp;
        Select Template
        </Button>
        </Link>
      
      </p>
  <img src={resume} alt=""/>
</div>
    </>
  );
}

export default CreateResume
