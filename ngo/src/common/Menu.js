import React from "react";
import { Navbar, Nav, NavDropdown,Form,Button,FormControl } from "react-bootstrap";
function Menu() {
  return (
    <div>
      <Navbar className="bg-white" expand="lg">
        <Navbar.Brand href="#home">DonationCamp</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            
          </Nav>
          <Form inline>
          
            <Button variant="outline-success">Donate</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Menu;
