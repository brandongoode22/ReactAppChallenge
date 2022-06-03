import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router";


const NavHeader = () => {
  
const navigate = useNavigate();

const handleNavigationClick = (path: string): void => {
  navigate(path);
};
  return (
    <Navbar>
      <Nav>
        <Nav.Link>
          onClick=
          {(): void => {
            handleNavigationClick("/monsters");
          }}
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Nav;
