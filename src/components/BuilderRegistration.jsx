import "./styles/Registration.css";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

export default function BuilderRegistration() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    password: "",
    mobileNo: "",
    aadharNo: "",
    email: "",
    builderLicense: "",
    plotNo: "",
    street: "",
    landmark: "",
    city: "",
    state: "",
    pincode: "",
  });

  const postFormData = (data) => {
    axios.post("http://localhost:8083/api/auth/signup/builder", data).then(
      (res) => {
        navigate("/Login");
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  };

  const initialValues = {
    username: "",
    password: "",
    mobileNo: "",
    aadharNo: "",
    email: "",
    builderLicense: "",
    plotNo: "",
    street: "",
    landmark: "",
    city: "",
    state: "",
    pincode: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    postFormData(user);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.username) {
      errors.name = "Name is required!";
    }

    if (!values.mobileNo) {
      errors.mobile = "Mobile No is required!";
    } else if (values.mobileNo.length < 10) {
      errors.mobile = "Mobile No must be of 10 characters";
    } else if (values.mobileNo.length > 10) {
      errors.mobile = "Mobile No must be of 10 characters";
    }

    if (!values.aadharNo) {
      errors.adhaar = "Adhaar is required!";
    } else if (values.aadharNo.length < 12) {
      errors.adhaar = "Adhaar No must be of 12 characters";
    } else if (values.aadharNo.length > 12) {
      errors.adhaar = "Adhaar No must be of 12 characters";
    }

    if (!values.builderLicense) {
      errors.license = "License No is required!";
    }

    if (!values.builderLicense) {
      errors.address = "Address is required!";
    }

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 8) {
      errors.password = "Password must be more than 8 characters";
    } else if (values.password.length > 12) {
      errors.password = "Password cannot exceed more than 12 characters";
    }
    return errors;
  };
  return (
    <div>
      <div
        className="wrapper"
        style={{ marginTop: "100px", marginBottom: "60px" }}
      >
        <div className="form-left">
          <h2 className="text-uppercase">Welcome..!!</h2>
          <p>
            <h2>We are SquareFeets.!</h2>
          </p>
          <p className="text">
            <h3>
              Register here and List Your Properties to get Buyers with ease
            </h3>
          </p>
          <div className="form-field">
            <input
              type="submit"
              className="account"
              onClick={() => navigate("/Login")}
              value="Have an Account?"
            />
          </div>
          <div className="form-field">
            <input
              type="button"
              className="account"
              onClick={() => navigate("/Customer-Registration")}
              value="Customer Registration"
            />
          </div>
        </div>
        <form className="form-right" onSubmit={handleSubmit}>
          <h2 className="text-uppercase">Builder Registration form</h2>
          <div className="row">
            <div className="col-sm-6 mb-3">
              <label>Your Name</label>
              <input
                className="input-field"
                type="text"
                name="username"
                placeholder="Enter Your Name"
                value={formValues.username}
                onChange={handleChange}
              />
              <p style={{ color: "red" }}>{formErrors.name}</p>
            </div>

            <div className="col-sm-6 mb-3">
              <label>Mobile No.</label>
              <input
                className="input-field"
                type="number"
                name="mobileNo"
                placeholder="Mobile"
                value={formValues.mobileNo}
                onChange={handleChange}
              />
              <p style={{ color: "red" }}>{formErrors.mobile}</p>
            </div>
          </div>

          <div className="mb-3">
            <label>Your Email</label>
            <input
              className="input-field"
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p style={{ color: "red" }}>{formErrors.email}</p>

          <div className="mb-3">
            <label>Aadhar No.</label>
            <input
              className="input-field"
              type="number"
              name="aadharNo"
              placeholder="Adhaar"
              value={formValues.aadharNo}
              onChange={handleChange}
            />
          </div>
          <p style={{ color: "red" }}>{formErrors.adhaar}</p>

          <div className="mb-3">
            <label>License No.:</label>
            <input
              className="input-field"
              type="number"
              name="builderLicense"
              placeholder="License No"
              value={formValues.builderLicense}
              onChange={handleChange}
            />
          </div>
          <p style={{ color: "red" }}>{formErrors.license}</p>

          <div className="row">
            <label>Address</label>
            <div className="col-sm-6 mb-3">
              <input
                className="input-field"
                type="number"
                name="plotNo"
                placeholder="Plot No."
                value={formValues.plotNo}
                onChange={handleChange}
              />
            </div>
            <div className="col-sm-6 mb-3">
              <input
                className="input-field"
                type="text"
                name="street"
                placeholder="Street"
                value={formValues.street}
                onChange={handleChange}
              />
            </div>
            <div className="col-sm-6 mb-3">
              <input
                className="input-field"
                type="text"
                name="landmark"
                placeholder="Landmark"
                value={formValues.landmark}
                onChange={handleChange}
              />
            </div>
            <div className="col-sm-6 mb-3">
              <input
                className="input-field"
                type="text"
                name="city"
                placeholder="City"
                value={formValues.city}
                onChange={handleChange}
              />
            </div>
            <div className="col-sm-6 mb-3">
              <input
                className="input-field"
                type="text"
                name="state"
                placeholder="State"
                value={formValues.state}
                onChange={handleChange}
              />
            </div>
            <div className="col-sm-6 mb-3">
              <input
                className="input-field"
                type="number"
                name="pincode"
                placeholder="Pin"
                value={formValues.pincode}
                onChange={handleChange}
              />
            </div>
            <p style={{ color: "red" }}>{formErrors.address}</p>
          </div>

          <div className="row">
            <div className="mb-3">
              <label>Password</label>
              <input
                className="input-field"
                type="password"
                name="password"
                placeholder="Password"
                value={formValues.password}
                onChange={handleChange}
              />
            </div>
            <p style={{ color: "red" }}>{formErrors.password}</p>
          </div>

          <div className="form-field">
            <input
              type="submit"
              value="Register"
              className="register"
              name="register"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

{
  /* <div>
      <div className="wrapper">
        <div className="form-left">
          <h2 className="text-uppercase">Welcome..!!</h2>
          <p>
            <h2>We are SquareFeets.!</h2>
          </p>
          <p className="text">
            <h3>
              Register here and List Your Properties to get Buyers with ease
            </h3>
          </p>
          <div className="form-field">
            <input
              type="submit"
              className="account"
              onClick={() => navigate("/Login")}
              value="Have an Account?"
            />
          </div>
          <div className="form-field">
            <input
              type="button"
              className="account"
              onClick={() => navigate("/Customer-Registration")}
              value="Customer Registration"
            />
          </div>
        </div>
        <form className="form-right">
          <h2 className="text-uppercase">Registration form</h2>
          <div className="row">
            <div className="col-sm-6 mb-3">
              <label>Your Name</label>
              <input
                type="text"
                className="input-field"
                required
                name="username"
                id="username"
              />
            </div>
            <div className="col-sm-6 mb-3">
              <label>Mobile No.</label>
              <input
                type="number"
                className="input-field"
                name="mobileNo"
                id="mobileNo"
              />
            </div>
          </div>

          <div className="mb-3">
            <label>Your Email</label>
            <input
              type="email"
              className="input-field"
              name="email"
              required
              id="email"
            />
          </div>

          <div className="row">
            <div className="col-sm-6 mb-3">
              <label>Aadhar No.</label>
              <input
                type="number"
                className="input-field"
                name="aadharNo"
                id="aadharNo"
                required
              />
            </div>

            <div className="col-sm-6 mb-3">
              <label>License No.</label>
              <input
                type="number"
                className="input-field"
                name="builderLicense"
                id="builderLicense"
                required
              />
            </div>
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
              />
            </div>
            <div className="col-sm-6 mb-3">
              <input
                type="Text"
                placeholder="Street"
                className="input-field"
                name="street"
                id="street"
              />
            </div>
            <div className="col-sm-6 mb-3">
              <input
                type="Text"
                placeholder="Landmark"
                className="input-field"
                name="landmark"
                id="landmark"
              />
            </div>
            <div className="col-sm-6 mb-3">
              <input
                type="Text"
                placeholder="City"
                className="input-field"
                name="city"
                id="city"
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
                required
              />
            </div>
            <div className="col-sm-6 mb-3">
              <input
                type="number"
                placeholder="Pin"
                className="input-field"
                name="pincode"
                id="pincode"
                required
              />
            </div>
          </div>

          <div className="row">
            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                name="password"
                id="password"
                className="input-field"
                required
              />
            </div>
          </div>

          {/* <div className="mb-3">
              <label className="option">
                I agree to the <a href="#">Terms and Conditions</a>
                <input type="checkbox" checked />
                <span className="checkmark"></span>
              </label>
            </div> */
}

//     <div className="form-field">
//       <input
//         type="submit"
//         value="Register"
//         className="register"
//         name="register"
//       />
//     </div>
//   </form>
// </div>
// </div>
