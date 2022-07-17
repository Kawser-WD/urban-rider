import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Data/image/Urban Riders.png';
import useAuth from '../../hooks/useAuth';

const Navbar = () => {
  const {user, logout} = useAuth();
    return (
       
            <nav class="navbar fixed-top navbar-expand-lg shadow" style={{height:'100px'}}>
      <div class="container-fluid">
        <img src={Logo} className="img-fluid" style={{height:'40px', width:'180px'}} alt=""/>
        <button class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
        <div class="mx-auto"></div>
          <ul class="navbar-nav">
          <li className="nav-item">
              <Link className="nav-link text-dark" to="/">Home</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link text-dark" to="/destination/1">Destination</Link>
              </li>
              {
                user.email?
                <li className="nav-item">
              <Link className="nav-link text-dark" to="/login" onClick={logout} >Logout</Link>
              </li>
              :
              <li className="nav-item">
              <Link className="nav-link text-dark" to="/login">LogIn</Link>
              </li>
              }
          </ul>
            </div>
          </div>
        </nav>
        
    );
};

export default Navbar;