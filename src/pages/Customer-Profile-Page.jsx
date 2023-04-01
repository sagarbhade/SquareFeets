import { Col, Container, Row } from "react-bootstrap";
import CustomerProfileCard from "../components/CustomerProfileCard";

export default function CustomerProfilePage() {
  return (
    <div>
      <Container style={{ marginTop: "100px", marginBottom: "50px" }}>
        <Row>
          <Col></Col>
          <Col>
            <CustomerProfileCard />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}
