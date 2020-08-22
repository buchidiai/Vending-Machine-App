import React, { Component } from "react";
import Button from "react-bootstrap/Button";
export class BuyItem extends Component {
  render() {
    const {
      itemToBuy: { id, name, price, quantity },
      onMakePurchaseClick,
      error,
      onSuccess,
    } = this.props;
    return (
      <div className="text-center">
        <p>Messages</p>
        <div>
          <p>{error.hasError ? error.message : onSuccess.message}</p>
        </div>
        <div>
          <p>{`Item: ${id}`}</p>
        </div>
        <Button
          as="input"
          type="button"
          value={`Make Purchase`}
          onClick={onMakePurchaseClick.bind(null, {
            id,
            price,
            name,
            quantity,
          })}
        />
      </div>
    );
  }
}

export default BuyItem;
