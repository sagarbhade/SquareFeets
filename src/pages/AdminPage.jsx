import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import pic from "../images/admin2.png";
import pic1 from "../images/admin1.png";
import CardGroup from "react-bootstrap/CardGroup";
import SFNav from "../components/Navbar";

export default function AdminPage() {
  return (
    <div>
      <SFNav />
      <h1 style={{ textAlign: "center", color: "red", fontSize: 50 }}>
        Welcome to Admin page !
      </h1>
      <hr />
      <CardGroup>
        <Card style={{ width: "40rem" }}>
          <Card.Img variant="top" src={pic} style={{ height: "30rem" }} />
          <Card.Body style={{ textAlign: "center" }}>
            <Card.Title
              style={{ textAlign: "center", color: "red", fontSize: 20 }}
            >
              Builder Details
            </Card.Title>
            <hr />
            <Card.Text>
              List of all builders on this website will be displayed.
            </Card.Text>
            <Link className="btn btn-warning " to="/AdminBuilderList">
              Click Here
            </Link>
          </Card.Body>
        </Card>
        <Card style={{ width: "40rem" }}>
          <Card.Img variant="top" src={pic1} style={{ height: "30rem" }} />
          <Card.Body style={{ textAlign: "center" }}>
            <Card.Title style={{ color: "red", fontSize: 20 }}>
              Property Details
            </Card.Title>
            <hr />
            <Card.Text>
              List of all property on this website will be displayed.
            </Card.Text>
            <Link className="btn btn-warning " to="/AdminPropList">
              Click Here
            </Link>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
}
