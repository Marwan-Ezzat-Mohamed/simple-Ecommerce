import { Navbar, Nav, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import logo from "../../assets/logo.svg";
const NavBar = () => {
  const history = useHistory();
  return (
    <Navbar className="px-5" bg="primary" variant="dark">
      <Navbar.Brand
        onClick={() => {
          history.push("/home");
        }}
      >
        <img
          src={logo}
          style={{
            height: "55px",
          }}
        />
      </Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link
          className="fs-4"
          onClick={() => {
            history.push("/orders");
          }}
        >
          Orders
        </Nav.Link>
        <Nav.Link
          className="fs-4"
          onClick={() => {
            history.push("/cart");
          }}
        >
          Cart
        </Nav.Link>
      </Nav>
      <Nav>
        <button class="btn btn-danger float-right">Logout</button>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
