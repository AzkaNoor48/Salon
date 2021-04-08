import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./About";
import Features from "./Features";
import Carousel from "./Carousel";
import Category from "./Category";
import ContactUs from "./ContactUs";
import Cart from "./Cart";
//import Portfolio from "./Portfolio";
import Footer from "./Footer";
import Nav from "./Nav";
import Services from "./Services";

const Home = () => {
  return (
    <>
      <header id="top">
        <Nav />
        <Carousel />
      </header>
      <main role="main" class="mt-lg-5 m-0">
        <Category />
        <Features />
        <About />
        <ContactUs />
      </main>
    </>
  );
};

export default Home;
