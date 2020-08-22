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
  moneyAmounts,
  total,
  change,
  onReturnChangeClick,
  onSuccess,
}) => {
  return (
    <Col lg={4}>
      <AddMoney
        onAddMoneyClick={onAddMoneyClick}
        moneyAmounts={moneyAmounts}
        total={total}
      />
      <hr />
      <BuyItem
        onSuccess={onSuccess}
        itemToBuy={itemToBuy}
        onMakePurchaseClick={onMakePurchaseClick}
        error={error}
      />
      <hr />
      <Change
        onReturnChangeClick={onReturnChangeClick}
        total={total}
        change={change}
      />
    </Col>
  );
};
