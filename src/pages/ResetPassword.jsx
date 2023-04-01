import "./styles/ChangePassword.css";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SFNav from "../components/Navbar";

export default function ResetPassword() {
  const navigate = useNavigate();
  let username = localStorage.getItem("username");
  const [error, setError] = useState();

  const [data, setData] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const [userData, setUserData] = useState({
    usernameOrEmail: username,
    newPassword: "",
  });

  console.log(username);
  console.log("data", data);
  console.log("userData", userData);
  const handleForm = (e) => {
    if (data.newPassword === data.confirmPassword) {
      postPassword(userData);
      navigate("/Login");
    } else {
      setError("Passwords are not matching, Please enter correct password");
    }
    e.preventDefault();
  };

  const postPassword = (d) => {
    axios.put("http://localhost:8083/api/auth/changePassword", d).then(
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
      <div
        className="mainDiv"
        style={{ marginTop: "60px", marginBottom: "100px" }}
      >
        <div className="cardStyle">
          <form name="signupForm" id="signupForm" onSubmit={handleForm}>
            <img src="" id="signupLogo" alt=".." />

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
                  setData({ ...data, newPassword: e.target.value });
                  setUserData({ ...userData, newPassword: e.target.value });
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
                  setData({ ...data, confirmPassword: e.target.value });
                }}
              />
              <div></div>
            </div>

            <div className="buttonWrapper">
              <button
                type="submit"
                id="submitButton"
                className="submitButton pure-button pure-button-primary"
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
