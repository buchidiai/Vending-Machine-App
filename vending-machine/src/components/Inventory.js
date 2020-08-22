import React from "react";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

export const Inventory = ({ item, onItemClick }) => {
  const { id, name, price, quantity } = item;
  return (
    <Col md={4} className="text-center">
      <div style={{ backgroundColor: "red" }} onClick={onItemClick}>
        <div>{id}</div>

        <p>{name}</p>
        <p>{`$${price.toFixed(2)}`}</p>
        <p>{`Quantity left: ${quantity}`}</p>
      </div>
    </Col>
  );
};
