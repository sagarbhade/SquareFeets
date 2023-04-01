import "./styles/ChangePassword.css";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SFNav from "../components/Navbar";

export default function ForgetPassword2() {
  const navigate = useNavigate();

  const [input, setInput] = useState({
    otp: "",
  });

  const [error, setError] = useState();

  const handleForm = (e) => {
    verifyOtp(input);
    e.preventDefault();
  };

  const verifyOtp = (data) => {
    axios
      .get(`http://localhost:8083/api/auth/VerifyOtp/${data.otp}`)
      .then((res) => {
        if (res.data === true) {
          navigate("/ResetPassword");
        } else {
          setError("Invalid OTP");
        }
      });
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
            <h2 className="formTitle">Verify OTP</h2>

            <div className="inputDiv">
              <label className="inputLabel" for="password">
                Enter OTP
              </label>
              <input
                type="text"
                id="OTP"
                name="OTP"
                required
                onChange={(e) => {
                  setInput({ ...input, otp: e.target.value });
                }}
              />
              <div>{error}</div>
            </div>

            <div className="buttonWrapper">
              <button
                type="submit"
                id="submitButton"
                className="submitButton pure-button pure-button-primary  active menu-item"
                style={{
                  margin: "auto",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                Verify OTP
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
