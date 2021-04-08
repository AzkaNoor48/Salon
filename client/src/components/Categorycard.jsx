import React, { useEffect } from "react";
import AOS from "aos";

const Categorycard = (props) => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
  return (
   <>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    <link rel="stylesheet" href="assets/css/category.css" />
    <style dangerouslySetInnerHTML={{__html: "\n.checked {\n  color: orange;\n}\n" }} />
    <div className="col-md-4" >
    <a href="/serviceprovider"><div className="categ-card" style={{width: '21rem'}} data-aos="fade-right" data-aos-easing="linear" data-aos-delay={200}>
        <img src={props.imgsrc} className="categ-card-img-top" alt="img" />
        <div className="categ-card-body">
          <h5>{props.spname}</h5>
          <p className="card-text">{props.address}</p>
          <span style={{marginLeft: "15px",marginBottom: "15px"}}  class="fa fa-star checked"> <span style={{color: "black"}}><b> {props.ratings}/5 </b></span><span style={{color: "#848484"}}>{props.noOfratings} Ratings</span></span>
        </div>
      </div></a>
    </div>
    </>
  );
}

export default Categorycard;
