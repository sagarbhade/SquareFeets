import "./styles/Filter.css";

import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

export default function PropertyCardHz({ prop }) {
  return (
    <div>
      <div className="listResult">
        <Container className="container">
          <Row>
            <Col style={{ width: "50%" }}>
              <img
                src="https://static.toiimg.com/thumb/msid-66847168,width-400,resizemode-4/66847168.jpg"
                alt=".."
                className="siImg"
              />
            </Col>
            <Col style={{ width: "50%" }}>
              <div className="siTitle">
                <h1>{prop.propertyName}</h1>
                <h5>{prop.propertyType.propertyType}</h5>
              </div>

              <span className="siFeatures">
                <div>
                  <span>Rooms:{prop.rooms} </span>
                </div>
                <div>
                  <span>Area: {prop.area} Sq.Ft</span>
                </div>
                <div>
                  <span>City: {prop.address.city} </span>
                </div>
                <div>
                  <span>State: {prop.address.state}</span>
                </div>
              </span>
            </Col>
            <Col>
              <div className="siDetails" style={{ width: "50%" }}>
                <div className="siDetailTexts">
                  <span className="siPrice">{prop.price}</span>
                  <span className="siTaxOp">Includes taxes and fees</span>
                  <Link
                    to="/PropertiesInfo"
                    state={{ propId: prop.propertyId }}
                  >
                    <button className="siCheckButton">Property Details</button>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
