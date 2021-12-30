import {Navbar, Nav, Container} from 'react-bootstrap'
const NavBar = () => {
  return (
    <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Best Bought</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#orders">Orders</Nav.Link>
      <Nav.Link href="#cart">Cart</Nav.Link>
    </Nav>
    <Nav>
      <button class="btn btn-danger float-right">Logout</button>
    </Nav>
    </Container>
  </Navbar>
  );
};

export default NavBar;
