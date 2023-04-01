import "./styles/ChangePassword.css";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SFNav from "../components/Navbar";

export default function ChangePassword() {
  const navigate = useNavigate();
  let localData = JSON.parse(localStorage.getItem("loginData"));
  const [input, setInput] = useState({
    username: localData.username,
    newPassword: "",
    confirmPassword: "",
  });

  const [data, setData] = useState({
    usernameOrEmail: localData.username,
    newPassword: "",
  });

  const [error, setError] = useState();

  const handleForm = (e) => {
    console.log(input);
    if (input.newPassword === input.confirmPassword) {
      console.log("correct password");
      setError("");
      postPassword(data);
      console.log(data);
      navigate("/Login");
    } else {
      setError("Passwords are not matching, Please enter correct password");
    }
    e.preventDefault();
  };

  const postPassword = (userData) => {
    axios.put("http://localhost:8083/api/auth/changePassword", userData).then(
      (res) => {
        console.log(res);
        setError("Password changed");
      },
      (err) => {
        console.log(err);
        setError("Password not changed");
      }
    );
  };

  return (
    <div>
      <SFNav />
      <div className="mainDiv" style={{ marginTop: "70px" }}>
        <div className="cardStyle">
          <form name="signupForm" id="signupForm" onSubmit={handleForm}>
            <h2 className="formTitle">Change Password</h2>

            <div className="inputDiv">
              <label className="inputLabel" for="password">
                Enter New Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                onChange={(e) => {
                  setInput({ ...input, newPassword: e.target.value });
                  setData({ ...data, newPassword: e.target.value });
                }}
              />
            </div>

            <div className="inputDiv">
              <label className="inputLabel" for="confirmPassword">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                required
                onChange={(e) => {
                  setInput({ ...input, confirmPassword: e.target.value });
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
                Submit Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
