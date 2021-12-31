import { Navbar, Nav, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { useData } from "./../../contexts/commonData";
const NavBar = () => {
  const history = useHistory();
  const { user, setUser } = useData();
  return (
    <nav
      className={`px-5 navbar bg-primary ${user?.id ? " " : " d-none"}`}
      bg="primary"
      variant="dark"
    >
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

      <label class="text-white mx-3 fs-5 fw-bold text-capitalize">
        {user?.email?.replace("@gmail.com", "")}
      </label>
      <button
        class="btn btn-danger float-right float-right py-1 px-2"
        onClick={() => {
          history.push("/login");
          setUser({});
        }}
      >
        Logout
      </button>
    </nav>
  );
};

export default NavBar;
