import React, { useEffect, useContext } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import FormComponent from '../form/FormComponent';
import ResumeComponent from "../resume/ResumeComponent"
import { AuthContext } from '../../App'
import Landing from '../Landing/Landing';
import Login from '../Login/Login';
import Register from '../Register/Register';
import CreateResume from '../CreateResume/CreateResume';


const Routing = () => {
    const history = useHistory();
    const authContext = useContext(AuthContext)
    useEffect(() => {
        if (!authContext.userState.isAuthenticated) {
        history.push('/')
        }
    },[history, authContext.userState.isAuthenticated])
    
    

    return (
        <Switch>
            {/* <Route path="/" exact component={Dashboard} />
            <Route path="/about" component={About} />
            <Route path="/compose" component={Compose} /> */}
            <Route path='/' exact component ={Landing}>
             {authContext ? <Landing /> : <CreateResume/>}
             </Route>
            <Route path="/signin" component={Login} >
                
            </Route>

            <Route path="/signup" component={Register}>
            
            </Route>

            <Route path="/create"  component={FormComponent}>
            {/* {authContext ? <FormComponent /> : <Register /> } */}
            </Route>
            <Route path="/create_resume"  component={CreateResume} >
            
            </Route>
            <Route path="/view_resume/:id" exact component={ResumeComponent} />
            
        </Switch>
    )
}

export default Routing;