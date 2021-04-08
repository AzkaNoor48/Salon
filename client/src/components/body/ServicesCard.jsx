import React from "react";

const ServicesCard = (props) => {
  return (
   <>
    <div className="col-md-6">
        <div className="package">
            <h5>{props.serviceName}</h5>
            <p>{props.serviceDesc}</p>
            <strong className="price"><small>Rs.</small>{props.price}</strong>
            <i className="fa fa-shopping-cart fa_custom fa-3x"></i>

        </div>{/* end package */}

    </div>{/* end col-md-6 */}
    </>
  );
}

export default ServicesCard;
