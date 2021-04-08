import React from "react";
import RatingsData from "./RatingsData";
import { showStars } from "./Ratings";
// import Categorydata from "./Categorydata";
// import Categorycard from "./Categorycard";

function SalonHero() {
  return (
    <div class="hero-container">
      <div id="hero-text">
        <h1>LavishLooks</h1>
        {/* {Categorydata.map((val, index) => {
          if (index > 0) {
            return (
              <Categorycard
                imgsrc={val.imgsrc}
                spname={val.spname}
                address={val.address}
                ratings={val.ratings}
                noOfratings={val.noOfratings}
              />
            );
          }
        })} */}
        <hr class="salon-hero" />
        <address> Address: Walton Road, Nishter Town, Lahore</address>
        <hr class="salon-hero" />
        <p>
          <a class="hero-rating-link" href="#RatingsSection">
            {showStars()}
            &nbsp;
            <strong>{RatingsData[0].average} Average</strong>
            <br />
            Based on {RatingsData[0].total} Reviews
          </a>
        </p>
        <hr class="salon-hero" />
        <button>Book Now</button>
      </div>
      <div id="hero-slider">
        <figure>
          <img src="assets/img/salonHero/1.jpg" alt="image1" />
          <img src="assets/img/salonHero/2.png"  alt="image2" />
          <img src="assets/img/salonHero/4.jpg" alt="image3" />
        </figure>
      </div>
    </div>
  );
}

export default SalonHero;
