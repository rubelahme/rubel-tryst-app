import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import img1 from "../../Img/Capture-removebg-preview.png";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <>
      <Navbar expand="lg" className="NavCl">
        <Container>
          <Navbar.Brand href="#home">
            <img className="img111" src={img1} alt="Tryst link" />
            <span className="Search">
              <span className="text-white ms-5">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </span>
              <span className="text-white ms-2">Search</span>
            </span>
          </Navbar.Brand>

          <Navbar className="justify-content-end">
            <Navbar.Text>
              <Nav.Link href="#pricing">
                <span className="Nav2">Login</span>{" "}
                <span className="or">or</span>
                <span className="Nav2">Sign up</span>
              </Nav.Link>
            </Navbar.Text>
          </Navbar>
        </Container>
      </Navbar>
      {/* <Navbar collapseOnSelect expand="lg" className="NavCl">
        <Container>
          <Navbar.Brand href="#home">
            <img className="img111" src={img1} alt="Tryst link" />
          </Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features" className="Nav1">
                <span className="Bar">
                  <FontAwesomeIcon icon={faBars} />
                </span>
                Menu
              </Nav.Link>
              <Nav.Link href="#pricing" className="Nav2">
                Sing up
              </Nav.Link>
              <Nav.Link href="#pricing" className="Nav3">
                Login
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets" className="deets">
                More deets
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <div>
            <span className="deet">
              <FontAwesomeIcon icon={faBars} />
            </span>
          </div>
        </Container>
      </Navbar> */}
    </>
  );
};

export default NavBar;
