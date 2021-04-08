import React, { useEffect } from "react";
import AOS from "aos";

function Features() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div id="features">
      <link rel="stylesheet" href="assets/css/features.css" />
      {/* <a id="features"></a> */}
      <h1 className="features-heading">Features</h1>
      <div
        className="features-container"
        data-aos-offset="0"
        data-aos="flip-down"
        data-aos-delay={800}
      >
        <div className="single-feature">
          <img
            className="features-image"
            src="assets/img/features/booking-white.png"
          />
          <h6 className="features-heading">Online Booking</h6>
        </div>

        <div className="single-feature">
          <img
            className="features-image"
            src="assets/img/features/payment-white.png"
          />
          <h6 className="features-heading">Online Payments</h6>
        </div>

        <div className="single-feature">
          <img
            className="features-image"
            src="assets/img/features/discounts-white.png"
          />
          <h6 className="features-heading">Discounts & Offers</h6>
        </div>
      </div>
      <div
        className="features-container"
        data-aos-offset="0"
        data-aos="flip-up"
        data-aos-delay={800}
      >
        <div className="single-feature">
          <img
            className="features-image"
            src="assets/img/features/beauty-white.png"
          />
          <h6 className="features-heading">Beauty Services</h6>
        </div>

        <div className="single-feature">
          <img
            className="features-image"
            src="assets/img/features/24hrs-white.png"
          />
          <h6 className="features-heading">24/7 Service</h6>
        </div>

        <div className="single-feature">
          <img
            className="features-image"
            src="assets/img/features/headphones.png"
          />
          <h6 className="features-heading">Customer Support</h6>
        </div>
      </div>
    </div>
  );
}

export default Features;
