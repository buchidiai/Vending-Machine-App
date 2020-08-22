import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const Change = ({ onReturnChangeClick, total, change }) => {
  const showChange = () => {
    const { quarters, dimes, nickels, pennies } = change;

    let changeString = "";
    let quantity = "";

    if (quarters > 0) {
      quantity = quarters === 1 ? " Quarter " : " Quarters ";

      changeString += quarters + quantity;
    }
    if (dimes > 0) {
      quantity = dimes === 1 ? " Dime " : " Dimes ";

      changeString += dimes + quantity;
    }

    if (nickels > 0) {
      quantity = nickels === 1 ? " Nickel " : " Nickels ";

      changeString += nickels + quantity;
    }
    if (pennies > 0) {
      quantity = pennies === 1 ? " Penny " : " Pennies ";

      changeString += pennies + quantity;
    }

    return changeString;
  };

  return (
    <Form className="text-center bg-light p-3">
      <Form.Label className="font-weight-bold">Change</Form.Label>
      <Form.Group className=" justify-content-center ">
        <Form.Control
          className="text-center"
          size="md"
          readOnly
          disabled
          placeholder={showChange()}
        />
      </Form.Group>
      <Button
        className={"btn-danger w-50"}
        as="input"
        type="button"
        value={`Return Change`}
        onClick={onReturnChangeClick}
      />
    </Form>
  );
};
