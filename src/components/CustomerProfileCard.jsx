import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import mail from "../images/mail.png";
import "./styles/CustomerProfileCard.css";
import s1 from "../images/s1.png";
import { Link } from "react-router-dom";
import { useCustomerProfile } from "../hooks/useCustomerProfile";
import SFNav from "./Navbar";

export default function CustomerProfileCard() {
  const { userData } = useCustomerProfile();
  return (
    <div>
      <SFNav />
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={s1}
          style={{ borderRadius: "50%", width: "180px", margin: "50px auto" }}
        />
        <Card.Body>
          <Card.Title style={{ textAlign: "center" }}>
            {userData.username}
          </Card.Title>
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
              <br />
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
        <Card.Body style={{ textAlign: "center" }}>
          <Link to="/ChangePassword" className="active menu-item">
            Change Password
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}
