import React from "react";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./IdVerify.css";

const IdVerify = () => {
  return (
    <>
      <div className="verify">
        <div className="container">
          {/* <div className="row">

            <div className="col-lg-5">
              <div>
                <div className="verify1">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <span className="verify2">Email Verified</span>
                  <div>
                    <a
                      className="btn btn-warning w-100"
                      href="https://www.google.com/"
                      rel="noopener noreferrer"
                    >
                      <p className=" fw-bold fs-5 mt-2 mb-2 pt-2 pb-1">
                        Go to Home
                        <span className="icon2">
                          {" "}
                          <FontAwesomeIcon icon={faArrowRight} />
                        </span>
                      </p>
                    </a>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
            <div className="col-lg-7"></div>
          </div> */}
          <div className="row">
            <div className="col-md-12">
              <div className="article">
                <div className="LinkOne">
                  <div>
                    <div>
                      <FontAwesomeIcon className="Email" icon={faEnvelope} />
                      <span className="Email">Email Verified</span>
                      <div>
                        <a
                          className="btn btn-danger"
                          href="https://www.google.com/"
                          rel="noopener noreferrer"
                        >
                          <div className="fw-bold">
                            Go to Home
                            <span>
                              {" "}
                              <FontAwesomeIcon icon={faArrowRight} />
                            </span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IdVerify;
