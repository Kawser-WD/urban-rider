import React, { useState, useRef} from 'react';
import './Login.css';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import Navbar from '../../Navbar/Navbar.js';
import useAuth from '../../../hooks/useAuth';
import Google from '../../../Data/image/googlelogo_color_272x92dp.png'


const Login = () => {
  
  const [loginData, setLoginData] = useState({});
  const {  loginUser, signInWithGoogle } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  const handleOnChange = e => {
      const field = e.target.name;
      const value = e.target.value;
      const newLoginData = { ...loginData };
      newLoginData[field] = value;
      setLoginData(newLoginData);
  }
  const handleLoginSubmit = e => {
      loginUser(loginData.email, loginData.password, location, navigate);
      e.preventDefault();
  }

  const handleGoogleSignIn = () => {
      signInWithGoogle(location, navigate)
  }

    return (
      <div>
        <Navbar/>
     <div className="d-flex justify-content-center login">
     <div className="card login-card">
          <div className="card-body">
          <div className="d-flex justify-content-center">
          <h5 class="card-title login-text">Login</h5>
          </div>
          <form onSubmit={handleLoginSubmit}>
          <div class="form-group">
              <label class="form-label login-text">Email</label>
              <input type="email" class="form-control" name="email"  onChange={handleOnChange}   placeholder="Enter email"/>
          </div>
          <br />
          <div class="form-group">
              <label class="form-label login-text">Password</label>
              <input type="password" class="form-control" name="password" onChange={handleOnChange}  placeholder="Password"/>
          </div>
          <br />
         <div className="d-grid">
         <button type="submit"  class="btn" style={{backgroundColor:'#00d2d3', color:'#ffffff'}}>Login</button>
         </div>
         <br/>
         <div className="d-grid">
         <button type="submit" onClick={handleGoogleSignIn} style={{backgroundColor:'#fff', color:'#000', border:'1px solid black'}}>Login With Google  <img src={Google} style={{height:'20px', width:'40px'}} /> </button>
         </div>
         <Link to="/register">
         <a href="" style={{color:'black', textDecoration:'none' }}>New User? <span style={{color:'#00d2d3'}}>Please Register</span></a>
         </Link>
          </form>
          </div>
      </div>
     </div>
    </div>
    );
};

export default Login;