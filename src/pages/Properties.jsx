import { Container, Row, Col } from "react-bootstrap";
import Filter from "../components/Filter";
import PropertyCardHz from "../components/Propert-Card-Hz";
import { useState } from "react";
import usePropertyListings from "../hooks/usePropertyListings";
import SFNav from "../components/Navbar";

export default function Properties() {
  const [typeFilter, setTypeFilter] = useState([1, 2, 3, 4, 5]);
  const [typeFilter2, setTypeFilter2] = useState([
    "Pre-Launch",
    "On Going",
    "Completed",
  ]);
  const [typeFilter3, setTypeFilter3] = useState([1, 2, 3, 4]);

  const { userData } = usePropertyListings();
  console.log(userData);

  return (
    <div>
      <SFNav />
      <div>
        <Container fluid>
          <Row>
            <Col
              xs={4}
              style={{ position: "sticky", top: "0px", height: "100%" }}
            >
              <div style={{ position: "stick", top: 0 }}>
                <div className="listSearch">
                  <Container className="container">
                    <Row>
                      <Col xs={4} className="ml-4 option-title">
                        <label for="sel1" class="form-label">
                          Type of Property:
                        </label>
                      </Col>
                      <Col className="mt-2 mb-2">
                        <select
                          class="form-select"
                          id="sel1"
                          name="sellist1"
                          onChange={(e) => {
                            setTypeFilter(e.target.value);
                          }}
                        >
                          <option value="0 , 1, 2, 3, 4, 5">Select</option>
                          <option value="1">Residential</option>
                          <option value="2">Residential-Building</option>
                          <option value="3">Residential-Villa</option>
                          <option value="4">Residential-Bunglow</option>
                          <option value="5">Commercial</option>
                        </select>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={4} className="ml-4 option-title">
                        <label for="sel1" class="form-label">
                          Construction Status:
                        </label>
                      </Col>
                      <Col className="mt-2 mb-2">
                        <select
                          class="form-select"
                          id="sel1"
                          name="sellist1"
                          onChange={(e) => {
                            setTypeFilter2(e.target.value);
                          }}
                        >
                          <option value="Pre-Launch On Going Completed">
                            select
                          </option>
                          <option value="Pre-Launch">Pre-Launch</option>
                          <option value="On Going">On Going</option>
                          <option value="Completed">Completed</option>
                        </select>
                      </Col>
                    </Row>
                    <hr />
                    <Row>
                      <Col xs={4} className="ml-4 option-title">
                        <label for="sel1" class="form-label">
                          Price:
                        </label>
                      </Col>
                      <Col className="mt-2 mb-2">
                        <select class="form-select" id="sel1" name="sellist1">
                          <option value="0">Select</option>
                          <option value="1">0-50 lac</option>
                          <option value="2">50 lac-1 Cr</option>
                          <option value="3">1-1.5 Cr</option>
                          <option value="4">1.5-2 Cr</option>
                          <option value="5">2-2.5 Cr</option>
                          <option value="5">2 Cr and above</option>
                        </select>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={4} className="ml-4 option-title">
                        <label for="sel1" class="form-label">
                          No of Rooms:
                        </label>
                      </Col>
                      <Col className="mt-2 mb-2">
                        <select
                          class="form-select"
                          id="sel1"
                          name="sellist1"
                          onChange={(e) => {
                            setTypeFilter3(e.target.value);
                          }}
                        >
                          <option value="0">Select</option>
                          <option value="1">1 BHK</option>
                          <option value="2">2 BHK</option>
                          <option value="3">3 BHK</option>
                          <option value="4">4 BHK and Above</option>
                        </select>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={4} className="ml-4 option-title">
                        <label for="sel1" class="form-label">
                          No. of Floors:
                        </label>
                      </Col>
                      <Col className="mt-2 mb-2">
                        <select class="form-select" id="sel1" name="sellist1">
                          <option value="0">Select</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5 and above</option>
                        </select>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={4} className="ml-4  option-title">
                        <label for="sel1" class="form-label">
                          Rera:
                        </label>
                      </Col>
                      <Col className="mt-2 mb-2">
                        <select class="form-select" id="sel1" name="sellist1">
                          <option value="0">Select</option>
                          <option value="1">Registered</option>
                          <option value="2">Not Registered</option>
                        </select>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={4} className="ml-4 option-title">
                        {" "}
                        <label for="sel1" class="form-label">
                          Area:
                        </label>
                      </Col>
                      <Col className="mt-2 mb-2">
                        <select class="form-select" id="sel1" name="sellist1">
                          <option value="0">Select</option>
                          <option value="1">0-1000 sqft</option>
                          <option value="2">1000-2000 sqft</option>
                          <option value="3">2000-3000 sqft</option>
                        </select>
                      </Col>
                    </Row>
                    <button
                    type="submit"
                    className="mt-4 btn btn-warning d-flex justify-content-center align-items-center">
                    Search
                  </button>
                  </Container>
                </div>
              </div>
              
            </Col>
            
            <Col xs={8} style={{ marginTop: "100px", marginBottom: "10px" }}>
              {userData
                .filter((el) =>
                  typeFilter.includes(el.propertyType.propertyTypeId)
                )
                .filter((el) => typeFilter2.includes(el.constructionStatus))
                .filter((el) => typeFilter3.includes(el.rooms))
                .map((p) => {
                  return <PropertyCardHz prop={p} />;
                })}
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
