import React from 'react'
// import {Container, Form,
//   Col,
//   FormGroup,
//   FormLabel,
//   FormControl,
//   Button,} from "react-bootstrap"
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
      {/* {
        authContext ? 
        <Link to = "/create"> 
        <Button
          className='btn btn-outline-danger'
          buttonStyle='btn--outline'
          buttonSize='btn--medium'
        > <AddCircleOutlineIcon/>&nbsp;
        Create Now
        </Button>
        </Link> :
<Link to = "/view_resume/:id"> </Link>
      } */}
      <Link to = "/create"> 
        <Button
          className='btn btn-outline-danger'
          buttonStyle='btn--outline'
          buttonSize='btn--medium'
        > <AddCircleOutlineIcon/>&nbsp;
        Create Now
        </Button>
        </Link>
      
      </p>
  <img src={resume} alt=""/>
</div>
    </>
  );
}

export default CreateResume
