import React, { useContext, useEffect } from "react";
import { 
    BrowserRouter as Router,
    Link
} from 'react-router-dom';
import Routing from '../Routing/Routing'
import { AuthContext } from '../../App'
import { toast } from 'react-toastify';


const SelectTemplate = () => {
    const authContext = useContext(AuthContext);

    useEffect(() => {
      // Get template for selection
    }, []);
    
    return (
        <div>
          <p>Select Template</p>
        </div>   
    )
}



export default SelectTemplate;