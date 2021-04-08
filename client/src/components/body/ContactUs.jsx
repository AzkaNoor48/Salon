import React,{useEffect} from 'react';        // ContactUs.jsx
import AOS from "aos";

function ContactUs ()
{
  useEffect(()=>{
    AOS.init();
    AOS.refresh();
  },[]);

    return(
    <>
     <link rel="stylesheet" href="assets/css/styles.css" />
    <section className="wt-section bg-light" id="contact">
  <div className="container">
    <div className="row justify-content-md-center text-center pb-lg-4 mb-lg-5 mb-4">
      <div className="col-md-8 text-center w-md-50 mx-auto mb-0 ">
        <h2 className="mb-md-2">Let us know</h2>
        <p>There are many variations of passages of Lorem Ipsum available, but the majority</p>
      </div>
    </div>
    <div className="row justify-content-md-center text-center mg-5 pb-5">
      <div className="col-md-7">
        <div className="form"> 
          {/* Form itself */}
          <form name="sentMessage" className="well" id="contactForm" noValidate data-aos="fade-up" data-aos-easing="linear" data-aos-delay={200}> 
            <div className="control-group">
              <div className="form-group mb-4">
                <input type="text" className="form-control form-control-lg" placeholder="Full Name" id="name" required data-validation-required-message="Please enter your name" />
                <p className="help-block" />
              </div>
            </div> 	
            <div className="form-group mb-4">
              <div className="controls">
                <input type="email" className="form-control form-control-lg" placeholder="Email" id="email" required data-validation-required-message="Please enter your email" />
              </div>
            </div> 	
            <div className="form-group mb-4">
              <div className="controls">
                <textarea rows={10} cols={100} className="form-control form-control-lg" placeholder="Message" id="message" required data-validation-required-message="Please enter your message" minLength={5} data-validation-minlength-message="Min 5 characters" maxLength={999} style={{resize: 'none'}} defaultValue={""} />
              </div>
            </div> 		 
            <div id="success"> </div> {/* For success/fail messages */}
            <div className="text-center">
              <button className="btn btn-lg btn-primary py-3 mt-3 px-4 btn-pill" type="submit">Send Your Message</button>
            </div> 
          </form>
        </div>
      </div>
      <div className="col-md-5">
        <div className="row contact-info">
          <div className="col-md-12">
            <div className="bg-white p-4 d-flex mb-md-4 border rounded-md" data-aos="fade-right" data-aos-easing="linear" data-aos-delay={200}>
              <i className="fa fa-address-book mt-md-1 text-primary pr-4" />
              <div className="text-left">
                <h6 className="mb-2">Address</h6>
                <p className="text-muted">132 Manhatten Str., NewYork, US</p> 
              </div>
            </div>
            <div className="bg-white p-4 d-flex mb-md-4 border rounded-md" data-aos="fade-right" data-aos-easing="linear" data-aos-delay={300}>
              <i className="fas fa-envelope-open mt-md-1 text-primary pr-4" />
              <div className="text-left">
                <h3 className="h5">Email</h3>
                <p className="mb-0">mail@webthemez.com</p>
              </div>
            </div>
            <div className="bg-white p-4 d-flex mb-md-4 border rounded-md" data-aos="fade-right" data-aos-easing="linear" data-aos-delay={400}>
              <i className="fa fa-phone mt-md-1 text-primary pr-4" />   
              <div className="text-left">
                <h3 className="h5">Phone Number</h3>
                <p className="mb-0">1-234-567-2401</p>
              </div>
            </div>
          </div> 
        </div>
      </div>
    </div>
    <div className="row" data-aos="fade-up" data-aos-easing="linear" data-aos-delay={100}>
      </div>
  </div>
</section>

    </>);
}
export default ContactUs;
