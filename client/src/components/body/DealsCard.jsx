import React, { useEffect } from "react";
import AOS from "aos";

const DealsCard = (props) => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
  return (
   <>
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    <link rel="stylesheet" href="assets/css/Deals.css" />
    <style dangerouslySetInnerHTML={{__html: "\n.checked {\n  color: orange;\n}\n" }} />
    <div className="col-md-4" >
      <div className="deals-card" style={{width: '21rem'}} data-aos="fade-right" data-aos-easing="linear" data-aos-delay={200}>
        
        <div className="deals-card-body">
          <h5>{props.spname}</h5>
    
         
    <div className="deals_card_info">
    <span className="deals_card_category2">{props.Dname}</span><br></br>
    <span className="deals_card_category">{props.Sname}
    <h2 className="deals_card_title2">{props.Ditems} </h2>
    <del className="deals_card_title2">{props.oldPrice} </del>
    <h2 className="deals_card_title1">{props.Price} </h2>

    <button className="deals_button">Book Now</button>
    
 </span>
    </div>
  
  
       
        </div>
      </div>
    </div>
 
    
  
   
    </>
  );
}

export default DealsCard;
