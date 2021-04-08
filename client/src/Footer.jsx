import React from 'react';        // Footer.jsx

function Footer ()
{
  return(
  <>

<link rel="stylesheet" type="text/css" href="assets/css/Footer.css" />
{/*For icons*/}
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

  <footer className="footer-distributed">

  <div className="footer-left">
    <img src="assets/img/logooo.png" />
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
      <p>PUCIT (New Campus) 
      Lahore, Pakistan</p>
    </div>
    <div>
      <i className="fa fa-envelope" />
      <p><a href="mailto:support@eduonix.com">humarafyp@pucit.edu.pk</a></p>
    </div>
    <div>
      <i className="fa fa-phone" />
      <p>090078601</p>
    </div>

  </div>

  <div className="footer-right">

    <p>Join us on social media</p>

    <div className="footer-icons">
      <a href="https://www.facebook.com/" target="_blank" className="fa fa-facebook"></a>
      <a href="https://twitter.com/" target="_blank" className="fa fa-twitter"></a>
      <a href="https://www.instagram.com/" target="_blank" className="fa fa-instagram" ></a>
      <a href="https://www.youtube.com/" target="_blank" className="fa fa-youtube" ></a>

    <p>Download the app</p>
        {/* <a className="app-btn blu flex vert" href="http:google.com">
          <i className="fab fa-google-play" />
          <p>Get it on <br /> <span className="big-txt">Google Play</span></p></a> */}
    <div>
           <a href="false" target="_blank" rel="noopener noreferrer" style={{border: 'none', textDecoration: 'none'}}>
           <img src="https://www.niftybuttons.com/googleplay/googleplay-button2.png" /></a>  
    </div>
    </div>

  </div>

</footer>

    </>);
}
export default Footer;