import React, { useContext } from 'react'
import { Switch, Route } from 'react-router-dom'
import { AuthContext } from '../../App'
import Landing from '../Landing/Landing';
import Login from '../Login/Login';
import Register from '../Register/Register';
import CreateResume from '../CreateResume/CreateResume';
import ListTemplate from '../Templates/ListTemplate';
import AuthRoute from './AuthRoute';
import TemplateData from '../resume/TemplateData';

const Routing = () => {
    const authContext = useContext(AuthContext)
    
    return (
        <Switch>
            <Route path='/' exact component ={Landing}>
             {authContext ? <Landing /> : <CreateResume/>}
             </Route>
            <Route path="/signin" component={Login} ></Route>

            <Route path="/signup" component={Register}></Route>

            <AuthRoute path="/create/:template"  component={TemplateData} />

            <AuthRoute path="/edit/:cv_id"  component={TemplateData} />
            
            <AuthRoute path="/dashboard"  component={CreateResume} />

            <AuthRoute path="/template-list" component={ListTemplate} />
            
        </Switch>
    )
}

export default Routing;