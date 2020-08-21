import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

export const AddMoney = ({ onAddMoneyClick }) => {
  const [amounts] = useState([1.0, 0.25, 0.1, 0.05]);
  const [total, setTotal] = useState(0);

  const showAmount = (value) => {
    if (value === amounts[0]) {
      return "Dollar";
    } else if (value === amounts[1]) {
      return "Quarter";
    } else if (value === amounts[2]) {
      return "Dime";
    } else if (value === amounts[3]) {
      return "Nickel";
    }
  };

  const handleAddMoney = (amount) => {
    setTotal(total + amount);
  };
  return (
    <div className="text-center" style={{ backgroundColor: "white" }}>
      <p>Total $ in</p>
      <p>{total === 0 ? "$0.00" : "$" + total.toFixed(2)}</p>
      <Row xs={2} className="p-2 m-1">
        {amounts.map((amount, i) => {
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
