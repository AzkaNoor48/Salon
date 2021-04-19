import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./Footer";
//import Header from './components/header/Header'
import Body from './components/body/Body'
//import {Provider } from "react-redux"

const App = () => {
  return (
    <>
     
      <Router>
     
      <Body />
      <Footer />
      </Router>
      
     
    </>
  );
};

export default App;
