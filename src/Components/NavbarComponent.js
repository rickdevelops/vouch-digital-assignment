import { Navbar, Nav, Container, Button } from "react-bootstrap";
import "./NavbarComponent.css";
const NavbarComponent = () => {
  return (
    <div className="navbar-shadow">
      <Navbar collapseOnSelect expand="lg" bg="white" variant="white">
        <Container>
          <Navbar.Brand href="#" className="brand-name">
            ATools<span className="dot-colored">.</span>{" "}
          </Navbar.Brand>
          <Nav.Link href="#" className="d-none d-md-block">
            <Button variant="dark" className="nav-link-left-btn">
              Start free Trail
            </Button>
            <Button className="login-btn-nav">Login</Button>
          </Nav.Link>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
