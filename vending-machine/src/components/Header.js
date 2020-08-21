import React from "react";
import Navbar from "react-bootstrap/Navbar";

export const Header = ({ title }) => {
  return (
    <Navbar bg="light">
      <Navbar.Brand href="#home">{title}</Navbar.Brand>
    </Navbar>
  );
};
