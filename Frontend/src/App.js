import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBarComponent from "./components/NavBar/NavBarComponent";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Footer from "./components/footer/Footer"
import { reducer, initialState } from './components/reducers/AuthReducer'
import { useReducer,createContext } from "react";

export const AuthContext = createContext()

function App() {
  const [state,dispatch] =useReducer(reducer, initialState)
  
  return (
    <AuthContext.Provider value={{ userState: state, userDispatch: dispatch }}>
    <Router>
      <NavBarComponent /> 
      <ToastContainer />
      <Footer />
    </Router>
    </AuthContext.Provider>
  );
}

export default App;
