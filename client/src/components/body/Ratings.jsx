import React from "react";
import ReviewsCard from "./ReviewsCard";
import RatingsData from "./RatingsData";

const Ratings = () => {
  return (
    <>
      <link rel="stylesheet" type="text/css" href="assets/css/ratings.css" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <div className="row justify-content-md-center text-center pb-lg-4 mb-lg-5 mb-4">
        <div className="col-md-8 text-center w-md-50 mx-auto mb-0">
          <h2 id="RatingsSection" className="mb-md-2">
            Reviews and Ratings
          </h2>
          <p className="lead text-muted">
            WenTo creative technology company providing key digital services for
            everyone.
          </p>
        </div>
      </div>

      <div className="flex-container">
        <div className="ratings flex-child" style={{ marginLeft: "50px" }}>
          {showStars()}
          <p>
            {RatingsData[0].average} average based on {RatingsData[0].total}{" "}
            reviews.
          </p>
          <hr style={{ border: "3px solid #f1f1f1" }} />
          <div className="row">
            <div className="side">
              <div>5 star</div>
            </div>
            <div className="middle">
              <div className="bar-container">
                <div
                  className="bar-5"
                  style={{
                    width:
                      (RatingsData[0].five / RatingsData[0].total) * 100 + "%",
                  }}
                />
              </div>
            </div>
            <div className="side right">
              <div>{RatingsData[0].five}</div>
            </div>
            <div className="side">
              <div>4 star</div>
            </div>
            <div className="middle">
              <div className="bar-container">
                <div
                  className="bar-4"
                  style={{
                    width:
                      (RatingsData[0].four / RatingsData[0].total) * 100 + "%",
                  }}
                />
              </div>
            </div>
            <div className="side right">
              <div>{RatingsData[0].four}</div>
            </div>
            <div className="side">
              <div>3 star</div>
            </div>
            <div className="middle">
              <div className="bar-container">
                <div
                  className="bar-3"
                  style={{
                    width:
                      (RatingsData[0].three / RatingsData[0].total) * 100 + "%",
                  }}
                />
              </div>
            </div>
            <div className="side right">
              <div>{RatingsData[0].three}</div>
            </div>
            <div className="side">
              <div>2 star</div>
            </div>
            <div className="middle">
              <div className="bar-container">
                <div
                  className="bar-2"
                  style={{
                    width:
                      (RatingsData[0].two / RatingsData[0].total) * 100 + "%",
                  }}
                />
              </div>
            </div>
            <div className="side right">
              <div>{RatingsData[0].two}</div>
            </div>
            <div className="side">
              <div>1 star</div>
            </div>
            <div className="middle">
              <div className="bar-container">
                <div
                  className="bar-1"
                  style={{
                    width:
                      (RatingsData[0].one / RatingsData[0].total) * 100 + "%",
                  }}
                />
              </div>
            </div>
            <div className="side right">
              <div>{RatingsData[0].one}</div>
            </div>
          </div>
        </div>

        <div
          style={{ marginLeft: "50px" }}
          className="reviews flex-child scroll"
        >
          <br />
          <br />
          {RatingsData.map((val, index) => {
            if (index > 0) {
              return (
                <ReviewsCard
                  name={val.name}
                  date={val.date}
                  ratings={val.ratings}
                  review={val.review}
                />
              );
            }
          })}
        </div>
      </div>
    </>
  );
};

function showStars() {
  if (RatingsData[0].average == "1") {
    return (
      <>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star"></span>
        <span className="fa fa-star"></span>
        <span className="fa fa-star"></span>
        <span className="fa fa-star" />
      </>
    );
  } else if (RatingsData[0].average == "2") {
    return (
      <>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star"></span>
        <span className="fa fa-star"></span>
        <span className="fa fa-star" />
      </>
    );
  } else if (RatingsData[0].average == "3") {
    return (
      <>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star"></span>
        <span className="fa fa-star" />
      </>
    );
  } else if (RatingsData[0].average == "4") {
    return (
      <>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star" />
      </>
    );
  } else if (RatingsData[0].average == "5") {
    return (
      <>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked" />
      </>
    );
  }
}

export { showStars };
export default Ratings;
