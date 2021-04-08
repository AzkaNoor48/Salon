import React, { useEffect } from "react";
import AOS from "aos";
import DealsCard from "./DealsCard";
import DealsCombo from "./DealsCombo";

let count=0;
const DealsPage=()=>{
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return(
  <>
  <link rel="stylesheet" href="assets/css/Deals.css" />
      <section className="wt-section bg-primary">
        <div className="container">
          <div className="row justify-content-md-center text-center pb-lg-4 mb-lg-5 mb-4" data-aos="fade-up" data-aos-easing="linear" data-aos-delay={100}>
            <div className="col-md-8 text-center w-md-50 mx-auto mb-0 ">
            <h1 className="deals_heading_style">Latest DEALS</h1>
              
            </div>
          </div>

          <div className="row">
 
         { DealsCombo.map((val,index) =>{

            return(
              <DealsCard
            Dname={val.Dname}  
            Ditems={val.Ditems}
            imgD={val.imgD}
            Sname={val.Sname}
            Price={val.Price}
            oldPrice={val.oldPrice} 
           />
            );
          })}

          </div>
          </div>
      </section>
    </>
  
  );
        }

  

export default DealsPage;
