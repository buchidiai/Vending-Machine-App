import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const Header = ({ title }) => {
  return (
    <Row>
      <Col className="text-center">
        <h1 className="text-center display-4 ">{title}</h1>
      </Col>
    </Row>
  );
};
