import React, { useEffect } from "react";
import AOS from "aos";
import Categorycard from "../Categorycard";
import Categorydata from "../Categorydata";
import Nav from "../Nav";

let count=0;
const Categorypage = (props) => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
  return (
   <>
  <Nav/>
   <link rel="stylesheet" href="assets/css/category.css" />
      <section className="wt-section bg-primary">
        <div className="container">
          <div className="row justify-content-md-center text-center pb-lg-4 mb-lg-5 mb-4" data-aos="fade-up" data-aos-easing="linear" data-aos-delay={100}>
         
            <div className="col-md-8 text-center w-md-50 mx-auto mb-0 ">
              <h2 className="mb-md-2">{Categorydata[0].spcateg}</h2>
            
              <p>There are many variations of passages of Lorem Ipsum available, but the majority</p>
            </div>
          </div>

          <div className="row">
         { Categorydata.map((val,index) =>{
           if(index>0){
            return(
              <Categorycard
            imgsrc={val.imgsrc}
            spname={val.spname}
            address={val.address}
            ratings={val.ratings}
            noOfratings={val.noOfratings}

           />
            );
           }
          })}

          </div>
          </div>
      </section>
    </>
  );
}

export default Categorypage;
