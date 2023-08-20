import React from "react";
import Login from "../Login/Login";
import "./Header.css";

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
              <p className="NEW">
                Tryst.link is one of the fastest-growing escort platforms in the
                world. Built by the same team behind Switter!
              </p>
              <p className="NEW2">
                Please select which type of account you'd like to sign up for:
              </p>
              <div>
                <button className="Provider">I am a Provider</button>
                <span>
                  <button className="Provider ms-2">I am a Client</button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
