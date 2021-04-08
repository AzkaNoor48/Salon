import React, { useEffect } from "react";

const ReviewsCard = (props) => {
   
  return (
   <>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    <link rel="stylesheet" href="assets/css/ratings.css" />
    <div className="row" >
          <div className="col-sm-7">
            <hr />
            <div className="review-block" >
              <div className="flex-container" >
                <div className="col-sm-3 flex-child">
                  <div align="left" className="flex-container child1" style={{width: '500px'}}><div className="flex-child"><img src="http://dummyimage.com/60x60/666/ffffff&text=No+Image" className="review-block-img" /></div>
                    <div align="left" className="flex-child child2"  ><div className="review-block-name flex-child"><b>{props.name}</b></div>
                      <div className="review-block-date flex-child" >{props.date}</div>
                    </div></div></div>
                <div  className="review-block-rate flex-child">
                  <div>
                 
                  {(() => {
        if (props.ratings=="1") {
          return (
              <>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star" />
             </>
          )
        } else if (props.ratings=="2") {
          return (
            <>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star" />
             </>
          )
        } else if (props.ratings=="3") {
          return (
            <>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star" />
             </>
          )
        }
        else if (props.ratings=="4") {
          return (
            <>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star" />
             </>
          )
        }
        else if (props.ratings=="5") {
          return (
            <>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked" />
             </>
          )
        }
      })()}

                   </div>
                </div>
              </div>
              <div className="col-sm-9">
                <div className="review-block-description"> {props.review}</div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default ReviewsCard;
