import "./styles/Roles.css";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

export default function Roles() {
  return (
    <div>
      <Container>
        <Row className="roles-container">
          <div className="agent">
            <div className="a-heading">
              <h1>Identify Yourself..!</h1>
              <h2>Explore Your Area</h2>
            </div>
          </div>
          {/* <Col className="m-1">
            <div class="bg-white rounded shadow-sm py-5 px-4 card">
              <img
                src="https://bootstrapious.com/i/snippets/sn-about/avatar-4.png"
                alt=""
                width="100"
                margin-left="20"
                className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm role-img"
              />
              <Button className="btn" variant="warning" size="sm">
                <Link
                  to="/Login"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Admin
                </Link>
              </Button>{" "}
            </div>
          </Col> */}
          <Col className="m-1">
            <div class="bg-white rounded shadow-sm py-5 px-4 card">
              <img
                src="https://bootstrapious.com/i/snippets/sn-about/avatar-3.png"
                alt=""
                width="100"
                className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm role-img"
              />
              <Button className="btn" variant="warning" size="sm">
                <Link
                  to="/Login"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  User
                </Link>
              </Button>{" "}
            </div>
          </Col>
          <Col className="m-1">
            <div class="bg-white rounded shadow-sm py-5 px-4 card">
              <img
                src="https://bootstrapious.com/i/snippets/sn-about/avatar-2.png"
                alt=""
                width="100"
                className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm role-img"
              />
              <Button className="btn" variant="warning" size="sm">
                <Link
                  to="/Login"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Builder
                </Link>
              </Button>{" "}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
