import React, { Component } from "react";
import Button from "react-bootstrap/Button";

export class Change extends Component {
  showChange = () => {
    const {
      change: { quarters, dimes, nickels, pennies },
    } = this.props;
    let change = "";
    let quantity = "";

    if (quarters > 0) {
      quantity = quarters === 1 ? " Quarter " : " Quarters ";

      change += quarters + quantity;
    }
    if (dimes > 0) {
      quantity = dimes === 1 ? " Dime " : " Dimes ";

      change += dimes + quantity;
    }

    if (nickels > 0) {
      quantity = nickels === 1 ? " Nickel " : " Nickels ";

      change += nickels + quantity;
    }
    if (pennies > 0) {
      quantity = pennies === 1 ? " Penny " : " Pennies ";

      change += pennies + quantity;
    }

    return change;
  };
  render() {
    const { onReturnChangeClick, total } = this.props;

    return (
      <div className="text-center" style={{ backgroundColor: "white" }}>
        <p>Change</p>
        <div>{this.showChange()}</div>
        <Button
          disabled={total === 0 ? true : false}
          as="input"
          type="button"
          value={`Return Change`}
          onClick={onReturnChangeClick}
        />
      </div>
    );
  }
}

export default Change;
