import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import dlogo from "../assets/img/dlogo.png";
import "../assets/style/style.css";
//import SHeader from "./SHeader";

export default function WonderNavbar(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="my-navbar">
      <Navbar fixed="fixed" primary expand="lg">
        <NavbarBrand
          style={{ marginRight: "10rem", marginLeft: "5rem" }}
          className=""
        >
          <h1 className="text-primary">Buynaa</h1>
          {/* <a href="/">
            <img src={dlogo} alt="" className="st-logo" />
          </a> */}
        </NavbarBrand>
        <NavbarToggler onClick={toggle} className="st-tog" />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar style={{ marginLeft: "30rem" }}>
            <NavItem>
              <NavLink className="st-nav" href="/">
                <Button color="primary">REGISTER NOW</Button>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="st-nav" href="/">
                <Button color="primary">SIGN IN</Button>
              </NavLink>
            </NavItem>
            {/* <NavItem>
              <NavLink className="st-nav" href="/">
                Home
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink className="st-nav" href="/mainAboutUs">
                About Us
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="st-nav" href="/productList">
                Product
              </NavLink>
            </NavItem> */}

            {/* <NavItem>
              <NavLink className="st-nav" href="/storeLocator">
                Store locator
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="st-nav" href="/enquiryForm">
                Service Request
              </NavLink>
            </NavItem>*/}
            {/* <NavItem>
              <NavLink className="st-nav" href="/contactForm">
                Contact Us
              </NavLink>
            </NavItem> */}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
