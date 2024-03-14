import React, { useState } from "react";
import "../Navbar/styles/navbar.css";
import { CustomButton } from "../../theme";
import { styled } from "@mui/material";
import logo from "../../Assets/logo.png";

const DropdownIcon = styled("i")({
  marginLeft: "5px",
  verticalAlign: "middle",
  transition: "transform 0.3s",
});

const DropdownContainer = styled("div")({
  position: "relative",
  zIndex: 1,
});

const DropdownContent = styled("div")({
  position: "absolute",
  top: "-100%",
});

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [industriesDropdownOpen, setIndustriesDropdownOpen] = useState(false);

  const toggleSolutionsDropdown = () => {
    setSolutionsDropdownOpen(!solutionsDropdownOpen);
  };

  const toggleServicesDropdown = () => {
    setServicesDropdownOpen(!servicesDropdownOpen);
  };

  const toggleIndustriesDropdown = () => {
    setIndustriesDropdownOpen(!industriesDropdownOpen);
  };
  const toggleDropdown = (index) => {
    const newDropdownOpen = [...dropdownOpen];
    newDropdownOpen[index] = !newDropdownOpen[index];
    setDropdownOpen(newDropdownOpen);
  };

  return (
    <div>
      <nav className="navbar">
        <img src={logo} alt="Logo" className="navbar-logo" />
        <ul className="navbar-links">
          {[
            { text: "Platform", onClick: null },
            { text: "Solutions", onClick: toggleSolutionsDropdown },
            { text: "Services", onClick: toggleServicesDropdown },
            { text: "Industries", onClick: toggleIndustriesDropdown },
            { text: "Customer Success", onClick: null },
            { text: "Shodat AI", onClick: null },
            { text: "About", onClick: null },
          ].map(({ text, onClick }, index) => (
            <li
              className="navbar-dropdown"
              key={index}
              onMouseEnter={onClick}
              onMouseLeave={onClick}
            >
              <DropdownContainer>
                <a href="#" onClick={onClick}>
                  {text} {onClick}
                </a>
                {onClick &&
                  ((text === "Solutions" && solutionsDropdownOpen) ||
                    (text === "Services" && servicesDropdownOpen) ||
                    (text === "Industries" && industriesDropdownOpen)) && (
                    <DropdownContent className={`dropdown open`}>
                      {text === "Solutions" && (
                        <>
                          <a href="#">Data Engineering</a>
                          <a href="#">AI Innovation</a>
                          <a href="#">ERP System & Analytics</a>
                          <a href="#">Vision AI</a>
                          <a href="#">Edge Analytics</a>
                          <a href="#">Intelligent Enterprise</a>
                          <a href="#">Cloud Transformation</a>
                        </>
                      )}
                      {text === "Services" && (
                        <>
                          <a href="#">Innovate</a>
                          <a href="#">Manage</a>
                          <a href="#">Modernize</a>
                          <a href="#">Security</a>
                        </>
                      )}
                      {text === "Industries" && (
                        <>
                          <a href="#">Automative</a>
                          <a href="#">Manufacturing</a>
                          <a href="#">Oil & Gas</a>
                          <a href="#">Transportation</a>
                        </>
                      )}
                    </DropdownContent>
                  )}
              </DropdownContainer>
            </li>
          ))}
        </ul>
        <CustomButton>request Demo</CustomButton>
      </nav>
    </div>
  );
};

export default Navbar;
