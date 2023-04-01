import { Link, useNavigate } from "react-router-dom";
import pic from "../images/loginPage.png";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Login() {
  const [user, setUser] = useState({
    usernameOrEmail: "",
    password: "",
  });

  const [login, setLogin] = useState({
    isLogin: false,
    accessToken: null,
  });

  const initialValues = { usernameOrEmail: "", password: "" };
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
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    postFormData(user);
  };

  useEffect(() => {
    let loginData = JSON.parse(localStorage.getItem("loginData"));

    setLogin({ accessToken: loginData });
    if (loginData != null && loginData.isLogin) {
      setLogin({ isLogin: true });
    }
  }, []);

  console.log(formErrors);
  if (Object.keys(formErrors).length === 0 && isSubmit) {
    console.log(formValues);
  }

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.usernameOrEmail) {
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

  const navigate = useNavigate();

  const postFormData = (data) => {
    axios.post("http://localhost:8083/api/auth/signin", data).then(
      (res) => {
        if (res.status === 200) {
          navigate("/");
          localStorage.setItem(
            "loginData",
            JSON.stringify({
              isLogin: true,
              accessToken: res.data.accessToken,
              username: res.data.username,
              userRole: res.data.userRole,
              userId: res.data.userId,
              builderId: res.data.builderId,
            })
          );
          localStorage.setItem("username", res.data.username);
          setLogin({
            isLogin: true,
          });
          console.log(res.data.username);
        }
      },
      (err) => {
        console.log("Error" + err);
      }
    );
  };

  useEffect(() => {
    let loginData = JSON.parse(localStorage.getItem("loginData"));

    setLogin({ accessToken: loginData });
    if (loginData != null && loginData.isLogin) {
      setLogin({ isLogin: true });
    }
  }, []);
  return (
    <div>
      <div className="container mt-5 mb-5">
        <div className="d-flex flex row g-0">
          <div className="col-md-6 mt-3">
            <div className="card1 p-3">
              <div className="input-field d-flex flex-column mt-3">
                <form onSubmit={handleSubmit}>
                  <span>Email</span>{" "}
                  <input
                    className="form-control"
                    placeholder="email@example.com"
                    name="usernameOrEmail"
                    id="usernameOrEmail"
                    value={formValues.usernameOrEmail}
                    onChange={handleChange}
                  />
                  <p style={{ color: "red" }}>{formErrors.email}</p>
                  <span className="mt-3">Password</span>{" "}
                  <input
                    className="form-control"
                    placeholder="Enter Your Password"
                    name="password"
                    id="password"
                    type="password"
                    value={formValues.password}
                    onChange={handleChange}
                  />
                  <p style={{ color: "red" }}>{formErrors.password}</p>
                  <button
                    type="submit"
                    className="mt-4 btn btn-warning d-flex justify-content-center align-items-center"
                  >
                    Login
                  </button>
                </form>
                <div className="mt-3 text1">
                  <span className="mt-3 forget">
                    <Link to="/ForgetPassword">Forget Password?</Link>
                  </span>
                </div>
                <div className="text2 mt-4 d-flex flex-row align-items-center">
                  <span>
                    Don't have an account?
                    <span className="register">
                      <Link to="/Customer-Registration">Register here</Link>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 mt-3">
            <div className="card2 p-3">
              <div className="image">
                <img
                  src={pic}
                  alt=""
                  style={{ width: "530px", height: "370px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
