import React, { useEffect, useState } from 'react'
  import { Link, useHistory } from 'react-router-dom';
  import  Button from "../Button"
  import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import "./CreateResume.css";
import axios from 'axios';
import { toast } from 'react-toastify';

const CreateResume = () => {
  const [cvData, setCVData] = useState([]);
  const history = useHistory();
  const jwtToken = localStorage.getItem('token');

  const listCVData = () => {
    const jwtToken = localStorage.getItem('token');
    axios.get(`${process.env.REACT_APP_API_URL}/user/get-cv`, {
      headers: {
        'Authorization': jwtToken
      }
    }).then((data) => {
        setCVData(data.data.cvData);
    }).catch((err) => {
      setCVData("Unable to fetch CV data");
    });
  }
  useEffect( () => {
    listCVData();
  }, []);

  const handleEdit = (templateId) => {
    history.push(`/edit/${templateId}`);
  }

  const handleRemove = (templateId) => {
    axios.delete(`${process.env.REACT_APP_API_URL}/user/delete-cv/${templateId}`, {
      headers: {
        'Authorization': jwtToken
      }
    }).then((data) => {
        listCVData();
        toast.success("CV removed successfully", {
          className: "success-toast",
          autoClose: 3000,
          position: toast.POSITION.BOTTOM_RIGHT
      })        
    }).catch((err) => {
        toast.error("Unable to delete", {
          className: "error-toast",
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000
      })
    });
  }

 return (
   <>
<div className='create__resume'>
  
    <p>Create Your Resume Here &nbsp;


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
  
</div>
  <div className="col-md-offset-3 text-center col-md-12">
  <table class="table">
  <thead>
    <tr>
      <th scope="col">CV</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    { console.log(cvData) }
    {
      cvData.length > 0 ?  
        cvData.map((value) => {
          return (
            <>
            { console.log(value._id) }
            <tr key={value._id}>
              <td>Mark</td>
              <td>
                  <Button className="btn btn-secondary" onClick={() => handleEdit(value._id)}>Edit</Button>
              </td>
              <td>
                  <Button className="btn btn-danger" onClick={() => handleRemove(value._id)}>Remove</Button>
              </td>
            </tr>
            </>
          )
        })
      :
        "No record found"
    }
  </tbody>
</table>
  </div>
<div>

</div>
    </>
  );
}

export default CreateResume
