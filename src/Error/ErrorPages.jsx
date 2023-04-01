import {
  Card,
  CardBody,
  CardHeader,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  Col,
  Button,
} from "reactstrap";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Error.css";

import img1 from "../images/404.png";
import SFNav from "../components/Navbar";

const ErrorPage = () => {
  let navigate = useNavigate();

  return (
    <>
      <SFNav />
      <div id="container">
        <div className="left">
          <div style={{ textAlign: "center" }}>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <h1 style={{ color: "white", fontSize: 40 }}>Page Not</h1>
            <h1 style={{ color: "white", fontSize: 40 }}>Found.</h1>
            <p style={{ color: "white", fontSize: 15 }}>
              Sorry, we can't find the page you are looking for.
            </p>
            <p style={{ color: "white", fontSize: 15 }}>
              {" "}
              We suggest you go to homepage while
            </p>
            <p style={{ color: "white", fontSize: 15 }}>
              we are fixing the problem.
            </p>

            <button
              className="btn"
              type="submit"
              onClick={() => {
                navigate("/");
              }}
            >
              Go to Home Page
            </button>
          </div>
        </div>

        <div className="right">
          <img
            style={{ width: 700, height: 600 }}
            src={img1}
            alt="not available"
          />
        </div>
      </div>
    </>
  );
};
export default ErrorPage;
