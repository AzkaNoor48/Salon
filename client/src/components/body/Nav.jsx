import React from "react";
import { Link, withRouter } from "react-router-dom";
import {useSelector} from 'react-redux'
import axios from 'axios'


// eslint-disable-next-line react-hooks/rules-of-hooks

function Nav() {

  const auth = useSelector(state => state.auth)

  const {user, isLogged} = auth
  
  
  const handleLogout = async () => {
      try {
          await axios.get('/user/logout')
          localStorage.removeItem('firstLogin')
          window.location.href = "/";
      } catch (err) {
          window.location.href = "/";
      }
  }
  
  const userLink = () => {
      return <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/profile">Profile</Link>
              <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/" onClick={handleLogout}>Logout</Link></li>
          
              </li>
  }
  
  
  const transForm = {
    transform: isLogged ? "translateY(-5px)" : 0
  }
  

  return (
    <>
      <link rel="stylesheet" href="assets/css/scrolling-nav.css" />
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-white fixed-top"
        id="mainNav"
      >
        <div className="container">
          <a className="navbar-brand js-scroll-trigger" href="#page-top">
            Lavish<span>Looks</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="ti-menu" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#features">
                  Features
                </a>
              </li>
              
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="/register">
                  Signup
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#contact">
                  Contact
                </a>
              </li>
              
              <li style={transForm}>
               
                {
                    isLogged
                    ? userLink()
                    :<li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/login"><i className="fas fa-user"></i> Sign in</Link></li>
                }
                
            </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default withRouter(Nav);
