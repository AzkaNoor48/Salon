import React from 'react';
import Nav from "./Nav";
function SignUp() {
  return (
    <>
    <link rel="stylesheet" type="text/css" href="assets/css/form.css"></link>
    <header id="top">
    <Nav />
    </header>
       <div className="wrapper">
        <div className="inner">
          <div className="image-holder">
            <img src="assets/img/login/registration-form-4.jpg" alt="" />
          </div>
          <form action>
            <h3>Sign Up</h3>
            <div className="form-holder active">
              <input type="text" placeholder="name" className="form-control" />
            </div>
            <div className="form-holder">
              <input type="text" placeholder="e-mail" className="form-control" />
            </div>
            <div className="form-holder">
              <input type="password" placeholder="Password" className="form-control" style={{fontSize: '15px'}} />
            </div>
            <div className="checkbox">
              <label>
                <input type="checkbox" defaultChecked /> I agree all statement in <a href="#">Terms &amp; Conditions</a>
                <span className="checkmark" />
              </label>
            </div>
            <div className="form-login">
              <button>Sign up</button>
              <p>Already Have account? <a href="#">Login</a></p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
