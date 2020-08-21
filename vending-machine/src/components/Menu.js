import React from "react";
import Change from "./Change";
import BuyItem from "./BuyItem";
import { Col } from "react-bootstrap";
import { AddMoney } from "./AddMoney";

export const Menu = ({
  onAddMoneyClick,
  itemToBuy,
  onMakePurchaseClick,
  error,
}) => {
  return (
    <Col lg={4}>
      <AddMoney onAddMoneyClick={onAddMoneyClick} />
      <hr />
      <BuyItem
        itemToBuy={itemToBuy}
        onMakePurchaseClick={onMakePurchaseClick}
        error={error}
      />
      <hr />
      <Change />
    </Col>
  );
};
