import React from 'react';
import Nav from "./Nav";
function Login() {
  return (
    <>
    <link rel="stylesheet" type="text/css" href="assets/css/form.css"></link>
    <header id="top">
    <Nav />
    </header>
       <div className="wrapper">
        <div className="inner">
          <div className="image-holder">
            <img src="assets/img/login/registration-form-4.jpg" height="450px" alt="" />
          </div>
          <form action>
            <h3>Sign In</h3>
            <div className="form-holder active">
              <input type="text" placeholder="e-mail" className="form-control" />
            </div>
            <div className="form-holder">
              <input type="password" placeholder="Password" className="form-control" style={{fontSize: '15px'}} />
            </div>

            <div className="form-login">
              <button>Login</button>
              <p>Don't Have an Account? <a href="#">Signup</a></p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
