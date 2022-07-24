// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkxXCAb0aNKuXNnjPfy_1i6GSSkA7HyAE",
  authDomain: "cv-builder-bf5a7.firebaseapp.com",
  projectId: "cv-builder-bf5a7",
  storageBucket: "cv-builder-bf5a7.appspot.com",
  messagingSenderId: "340351656328",
  appId: "1:340351656328:web:59d8a96b9434d516749a3d",
  measurementId: "G-2KCYFCZYGD"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.getAnalytics();

export default firebase;