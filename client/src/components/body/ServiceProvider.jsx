import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./Footer";
import Nav from "./Nav";
import Ratings from "./Ratings";
import SalonHero from "./salonHero";
import Services from "./Services";

const Home = () => {
  return (
    <>
      <header id="top">
        <Nav />
      </header>
      <main role="main" class="mt-lg-5 m-0">
        <SalonHero />
        <Services />
        <br /> <br /> <br /> <br />
        <Ratings />
      </main>
    </>
  );
};

export default Home;
