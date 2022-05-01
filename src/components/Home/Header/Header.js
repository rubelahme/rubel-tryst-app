import React from "react";
import Login from "../Login/Login";
import "./Header.css";
import img3 from "../../Img/Captureq.PNG";

const Header = () => {
  return (
    <>
      <section className="header">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <Login></Login>
            </div>
            <div className="col-md-6">
              <span className="sing">Sign</span>
              <span className="up"> up</span>
              <p className="NEW">NEW: We are now accepting client sign ups!</p>
              <p className="NEW1">
                Tryst.link is one of the fastest-growing escort platforms in the
                world. Built by the same team behind Switter!
              </p>
              <p className="NEW2">
                Please select which type of account you'd like to sign up for:
              </p>
              <div className="text-center">
                <button className="Provider">I am a Provider</button>
                <div>
                  <button className="Provider">I am a Client</button>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 mb-4">
              <img className="imgPic1" src={img3} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
