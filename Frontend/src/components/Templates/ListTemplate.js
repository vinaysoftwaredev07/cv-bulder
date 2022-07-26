import React, { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import axios from 'axios';
import Button from '../Button'
import { useHistory } from 'react-router-dom'


const BASE_URL = process.env.REACT_APP_API_URL;

const ListTemplate = () => {
    const history = useHistory();

    let [ templates, setTemplatesData ] = useState([]);

    const onChangeSelectTemplate = (id) => {
        history.push('/create/'+id);
    }


    useEffect( () => {
        async function getTemplates(){
            // Get template for selection
            try {
                const token = localStorage.getItem("token");
                const res = await axios.get(`${BASE_URL}/user/templates`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `${token}`
                    }
                })

                toast.success("Template listed successfully", {
                    className: "success-toast",
                    autoClose: 3000,
                    position: toast.POSITION.BOTTOM_RIGHT
                })
                
                setTemplatesData(res.data.template);
            } catch (error) {
                console.log(error);
                    toast.error(error.response.data.msg, {
                    className: "error-toast",
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 3000
                })
            }
        } 
      getTemplates();
    }, []);
    
    return (
        <div>

            <div className="container">
                <h3>List Template</h3>
                <div className="row">
                {
                    templates?.map((template) => {
                        return (
                            <div className="col-md-3">
                                <div className="shadow-lg p-3 mb-5 bg-white rounded">
                                    <p>{template.template_name}</p>
                                    <Button className="btn btn-primary" onClick={ () => onChangeSelectTemplate(template.template_type) } >Select Template</Button>
                                </div>
                            </div>
                        )
                    })
                }
                </div>
            </div>
        </div>   
    )
}



export default ListTemplate;