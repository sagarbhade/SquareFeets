import React, { useState } from "react";
import "./styles/UpdateProperty.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useLocation } from "react-router-dom";
import SFNav from "../components/Navbar";

export default function UpdateProperty() {
  const navigate = useNavigate();

  const location = useLocation();
  const { propertyId } = location.state;
  console.log(propertyId);

  let localData = JSON.parse(localStorage.getItem("loginData"));

  const [property, setProperty] = useState({
    propertyId: propertyId,
    propertyName: "",
    details: "",
    price: "",
    constructionStatus: "",
    reraReg: "",
    area: "",
    rooms: "",
    plotNo: "",
    street: "",
    landmark: "",
    city: "",
    state: "",
    pincode: "",
    propertyTypeId: "",
    website: "",
    builderId: localData.builderId,
  });

  const handleForm = (e) => {
    console.log(property);
    postFormData(property);
    e.preventDefault();
  };

  const postFormData = (data) => {
    axios.put("http://localhost:8083/api/auth/updateProperty", data).then(
      (res) => {
        navigate("/BuilderProfile");
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  };

  return (
    <div>
      <SFNav />
      <div
        className="wrapper"
        style={{ marginTop: "100px", marginBottom: "60px" }}
      >
        <div className="form-left">
          <p className="text">
            <h1>Update Property</h1>
          </p>
        </div>
        <form className="form-right" onSubmit={handleForm}>
          <div className="row">
            <div className="mb-3">
              <label>Property Name</label>
              <input
                type="text"
                className="input-field"
                name="pname"
                id="pname"
                onChange={(e) => {
                  setProperty({ ...property, propertyName: e.target.value });
                }}
                required
              />
            </div>
          </div>

          <div className="mb-3">
            <label>Area(per SqFt):</label>
            <input
              type="number"
              className="input-field"
              required
              name="area"
              id="area"
              onChange={(e) => {
                setProperty({ ...property, area: e.target.value });
              }}
            />
          </div>

          <div className="mb-3">
            <label>Price(per SqFt):</label>
            <input
              type="number"
              className="input-field"
              required
              name="price"
              id="price"
              onChange={(e) => {
                setProperty({ ...property, price: e.target.value });
              }}
            />
          </div>

          <div className="row">
            <label>Address</label>
            <div className="col-sm-6 mb-3">
              <input
                type="Text"
                placeholder="Plot No."
                className="input-field"
                name="plotNo"
                id="plotNo"
                onChange={(e) => {
                  setProperty({ ...property, plotNo: e.target.value });
                }}
              />
            </div>
            <div className="col-sm-6 mb-3">
              <input
                type="Text"
                placeholder="Street"
                className="input-field"
                name="street"
                id="street"
                onChange={(e) => {
                  setProperty({ ...property, street: e.target.value });
                }}
              />
            </div>
            <div className="col-sm-6 mb-3">
              <input
                type="Text"
                placeholder="Landmark"
                className="input-field"
                name="landmark"
                id="landmark"
                onChange={(e) => {
                  setProperty({ ...property, landmark: e.target.value });
                }}
              />
            </div>
            <div className="col-sm-6 mb-3">
              <input
                type="Text"
                placeholder="City"
                className="input-field"
                name="city"
                id="city"
                onChange={(e) => {
                  setProperty({ ...property, city: e.target.value });
                }}
                required
              />
            </div>
            <div className="col-sm-6 mb-3">
              <input
                type="dropdown"
                placeholder="State"
                className="input-field"
                name="state"
                id="state"
                onChange={(e) => {
                  setProperty({ ...property, state: e.target.value });
                }}
                required
              />
            </div>
            <div className="col-sm-6 mb-3">
              <input
                type="number"
                placeholder="Pin"
                className="input-field"
                name="address"
                required
                onChange={(e) => {
                  setProperty({ ...property, pincode: e.target.value });
                }}
              />
            </div>
          </div>

          <div className="row">
            <div className="mb-3">
              <label>Rera No:</label>
              <input
                type="text"
                className="input-field"
                required
                name="rnumber"
                id="rnumber"
                onChange={(e) => {
                  setProperty({ ...property, reraReg: e.target.value });
                }}
              />
            </div>
          </div>
          <div className="row">
            <div className="lsOptionItem">
              <label for="sel1" class="form-label">
                Type of Property:
              </label>
              <select
                class="form-select"
                id="sel1"
                name="sellist1"
                onChange={(e) => {
                  console.log(e.target.value);
                  setProperty({
                    ...property,
                    propertyTypeId: e.target.value,
                  });
                }}
              >
                <option value="0">Select</option>
                <option value="1">Residential</option>
                <option value="2">Residential-Building</option>
                <option value="3">Residential-Villa</option>
                <option value="4">Residential-Bunglow</option>
                <option value="5">Commercial</option>
              </select>
            </div>
          </div>
          <div className="mb-3">
            <label>No. of Rooms:</label>
            <input
              type="number"
              className="input-field"
              required
              name="rooms"
              id="rooms"
              placeholder="e.g 1 BHK"
              onChange={(e) => {
                setProperty({ ...property, rooms: e.target.value });
              }}
            />
          </div>
          <div className="lsOptionItem">
            <label for="sel2" class="form-label">
              Status of Construction:
            </label>
            <select
              class="form-select"
              id="sel2"
              name="sellist2"
              onChange={(e) => {
                console.log(e.target.value);
                setProperty({
                  ...property,
                  constructionStatus: e.target.value,
                });
              }}
            >
              <option value="0">Select</option>
              <option value="Pre-Launch">Pre-Launch</option>
              <option value="On-Going">On-Going</option>
              <option value="Completed">Completed</option>
            </select>
          </div>

          <div className="mb-3">
            <label>Property Description:</label>
            <input
              type="text"
              className="input-field"
              required
              name="desc"
              id="desc"
              onChange={(e) => {
                setProperty({ ...property, details: e.target.value });
              }}
            />
          </div>
          <div className="mb-3">
            <label>Website</label>
            <input
              type="text"
              className="input-field"
              required
              name="website"
              id="website"
              placeholder="e.g. abc.com"
              onChange={(e) => {
                setProperty({ ...property, website: e.target.value });
              }}
            />
          </div>

          {/* <div class="mb-3 mt-3">
            <label for="carImage" class="form-label">
              Property:
            </label>
            <input
              type="file"
              name="propImg"
              onChange={(e) => {
                setProperty({ ...property, propImg: e.target.value });
              }}
            />
          </div> */}

          <div className="form-field">
            <input
              type="submit"
              value="Update"
              className="register"
              name="register"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
