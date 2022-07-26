

import axios from 'axios';
import { toast } from 'react-toastify';
import firebase from '../config/firebase';

const socialMediaAuth = (provider) => {
	return firebase
	.auth()
	.signInWithPopup(provider)
	.then( async (res) => {
		axios.post(`${process.env.REACT_APP_API_URL}/user/register/social`, { email: res?.user?._delegate?.email }, {
			headers: {
				'Content-Type': 'application/json'
			}
		}).then((data) => {
			console.log(data);
			window.location.href = '/dashboard';
			toast.success("Signed in successful!", {
                className: "success-toast",
                autoClose: 3000,
                position: toast.POSITION.BOTTOM_RIGHT
            })
		}).catch((err) => {
			console.log(err);
			toast.error("User already registered", {
                className: "error-toast",
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000
            })
		})
	})
	.catch(err => console.log(err));
}

export default socialMediaAuth;