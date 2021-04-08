import React, { useEffect } from "react";
import AOS from "aos";

function About() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div id="about">
      <link rel="stylesheet" href="assets/css/about.css" />
      <hr className="about-top-line" />
      <div className="about-container">
        {/* <hr style={{color: "#f150bf", height: "3px"}}/> */}
        <div className="about-pictures">
          <div id="about-top-pics">
            <img
              className="about-pic"
              data-aos-offset="0"
              data-aos="fade-right"
              data-aos-delay={500}
              id="about-slide1"
              src="assets/img/about/brushes.jpeg"
            />
            <img
              className="about-pic"
              data-aos-offset="0"
              data-aos="fade-right"
              data-aos-delay={800}
              id="about-slide3"
              src="assets/img/about/3.jpg"
            />
          </div>
          <div id="about-bottom-pics">
            <img
              className="about-pic"
              data-aos-offset="0"
              data-aos="fade-right"
              data-aos-delay={1000}
              id="about-slide4"
              src="assets/img/about/4.jpg"
            />
            <img
              className="about-pic"
              data-aos-offset="0"
              data-aos="fade-right"
              data-aos-delay={1200}
              id="about-slide2"
              src="assets/img/about/brushes2.jpeg"
            />
          </div>
        </div>

        <div
          className="about-writing"
          data-aos="fade-left"
          data-aos-delay={500}
        >
          {/* <div id="about-slide5"> */}
          <h1> About Us </h1>
          <p>
            App-Name is here to provide all Lahoris a 24/7 available
            user-friendly, efficient and secure online platform for locating and
            booking beauty services. We will do all the heavy lifting of finding
            the salons, spas, beauty clinics near you so you don't have to!
            <br />
            <br />
            {/* All your favorite salons will be listed on our website and application and all your
                            <br />
                            favorite amenities will be just a few clicks away. We also provide online payments
                            <br />
                            the best possible experience.
                            <br /> <br /> */}
            Sign up today to be a part of our family and enjoy hand-picked
            beauty services, discounts and promotions and much more! We are
            committed to provide you the best possible experience!
          </p>
          {/* </div> */}
        </div>
      </div>
      <br />
    </div>
  );
}

export default About;
