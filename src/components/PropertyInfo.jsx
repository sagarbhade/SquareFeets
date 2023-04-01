import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import propimg from "../images/prop.jpg";
import { Badge, List } from "reactstrap";
import contact from "../images/contact.png";
import "./styles/Property.css";
import date from "../images/date.png";
import Appointment from "./Appointment";
import { useLocation } from "react-router-dom";
import axios from "axios";
import SFNav from "./Navbar";

export default function PropertyInfo() {
  const [address, setAddress] = useState([]);
  const [propertyType, setPropertyType] = useState([]);
  const [user, setUser] = useState([]);
  const [appointment, setAppointment] = useState([]);

  const photos = [
    {
      src: "https://static.toiimg.com/thumb/msid-66847168,width-400,resizemode-4/66847168.jpg",
    },
    {
      src: "https://static.toiimg.com/thumb/msid-66847168,width-400,resizemode-4/66847168.jpg",
    },
    {
      src: "https://static.toiimg.com/thumb/msid-66847168,width-400,resizemode-4/66847168.jpg",
    },
    {
      src: "https://static.toiimg.com/thumb/msid-66847168,width-400,resizemode-4/66847168.jpg",
    },
    {
      src: "https://static.toiimg.com/thumb/msid-66847168,width-400,resizemode-4/66847168.jpg",
    },
    {
      src: "https://static.toiimg.com/thumb/msid-66847168,width-400,resizemode-4/66847168.jpg",
    },
  ];

  const [propProfile, setPropProfile] = useState([]);

  const location = useLocation();
  const { propId } = location.state;

  useEffect(() => {
    loadPropertyProfile();
  }, []);

  const loadPropertyProfile = async () => {
    console.log(propId);
    const result = await axios.get(
      `http://localhost:8083/api/auth/property/${propId}`
    );
    setPropProfile(result.data);
    setPropertyType(result.data.propertyType);
    setAddress(result.data.address);
    console.log(address);
    console.log("propertyType", propertyType);
  };

  console.log(propProfile);
  return (
    <div>
      <SFNav />
      <Container>
        <Row>
          <Col>
            <h1 className="propertyTitle text-center">
              {propProfile.propertyName}
            </h1>
            <hr />
            <h5>
              <span>City: {address.city} </span>
            </h5>
            <h5>
              <span>State: {address.state} </span>
            </h5>
            <span className="propertyDistance">Excellent location</span>{" "}
            <span className="propertyPriceHighlight">Excellent Amenities</span>
          </Col>
        </Row>
        <Row>
          <Col>
            <img
              className="propimg"
              alt="Sample"
              style={{ width: "1140px" }}
              src={propimg}
            />
          </Col>
          <Col>
            <div className="propertyDetails">
              <div className="propertyDetailsTexts">
                <h1 className="propertyTitle">Stay in the heart of City</h1>
                <Badge color="success">Verified</Badge>{" "}
                <Badge color="primary"> RERA No : </Badge> <hr />
                <h1 style={{ color: "orange" }}>Overview</h1>
                <p className="propertyDesc">
                  <List>
                    <li>Type : {propertyType.propertyType}</li>
                    <li>Project Status : {propProfile.constructionStatus}</li>
                    <li>Apartment area : {propProfile.area} sqft</li>
                    <li>Price : Rs. {propProfile.price} /sqft</li>
                    <li>BHK : {propProfile.rooms}</li>
                    <li>Rooms : {propProfile.rooms}</li>
                    <li>Other : Aminities (Parking, Swimming Pool, etc)</li>
                  </List>
                </p>
                <hr />
                <h1 style={{ color: "orange" }}>Property Description</h1>
                <p className="propertyDesc"></p>
              </div>
              <div className="propertyDetailsPrice">
                <img
                  alt="Sample"
                  src={contact}
                  style={{ height: "20rem", width: "30rem" }}
                />
                <h1
                  style={{
                    textAlign: "center",
                    "padding-top": 10,
                    color: "grey",
                    fontSize: 40,
                  }}
                >
                  Contact Us
                </h1>
                <hr />
                <span>
                  <b>Call Us : 022-554126</b>
                </span>
                <h1>
                  <b>Email : property@gmail.com</b>
                </h1>
                <button>Book your Dream !</button>
              </div>
            </div>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 style={{ color: "orange" }}>Gallary</h1>
            <div className="propertyImages">
              {photos.map((photo, i) => (
                <div className="propertyImgWrapper my-1" key={i}>
                  <img src={photo.src} alt="" className="propertyImg" />
                </div>
              ))}
            </div>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col></Col>
          <Col>
            <h4 style={{ "padding-left": 200, color: "green" }}>
              Website for more details :{" "}
            </h4>
            <hr />
            <div style={{ textAlign: "center" }}>
              <div
                className="propertyDetailsPrice"
                style={{
                  "padding-left": 40,
                  "padding-right": 150,
                  height: "40rem",
                  width: "40rem",
                }}
              >
                <img
                  alt="Sample"
                  src={date}
                  style={{ height: "20rem", width: "35rem" }}
                />
                <hr />
                <span>
                  <div style={{ "padding-left": 150 }}>
                    <Appointment />
                  </div>
                </span>
                <div>
                  <h2
                    style={{
                      "padding-left": 80,
                      "padding-top": 20,
                      color: "green",
                    }}
                  >
                    Schedule your Dream !
                  </h2>
                </div>
              </div>
            </div>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}
