import React, { useState } from "react";

const PAGE_SERVICES = "ShowServices";
const PAGE_CART = "Cart";

function Cart() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_SERVICES);

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  const getCartTotal = () => {
    return cart.reduce((sum, { quantity }) => sum + quantity, 0);
  };

  const addToCart = (service) => {
    setCart([...cart, { ...service }]);
  };

  const removeFromCart = (serviceToRemove) => {
    setCart(cart.filter((service) => service !== serviceToRemove));
  };
  const [Data] = useState([
    {
      category: "Makeup",
      serviceName: "Party Makeup",
      serviceDesc: "we offer the best party makeup",
      price: "1500",
    },
    {
      category: "Makeup",
      serviceName: "Bridal Makeup",
      serviceDesc: "we offer the best bridal makeup",
      price: "10000",
    },
    {
      category: "Makeup",
      serviceName: "No Makeup Look",
      serviceDesc: "we offer the best bridal makeup",
      price: "3000",
    },
    {
      category: "Hair",
      serviceName: "Hair Styling",
      serviceDesc: "we offer the best hair styling",
      price: "2000",
    },
    {
      category: "Hair",
      serviceName: "Step Cutting",
      serviceDesc: "we offer the best hair cut",
      price: "1000",
    },
    {
      category: "Hair",
      serviceName: "Layers Cutting",
      serviceDesc: "we offer the best hair cut",
      price: "1000",
    },
    {
      category: "Facial",
      serviceName: "Whitening Facial",
      serviceDesc: "we offer the best bridal makeup",
      price: "10000",
    },
    {
      category: "Facial",
      serviceName: "Cleansing Facial",
      serviceDesc: "we offer the best bridal makeup",
      price: "10000",
    },
    {
      category: "Hair",
      serviceName: "Layers Cutting",
      serviceDesc: "we offer the best hair cut",
      price: "1000",
    },
  ]);

  const renderServices = () => (
    <React.Fragment>
      <h1 className="service-heading">Services</h1>
      {Data.map((service, idx) => (
        <div className="service-container">
          <h3>{service.serviceName}</h3>
          <p>{service.serviceDesc}</p>
          <strong className="price">
            <small>Rs.</small>
            {service.price}
          </strong>
          <br /> <br />
          <button onClick={() => addToCart(service)}>Add to Cart</button>
          <br /> <br />
        </div>
      ))}
    </React.Fragment>
  );

  const renderCart = () => (
    <React.Fragment>
      <h1 className="service-heading">Cart</h1>
      {cart.map((service, idx) => (
        <div className="service-container">
          <h3>{service.serviceName}</h3>
          <p>{service.serviceDesc}</p>
          <strong className="price">
            <small>Rs.</small>
            {service.price}
          </strong>
          <br /> <br />
          <button onClick={() => removeFromCart(service)}>Remove</button>
          <br /> <br />
        </div>
      ))}
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <header>
        <p>
          I will add the styles once the service provider page is made (so the
          styling matches). And I'll also have to link to the actual services
          instead of these dummy services which will cause changes in this code.
          Please review the code if you can and provide feedback to improve it.
          Working on the quantity functionality.
        </p>
        <button onClick={() => navigateTo(PAGE_CART)}>
          Go to Cart ({cart.length})
        </button>
        &nbsp;
        <button onClick={() => navigateTo(PAGE_SERVICES)}>View Services</button>
      </header>
      {page === PAGE_SERVICES && renderServices()}
      {page === PAGE_CART && renderCart()}
    </React.Fragment>
  );
}

export default Cart;
