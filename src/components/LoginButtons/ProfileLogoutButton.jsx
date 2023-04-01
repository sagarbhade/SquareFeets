import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";

function CustomerProfileButton() {
  return (
    <div>
      <Link to="/CustomerProfile" className="menu-item">
        Profile
      </Link>
    </div>
  );
}

function BuilderProfileButton() {
  return (
    <div>
      <Link to="/BuilderProfile" className="menu-item">
        Profile
      </Link>
    </div>
  );
}

function AdminProfileButton() {
  return (
    <div>
      <Link to="/AdminPage" className="menu-item">
        Admin Page
      </Link>
    </div>
  );
}

export default function ProfileLogoutButton() {
  const [login, setLogin] = useState({
    isLogin: false,
    role: null,
    username: null,
  });

  useEffect(() => {
    let loginData = JSON.parse(localStorage.getItem("loginData"));

    if (loginData != null && loginData.isLogin) {
      setLogin({
        isLogin: true,
        role: loginData.userRole,
        username: loginData.username,
      });
    }
  }, []);

  const navigate = useNavigate();

  if (login.role == "ROLE_CUSTOMER") {
    return (
      <Nav>
        <Nav>
          <CustomerProfileButton />
        </Nav>
        <Nav>
          <Link
            to="/Login"
            className="menu-item"
            onClick={() => {
              localStorage.clear();
              axios.post("http://localhost:8083/api/auth/signout").then(
                (res) => {
                  if (res.status === 200) {
                    navigate("/");
                  }
                  console.log(res);
                },
                (err) => {
                  console.log("Error" + err);
                }
              );
            }}
          >
            Signout
          </Link>
        </Nav>
      </Nav>
    );
  } else if (login.role == "ROLE_BUILDER") {
    return (
      <Nav>
        <Nav>
          <BuilderProfileButton />
        </Nav>
        <Nav>
          <Link
            to="/Login"
            className="menu-item"
            onClick={() => {
              localStorage.clear();
              axios.post("http://localhost:8083/api/auth/signout").then(
                (res) => {
                  if (res.status === 200) {
                    navigate("/");
                  }
                  console.log(res);
                },
                (err) => {
                  console.log("Error" + err);
                }
              );
            }}
          >
            Signout
          </Link>
        </Nav>
      </Nav>
    );
  } else if (login.role == "ROLE_ADMIN") {
    return (
      <Nav>
        <Nav>
          <AdminProfileButton />
        </Nav>
        <Nav>
          <Link
            to="/Login"
            className="menu-item"
            onClick={() => {
              localStorage.clear();
              axios.post("http://localhost:8083/api/auth/signout").then(
                (res) => {
                  if (res.status === 200) {
                    navigate("/");
                  }
                  console.log(res);
                },
                (err) => {
                  console.log("Error" + err);
                }
              );
            }}
          >
            Signout
          </Link>
        </Nav>
      </Nav>
    );
  }
}
