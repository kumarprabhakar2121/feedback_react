import React, { useState } from "react";
import "../index.css";
import "../style/c.css";
import "../style/signup.css";
import "../style/HomePage.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// toast.configure();

const HomePage = () => {
  return (
    <>
      <div className="homePageParent">
        <div className="container homeDiv">
          <div className="jumbotron">
            <h1> Welcome to Student Feedback System </h1>
          </div>
          {/* <button className="btn btn-lg btn-primary">this is a button</button> */}
        </div>
      </div>
    </>
  );
};

export default HomePage;
