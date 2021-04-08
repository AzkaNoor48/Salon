import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./Footer";
import Body from './components/body/Body'
import {Provider } from "react-redux"

const App = () => {
  return (
    <>
      <Provider>
      <Router>
      <Body />
      </Router>
      <Footer />
      </Provider>
    </>
  );
};

export default App;
