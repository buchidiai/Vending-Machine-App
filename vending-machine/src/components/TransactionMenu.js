import React from "react";
import { MoneyInput } from "./MoneyInput";
import { PurchaseProduct } from "./PurchaseProduct";
import { GetChange } from "./GetChange";
import { Col } from "react-bootstrap";

export const TransactionMenu = ({
  onAddMoneyClick,
  amounts,
  itemToBuy,
  onMakePurchaseClick,
  error,
  total,
  change,
  onReturnChangeClick,
  onSuccess,
  buttonLoading,
}) => {
  return (
    <Col lg={4}>
      <hr />
      <MoneyInput
        onAddMoneyClick={onAddMoneyClick}
        moneyAmounts={amounts}
        total={total}
      />
      <hr />
      <PurchaseProduct
        onSuccess={onSuccess}
        itemToBuy={itemToBuy}
        onMakePurchaseClick={onMakePurchaseClick}
        error={error}
        buttonLoading={buttonLoading}
      />
      <hr />
      <GetChange
        onReturnChangeClick={onReturnChangeClick}
        total={total}
        change={change}
      />
      <hr />
    </Col>
  );
};
