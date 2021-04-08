import React, { useEffect } from "react";
import AOS from "aos";

function Category() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

  return (
    <>
    
     <section className="wt-section" id="services">
        <div className="container">
          <div className="row justify-content-md-center text-center pb-lg-4 mb-lg-5 mb-4">
            <div className="col-md-8 text-center w-md-50 mx-auto mb-0">
              <h2 className="mb-md-2">Categories We Offer</h2>
              <p className="lead text-muted">WenTo creative technology company providing key digital services for everyone.</p>
              </div>
          </div> 
          <div className="row">
            <div className="col-lg-4 mb-5 mb-lg-0 text-center" data-aos="fade-up" data-aos-easing="linear" data-aos-delay={100}>
            <div className="d-block mb-4">
                <img src="assets/img/services/f3.jpg" height="150" width="180px" className="pr-4" alt="" />  
              </div>
              <a  href="/categpage"><button  className="jelly"><span className="jello">Female Salon</span></button></a>
              </div>
            <div className="col-lg-4 mb-5 mb-lg-0 text-center" data-aos="fade-up" data-aos-easing="linear" data-aos-delay={200}>
              <div className="d-block mb-4">
                <img src="assets/img/services/m4.png" height="150"  className="pr-4" alt="" />  
              </div>
              <a  href="/categpage"><button className="jelly"><span className="jello">Male Salon</span></button></a>
             </div>
            <div className="col-lg-4 mb-5 mb-lg-0 text-center" data-aos="fade-up" data-aos-easing="linear" data-aos-delay={300}>
              <div className="d-block mb-4">
                <img src="assets/img/services/s.svg"  height="150" className="pr-4" alt="" />  
              </div>
              <a  href="/categpage"><button className="jelly"><span className="jello">Spa</span></button></a>
              </div>
          </div> 
          <hr className="my-5" /> 
          <div className="row">
            <div className="col-lg-4 mb-5 mb-lg-0 text-center" data-aos="fade-up" data-aos-easing="linear" data-aos-delay={400}>
              <div className="d-block mb-4">
              <img src="assets/img/services/l1.jpg" height="150" className="pr-4" alt="" />  
              </div>
              <a  href="/categpage"><button className="jelly"><span className="jello">Laser Clinic</span></button></a>
              </div>
            <div className="col-lg-4 mb-5 mb-lg-0 text-center" data-aos="fade-up" data-aos-easing="linear" data-aos-delay={500}>
              <div className="d-block mb-4">
                <img src="assets/img/services/hair.webp" height="150" className="pr-4" alt="" />  
              </div>
              <a  href="/categpage"><button className="jelly"><span className="jello">Hair Clinic</span></button></a>
             </div>
            <div className="col-lg-4 mb-5 mb-lg-0 text-center" data-aos="fade-up" data-aos-easing="linear" data-aos-delay={600}>
              <div className="d-block mb-4">
              <img src="assets/img/services/hair.png" height="150"  className="pr-4" alt="" />  
              </div>
              <a  href="/categpage"><button className="jelly"><span className="jello">Barber Shop</span></button></a>
              </div>
          </div>
        </div>
      </section>
     
    </>
  );
}

export default Category;
