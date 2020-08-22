import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const Header = ({ title }) => {
  return (
    <Row>
      <Col className="text-center">
        <Navbar bg="light">
          <Navbar.Brand href="#home">{title}</Navbar.Brand>
        </Navbar>
      </Col>
    </Row>
  );
};
