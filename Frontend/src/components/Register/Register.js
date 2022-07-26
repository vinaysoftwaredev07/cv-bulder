import React, { useState } from 'react';
import Button from '../Button'
import Input from '../Input'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { googleAuthProvider, facebookAuthProvider } from '../../config/authMethod';
import socialMediaAuth from '../../service/auth';

const BASE_URL = process.env.REACT_APP_API_URL;

toast.configure();
const Register = () => {
    const history = useHistory();
    const [userInfo, setUserInfo] = useState({
        email: '',
        username: '',
        phone: '',
        password: ''
    });

    const handleChange = (event) => {
        const { value, name } = event.target;
        setUserInfo(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }  
        });
    }

    const handleRegisterChange = (provider) => {
        socialMediaAuth(provider);
    }

    const postUserInfo = async (event) => {
        event.preventDefault();
        try {
            const res = await axios.post(`${BASE_URL}/user/register`, JSON.stringify(userInfo), {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            toast.success(res.data.message, {
                className: "success-toast",
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 3000
            }); 
            history.push('/signin');
            //console.log(res)
        } catch (error) {
            toast.error(error.response.data.message, {
                className: "error-toast",
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000
            });            
            //console.log(error.response.data.error.message) 
        }
        
    }

    return (
        <div className="card text-center mx-auto mt-4 mb-4" style={{height: "100vh", width: "20rem"}}>
            <div className="card-body">
                <h4 className="card-title">Register</h4>
                <form>
                    <Input 
                        type="text" 
                        name="username"
                        className="form-control mt-3 form-control-lg mt-4" 
                        placeholder="Enter username"
                        value={userInfo.username} 
                        onChange={handleChange} />
                    <Input 
                        type="email" 
                        name="email"
                        className="form-control mt-3 form-control-lg" 
                        placeholder="Enter email" 
                        onChange={handleChange}
                        value={userInfo.email}  />
                    <Input 
                        type="text" 
                        name="phone"
                        className="form-control mt-3 form-control-lg mt-4" 
                        placeholder="Enter phone"
                        value={userInfo.phone} 
                        onChange={handleChange} />
                    <Input 
                        type="password" 
                        name="password"
                        className="form-control mt-3 form-control-lg" 
                        placeholder="Enter password"
                        value={userInfo.password}  
                        onChange={handleChange} />
                    
                    <Button 
                        type="submit" 
                        onClick={postUserInfo}
                        className="btn btn-lg btn-block btn-success mt-5"> Sign Up </Button>
                </form>
                <br/>
                <div className="container-fluid">
                    <Button onClick={() => handleRegisterChange(googleAuthProvider)} > Google Login </Button>
                    <Button onClick={() => handleRegisterChange(facebookAuthProvider)} > Facebook Login </Button>
                </div>
                <p className="mt-2 mb-2">Already have an account? <Link to="/signin">Sign In</Link> </p>
            </div>
            {/* <ToastContainer /> */}
        </div>
    )
}


export default Register;