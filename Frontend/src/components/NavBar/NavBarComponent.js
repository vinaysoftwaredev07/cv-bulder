import React, { useContext } from "react";
import { 
    BrowserRouter as Router,
    Link
} from 'react-router-dom';
import {Navbar,Container,Nav} from "react-bootstrap"
import Routing from '../Routing/Routing'
import { AuthContext } from '../../App'
import { toast } from 'react-toastify';


const NavBarComponent = () => {
    const authContext = useContext(AuthContext);

    const handleSignOut = () => {
        localStorage.clear();
        authContext.userDispatch({type: 'USER_LOGOUT'});
        toast.success("Logout successful!", {
            className: "success-toast",
            autoClose: 3000,
            position: toast.POSITION.BOTTOM_RIGHT
        })
    }
    
    return (
        <div>
        <Router>
 <Navbar bg="dark" variant={"dark"} expand="lg">
  <Container>
    <Navbar.Brand as={Link} to ="/">Resume Genertor</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">

      <Nav  className="justify-content-end flex-grow-1 pe-3">
        <>
        {
          authContext.userState.isAuthenticated ? [
            <Nav.Link exact as={Link} to  ="/create_resume">Create Resume</Nav.Link>,
            <Nav.Link onClick={handleSignOut} as={Link} to ="/signout">Logout</Nav.Link>
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