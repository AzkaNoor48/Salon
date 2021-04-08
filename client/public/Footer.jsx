import React from 'react';        // Footer.jsx

function Footer ()
{
    return(
    <>
    <footer className="footer-distributed">
  <div className="footer-left">
    <img src="logooo.png" />
    <h3>About<span>Eduonix</span></h3>
    <p className="footer-links">
      <a href="#">Home</a>
      |
      <a href="#">Services</a>
      |
      <a href="#">SignUp</a>
      |
      <a href="#">Contact</a>
    </p>
    <p className="footer-company-name">© 2020 ARGA Solutions Pvt. Ltd.</p>
  </div>
  <div className="footer-center">
    <div>
      <i className="fa fa-map-marker" />
      <p><span> </span>
      PUCIT (New Campus) 
      Lahore, Pakistan</p>
    </div>
    <div>
      <i className="fa fa-phone" />
      <p>090078601</p>
    </div>
    <div>
      <i className="fa fa-envelope" />
      <p><a href="mailto:support@eduonix.com">humarafyp@pucit.edu.pk</a></p>
    </div>
  </div>
  <div className="footer-right">
    <p className="footer-company-about">
      <span>About the company</span>
      Trying hard to complete our FYP on time</p>
    <div className="footer-icons">
      <a href="https://www.facebook.com/" target="_blank"><i className="fa fa-facebook" /></a>
      <a href="https://twitter.com/" target="_blank"><i className="fa fa-twitter" /></a>
      <a href="https://www.instagram.com/" target="_blank"><i className="fa fa-instagram" /></a>
      <a href="" target="_blank"><i className="fa fa-linkedin" /></a>
      <a href="https://www.youtube.com/" target="_blank"><i className="fa fa-youtube" /></a>
    </div>
  </div>
</footer>

    </>);
}
export default Footer;