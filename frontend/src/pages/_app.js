import "../styles/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavbarMenu, Footer } from "../components";
import { useState, useEffect } from "react";
import axios from "axios";

function MyApp({ Component, pageProps }) {

  //turn on for local development
  //axios.defaults.baseURL = 'http://localhost:8000/';
  
  return (
    <div className="background1">
    <div className="background2">
    <div className="app">
      <NavbarMenu />
      <Component {...pageProps} />
      <div style={{ marginLeft:"300px"}}>
      <Footer />
      </div>
      
    </div>
    </div>
    </div>
  );
}

export default MyApp;
