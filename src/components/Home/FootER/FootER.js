import React from "react";
import "./FootER.css";
import img4 from "../../Img/total.png";

const FootER = () => {
  return (
    <>
      <div className=" footerArea mt-3">
        <div className="pt-5 container pb-5">
          <div className="row total">
            <div className="col-md-4">
              <div>
                <img className="Img4 pb-3" src={img4} alt="" />
              </div>
              <div className="text-white">
                <p>© 2018–2023, Assembly Four</p>
              </div>
            </div>
            <div className="col-md-4 text-white">
              <div className="row">
                <div className="col-md-6">
                  <p>Home</p>
                  <p>Memberships & Pricing</p>
                  <p>Sign Up</p>
                  <p>Login</p>
                </div>
                <div className="col-md-6">
                  {" "}
                  <p>Locations</p>
                  <p>All Escorts</p>
                  <p>Backpage Alternatives</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="row text-white">
                <div className="col-md-6">
                  <p>Blog </p>
                  <p>TLC Donation Matching</p>
                  <p>Resources</p>
                  <p>#AcceptanceMatters</p>
                  <p>Escort Terms</p>
                  <p>Tryst.link FAQ</p>
                  <p>Sex Work FAQ</p>
                </div>
                <div className="col-md-6">
                  <p>Help / Support</p>
                  <p>About</p>
                  <p>Social</p>
                  <p>Terms</p>
                  <p>Privacy</p>
                  <p>Legal Notices</p>
                  <p>Anti-Exploitation Policy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FootER;
