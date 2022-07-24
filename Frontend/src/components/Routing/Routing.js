import React, { useEffect, useContext } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import FormComponent from '../form/FormComponent';
import ResumeComponent from "../resume/ResumeComponent"
import { AuthContext } from '../../App'
import Landing from '../Landing/Landing';
import Login from '../Login/Login';
import Register from '../Register/Register';
import CreateResume from '../CreateResume/CreateResume';
import ListTemplate from '../Templates/ListTemplate';
import SelectTemplate from '../Templates/SelectTemplate';
import AuthRoute from './AuthRoute';


const Routing = () => {
    const history = useHistory();
    const authContext = useContext(AuthContext)
    useEffect(() => {
        console.log("fdsfdsfsdfsdfdsfsdfsdf");
        console.log(authContext);
        if (!authContext.userState.isAuthenticated) {
            history.push('/')
        }
    },[history, authContext.userState.isAuthenticated])
    
    

    return (
        <Switch>
            <Route path='/' exact component ={Landing}>
             {authContext ? <Landing /> : <CreateResume/>}
             </Route>
            <Route path="/signin" component={Login} ></Route>

            <Route path="/signup" component={Register}></Route>

            <AuthRoute path="/create"  component={FormComponent}>
            </AuthRoute>
            <AuthRoute path="/dashboard"  component={CreateResume} >
            
            </AuthRoute>
            <AuthRoute path="/view_resume/:id" exact component={ResumeComponent} />

            <AuthRoute path="/template-list" component={ListTemplate} />
            <AuthRoute path="/select-template" component={SelectTemplate} />
            
        </Switch>
    )
}

export default Routing;