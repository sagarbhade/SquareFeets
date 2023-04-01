import BuilderProfileCard from "../components/BuilderProfileCard";
import PropertyCard from "../components/PropertyCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";
import axios from "axios";
import { useProperties } from "../hooks/useProperties";
import SFNav from "../components/Navbar";

export default function BuilderProfile() {
  const { properties } = useProperties();
  const data = properties.property;
  console.log("data ", data);
  console.log("properties", properties);
  return (
    <div>
      <SFNav />
      <Container style={{ marginTop: "100px" }}>
        <Row>
          <Col xs={3} style={{ padding: "8px" }}>
            <BuilderProfileCard />
          </Col>
          <Col xs={9} style={{ padding: "8px" }}>
            <Row>
              <h1>Properties Offered</h1>
            </Row>
            <Row>
              {properties.map((p) => {
                return (
                  <Col
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                    style={{ padding: "8px" }}
                    // key={p.propertyId}
                  >
                    <PropertyCard prop={p} />
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
