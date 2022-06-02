import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
const Header = () => {
  let navigate = useNavigate();
  let user = JSON.parse(localStorage.getItem("user-info"));
  // console.log(user);

  function logout() {
    localStorage.clear();
    navigate("/register");
  }

  return (
    <div>
      <Navbar className="navbar bg-danger">
        <Container>
          <Navbar.Brand href="" className=" text-light text-decoration-none ">
            Code/Mu.{" "}
          </Navbar.Brand>
          <Nav className=" me-auto navbar-wrapper p-2">
            {localStorage.getItem("user-info") ? (
              <div>
                <Link to="/Products"> products</Link>
                <Link to="/add">Add products</Link>
                {/* <Link to="/update">Update products</Link> */}
              </div>
            ) : (
              <>
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/register ">Register</Link>
              </>
            )}
          </Nav>
          {localStorage.getItem("user-info") ? (
            <Nav>
              <NavDropdown
                className="text-light"
                // title='User Name'
                title={user && user.name}
              >
                <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          ) : null}
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
