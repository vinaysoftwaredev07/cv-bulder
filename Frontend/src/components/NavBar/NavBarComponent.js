import React, { useContext, useEffect } from "react";
import { 
    BrowserRouter as Router,
    Link,
    useHistory
} from 'react-router-dom';
import {Navbar,Container,Nav} from "react-bootstrap";
import Routing from '../Routing/Routing';
import { AuthContext } from '../../App';
import { toast } from 'react-toastify';
import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL;


const NavBarComponent = () => {
    const authContext = useContext(AuthContext);
    const history = useHistory();

    const handleSignOut = () => {
        localStorage.clear();
        authContext.userDispatch({type: 'USER_LOGOUT'});
        toast.success("Logout successful!", {
            className: "success-toast",
            autoClose: 3000,
            position: toast.POSITION.BOTTOM_RIGHT
        })
        history.push('/signin');
    }

    useEffect( () => {
      async function check_login(){
        try {
          const jwtToken = localStorage.getItem('token');
          const res = await axios.post(`${BASE_URL}/user/check_login`, [], {
              headers: {
                  'Content-Type': 'application/json',
                  'Authorization': jwtToken
              }
          })
          authContext.userDispatch({ type: "USER_LOGIN", payload: res.data});
        } catch (error) {
                toast.error(error.response.data.msg, {
                className: "error-toast",
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000
            })
            history.push('/');
        }
      }
      check_login();
    }, []);
    
    return (
        <div>
        <Router>
 <Navbar bg="dark" variant={"dark"} expand="lg">
  <Container>
    <Navbar.Brand as={Link} to ="/">CV Builder</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">

      <Nav  className="justify-content-end flex-grow-1 pe-3">
        <>
        {
          authContext.userState.isAuthenticated ? [
            <Nav.Link exact as={Link} to  ="/template-list">Create Resume</Nav.Link>,
            <Nav.Link onClick={handleSignOut} as={Link}>Logout</Nav.Link>
           ] : 
          [<Nav.Link as={Link} to ="/signin">Login</Nav.Link>,
          <Nav.Link as={Link} to ="/signup">Register</Nav.Link> ]
        }
        </>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
<Routing />
</Router>
</div>   
)
}



export default NavBarComponent;