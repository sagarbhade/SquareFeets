import "./styles/HomeSection1.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function HowItWorks() {
  return (
    <div>
      <div className="how-it-works">
        <div className="container">
          <h2>How it Works</h2>

          <Container fluid>
            <Row>
              <Col>
                <div>
                  <span className="fas fa-home"></span>
                  <h4>Find a Property</h4>
                  <p>Search for your Dream House.</p>
                </div>
              </Col>
              <Col>
                <div>
                  <span className="fas fa-chart-line"></span>
                  <h4>Appointment</h4>
                  <p>Book your Appointment with one tap.</p>
                </div>
              </Col>
              <Col>
                <div>
                  <span className="fas fa-rupee-sign"></span>
                  <h4>Buy a Property</h4>
                  <p>You are very close from buying your Dream House.</p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}
