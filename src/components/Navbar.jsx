import "./styles/Navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginRegistrationButtons from "./LoginButtons/LoginRegisterButton";
import ProfileLogoutButton from "./LoginButtons/ProfileLogoutButton";

export default function SFNav() {
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/Property", { state: { destination, date, options } });
  };

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
      console.log(loginData.userRole);
    }
  }, []);
  return (
    <>
      <Navbar bg="light" variant="light" fixed="top" expand="md">
        <Container>
          <Navbar.Brand>
            <Link className="menu-item" to="/">
              SquareFeets
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav>
                <Link className="menu-item" to="/">
                  Home
                </Link>
              </Nav>
              <Nav>
                <Link className="menu-item" to="/Properties">
                  Properties
                </Link>
              </Nav>
              <Nav>
                <Link className="menu-item" to="/Aboutus">
                  About
                </Link>
              </Nav>
              <Nav>
                <Link className="menu-item" to="/Contactus">
                  Contact Us
                </Link>
              </Nav>
            </Nav>
            <Nav>
              {login.role != null ? (
                <ProfileLogoutButton />
              ) : (
                <LoginRegistrationButtons />
              )}
              {/* <LoginRegistrationButtons /> */}
              {/* <Nav>
                <Link className="menu-item" to="/Login">
                  Login
                </Link>
              </Nav>
              <Nav>
                <Link className="menu-item" to="/Customer-Registration">
                  Register
                </Link>
              </Nav> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
