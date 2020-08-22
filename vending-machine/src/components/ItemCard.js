import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

export const ItemCard = ({ item, onItemClick }) => {
  const { id, name, price, quantity } = item;
  return (
    <Col sm={4} className="text-center p-3 ">
      <div className="bg-light card h-100 grow shadow-5" onClick={onItemClick}>
        <Card.Header className="text-left pl-3">{id}</Card.Header>
        <p className={"font-weight-bold"}>{name}</p>
        <p className={"font-weight-normal text-dark"}>{`$${price.toFixed(
          2
        )}`}</p>
        <p>{`Quantity left: ${quantity}`}</p>
      </div>
    </Col>
  );
};
