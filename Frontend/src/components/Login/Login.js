import React, { useState, useContext,useEffect } from 'react';
import Button from '../Button';
import Input from '../Input'
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { AuthContext } from '../../App';
import { validateEmail } from '../../helpers/validation';

const BASE_URL = process.env.REACT_APP_API_URL;

const Login = () => {
    const authContext = useContext(AuthContext);
    const history = useHistory();
    const [userInfo, setUserInfo] = useState({
        email: '',
        username: '',
        password: ''
    })

    const handleChange = (event) => {
        let { value, name } = event.target
        setUserInfo(prevValue => {
            return({
                ...prevValue,
                [name]: value
            })
        });
    }

const handleSignInClick = async (event) => {
        event.preventDefault();
        try {
            const res = await axios.post(`${BASE_URL}/user/login`, JSON.stringify(userInfo), {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user",JSON.stringify(res.data.user));
            authContext.userDispatch({ type: "USER_LOGIN", payload: res.data});

            toast.success("Signed in successful!", {
                className: "success-toast",
                autoClose: 3000,
                position: toast.POSITION.BOTTOM_RIGHT
            })
            history.push('/dashboard');
        } catch (error) {
                 toast.error(error.response.data.msg, {
                className: "error-toast",
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000
            })
        }
    }

return (
        <div className="card text-center mx-auto mt-4 mb-4" style={{height: "25rem", width: "20rem"}}>
            <div className="card-body login">
                <h4 className="card-title">Login</h4>
                <form>
                    <Input 
                        type="text" 
                        name="email"
                        value={userInfo.email}
                        className="form-control form-control-lg mt-5" 
                        placeholder="Enter email address" 
                        onChange={handleChange} />
                    <Input 
                        type="text" 
                        name="username"
                        value={userInfo.username}
                        className="form-control form-control-lg mt-3" 
                        placeholder="Enter username" 
                        onChange={handleChange} />
                    <Input 
                        type="password" 
                        name="password"
                        value={userInfo.password}
                        className="form-control form-control-lg mt-3" 
                        placeholder="Enter password" 
                        onChange={handleChange} />
                    <Button 
                        type="submit" 
                        onClick={handleSignInClick}
                        className="btn btn-block btn-lg btn-success mt-5"> Sign In </Button>
                </form>
                <p className="mt-2"><b>Don't have an account ?</b> <Link to="/signup">Create an account</Link> </p>
            </div>
        </div>
        
    )
}


export default Login;