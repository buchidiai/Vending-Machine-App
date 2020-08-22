import React from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

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
    <Form className="text-center bg-light p-3">
      <Form.Label className="font-weight-bold">Total $ In</Form.Label>
      <Form.Group>
        <Form.Control
          className="text-center "
          size="md"
          readOnly
          disabled
          placeholder={total === 0 ? "$0.00" : "$" + total.toFixed(2)}
        />
        <Row xs={2} className="p-2 m-1">
          {moneyAmounts.map((amount, i) => {
            return (
              <Col md={6} key={i}>
                <Button
                  className={"mb-3 w-100"}
                  as="input"
                  type="button"
                  value={`Add ${showAmount(amount)}`}
                  onClick={() => onAddMoneyClick(amount)}
                />
              </Col>
            );
          })}
        </Row>
      </Form.Group>
    </Form>
  );
};

{
  /* <div className="text-center bg-light p-3">
  <p className="font-weight-bold">Total $ in</p>
  <p className="border">{total === 0 ? "$0.00" : "$" + total.toFixed(2)}</p>
  <Row xs={2} className="p-2 m-1">
    {moneyAmounts.map((amount, i) => {
      return (
        <Col md={6} key={i}>
          <Button
            className={"mb-3"}
            as="input"
            type="button"
            value={`add ${showAmount(amount)}`}
            onClick={() => onAddMoneyClick(amount)}
          />
        </Col>
      );
    })}
  </Row>
</div>; */
}
