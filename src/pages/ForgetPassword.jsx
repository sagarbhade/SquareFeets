import "./styles/ChangePassword.css";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SFNav from "../components/Navbar";

export default function ForgetPassword() {
  const navigate = useNavigate();
  let localData = JSON.parse(localStorage.getItem("loginData"));
  const [input, setInput] = useState({
    email: "",
  });

  const [error, setError] = useState();

  const handleForm = (e) => {
    checkEmail(input);
    e.preventDefault();
  };

  const checkEmail = (data) => {
    console.log(data);
    axios.post("http://localhost:8083/api/auth/CheckUserEmail", data).then(
      (res) => {
        const resData = res.data;
        if (resData === true) {
          localStorage.setItem("username", input.email);
          axios
            .get(`http://localhost:8083/api/auth/SendOtp/${input.email}`)
            .then((res) => {
              if (res.status === 200) {
                navigate("/ForgetPassword2");
              }
            });
        } else {
          setError("Email is not registered");
        }
      },
      (err) => {
        console.log(err);
      }
    );
  };

  return (
    <div>
      <SFNav />
      <div
        className="mainDiv"
        style={{ marginTop: "60px", marginBottom: "100px" }}
      >
        <div className="cardStyle">
          <form name="signupForm" id="signupForm" onSubmit={handleForm}>
            <h2 className="formTitle">Forget Password</h2>

            <div className="inputDiv">
              <label className="inputLabel" for="password">
                Enter Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                onChange={(e) => {
                  setInput({ ...input, email: e.target.value });
                }}
              />
              <div>{error}</div>
            </div>

            <div className="buttonWrapper">
              <button
                type="submit"
                id="submitButton"
                className="submitButton pure-button pure-button-primary active menu-item"
                style={{
                  margin: "auto",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                Send OTP
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
