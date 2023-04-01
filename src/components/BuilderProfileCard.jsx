import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import pic from "../images/profile.webp";
import phone from "../images/phone.png";
import mail from "../images/mail.png";
import lodha from "../images/lodha.png";
import { Link } from "react-router-dom";
import useBuilderProfile from "../hooks/useBuilderProfile";

export default function BuilderProfileCard() {
  const { userData } = useBuilderProfile();
  console.log("userData", userData);
  return (
    <Card style={{ width: "100%" }}>
      <Card.Img
        variant="top"
        src={lodha}
        style={{ borderRadius: "50%", width: "180px", margin: "50px auto" }}
      />
      <Card.Body>
        <Card.Title>{userData.username}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
          <div>
            <span>
              <b>State:</b> {userData.state}
            </span>
            <br />
            <span>
              <b> City:</b> {userData.city}
            </span>
            <br />
            <span>
              <b> Number of Property Listings: </b>
              {userData.NumberOfProperties}
            </span>
            <br />
          </div>
          <div>
            <span>
              <img src={phone} alt="..." style={{ width: "15px" }} />
            </span>
            <span style={{ marginLeft: "10px", fontWeight: "bold" }}>
              {userData.mobileNo}
            </span>
          </div>
        </ListGroup.Item>
        <ListGroup.Item>
          <div>
            <span>
              <img src={mail} alt="..." style={{ width: "15px" }} />
            </span>
            <span style={{ marginLeft: "10px", fontWeight: "bold" }}>
              {userData.email}
            </span>
          </div>
        </ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Link to="/AddProperty">Add Property</Link>
        <br />
        <Link to="/ChangePassword">Change Password</Link>
      </Card.Body>
    </Card>
  );
}
