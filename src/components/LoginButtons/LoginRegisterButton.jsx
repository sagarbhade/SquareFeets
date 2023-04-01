import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

export default function LoginRegistrationButtons() {
  return (
    <Nav>
      <Nav>
        <Link className="menu-item" to="/Login">
          Login
        </Link>
      </Nav>
      <Nav>
        <Link className="menu-item" to="/Customer-Registration">
          Register
        </Link>
      </Nav>
    </Nav>
  );
}
