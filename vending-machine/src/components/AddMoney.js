import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

export const AddMoney = ({ onAddMoneyClick, moneyAmounts, total }) => {
  const showAmount = (value) => {
    if (value === moneyAmounts[0]) {
      return "Dollar";
    } else if (value === moneyAmounts[1]) {
      return "Quarter";
    } else if (value === moneyAmounts[2]) {
      return "Dime";
    } else if (value === moneyAmounts[3]) {
      return "Nickel";
    }
  };

  return (
    <div className="text-center" style={{ backgroundColor: "white" }}>
      <p>Total $ in</p>
      <p>{total === 0 ? "$0.00" : "$" + total.toFixed(2)}</p>
      <Row xs={2} className="p-2 m-1">
        {moneyAmounts.map((amount, i) => {
          return (
            <Button
              key={i}
              as="input"
              type="button"
              value={`add ${showAmount(amount)}`}
              onClick={() => onAddMoneyClick(amount)}
            />
          );
        })}
      </Row>
    </div>
  );
};
