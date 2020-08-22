import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";

export class BuyItem extends Component {
  render() {
    const {
      itemToBuy: { id, name, price, quantity },
      onMakePurchaseClick,
      error,
      onSuccess,
      buttonLoading,
    } = this.props;
    return (
      <Form className="text-center bg-light p-3">
        <Form.Label className="font-weight-bold">Messages</Form.Label>
        <Form.Group
          className={
            error.hasError
              ? "justify-content-center border border-danger"
              : "justify-content-center"
          }
        >
          <Form.Control
            className="text-center "
            size="md"
            readOnly
            disabled
            placeholder={error.hasError ? error.message : onSuccess.message}
          />
        </Form.Group>
        <Form.Group className={"form-inline  justify-content-center "}>
          <Form.Label className={" pr-1 "}>Item #: </Form.Label>
          <Form.Control
            className="text-center"
            size="md"
            readOnly
            disabled
            placeholder={`${id}`}
          />
        </Form.Group>
        <Button
          className={"btn btn-success w-50"}
          disabled={buttonLoading ? true : false}
          onClick={onMakePurchaseClick.bind(null, {
            id,
            price,
            name,
            quantity,
          })}
        >
          {buttonLoading ? (
            <div>
              <Spinner
                variant="light"
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
              />{" "}
              {" Make Purchase"}
            </div>
          ) : (
            "Make Purchase"
          )}
        </Button>
      </Form>
    );
  }
}

export default BuyItem;
