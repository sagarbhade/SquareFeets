import "./styles/Filter.css";

import { Container, Row, Col } from "react-bootstrap";

export default function Filter() {
  return (
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
                // onChange={(e) => {
                //   setTypeFilter(e.target.value);
                // }}
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
                // onChange={(e) => {
                //   setTypeFilter2(e.target.value);
                // }}
              >
                <option value="Pre-Launch On Going Completed">select</option>
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
              <select class="form-select" id="sel1" name="sellist1">
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
        </Container>
      </div>
    </div>
  );
}

{
  /* <div>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search Filter</h1>
            <hr />

            <div className="lsOptionItem">
              <label for="sel1" class="form-label">
                Type of Property:
              </label>
              <select
                class="form-select"
                id="sel1"
                name="sellist1"
                // onChange={(e) => {
                //   setTypeFilter(e.target.value);
                // }}
              >
                <option value="0 , 1, 2, 3, 4, 5">Select</option>
                <option value="1">Residential</option>
                <option value="2">Residential-Building</option>
                <option value="3">Residential-Villa</option>
                <option value="4">Residential-Bunglow</option>
                <option value="5">Commercial</option>
              </select>
            </div>

            <div className="lsOptionItem">
              <label for="sel1" class="form-label">
                Construction Status:
              </label>
              <select
                class="form-select"
                id="sel1"
                name="sellist1"
                // onChange={(e) => {
                //   setTypeFilter2(e.target.value);
                // }}
              >
                <option value="Pre-Launch On Going Completed">select</option>
                <option value="Pre-Launch">Pre-Launch</option>
                <option value="On Going">On Going</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
            <div className="lsItem">
              <hr />
              <label>Other Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <label for="sel1" class="form-label">
                    Price:
                  </label>
                  <select class="form-select" id="sel1" name="sellist1">
                    <option value="0">Select</option>
                    <option value="1">0-50 lac</option>
                    <option value="2">50 lac-1 Cr</option>
                    <option value="3">1-1.5 Cr</option>
                    <option value="4">1.5-2 Cr</option>
                    <option value="5">2-2.5 Cr</option>
                    <option value="5">2 Cr and above</option>
                  </select>
                </div>

                <div className="lsOptionItem">
                  <label for="sel1" class="form-label">
                    No of Rooms:
                  </label>
                  <select class="form-select" id="sel1" name="sellist1">
                    <option value="0">Select</option>
                    <option value="1">1 BHK</option>
                    <option value="2">2 BHK</option>
                    <option value="3">3 BHK</option>
                    <option value="4">4 BHK and Above</option>
                  </select>
                </div>

                <div className="lsOptionItem">
                  <label for="sel1" class="form-label">
                    No. of Floors:
                  </label>
                  <select class="form-select" id="sel1" name="sellist1">
                    <option value="0">Select</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5 and above</option>
                  </select>
                </div>

                <div className="lsOptionItem">
                  <label for="sel1" class="form-label">
                    Rera:
                  </label>
                  <select class="form-select" id="sel1" name="sellist1">
                    <option value="0">Select</option>
                    <option value="1">Registered</option>
                    <option value="2">Not Registered</option>
                  </select>
                </div>

                <div className="lsOptionItem">
                  <label for="sel1" class="form-label">
                    Area:
                  </label>
                  <select class="form-select" id="sel1" name="sellist1">
                    <option value="0">Select</option>
                    <option value="1">0-1000 sqft</option>
                    <option value="2">1000-2000 sqft</option>
                    <option value="3">2000-3000 sqft</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */
}
