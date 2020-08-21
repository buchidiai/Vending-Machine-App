import React, { useState } from "react";
import { Inventory } from "../components/Inventory";
import { Menu } from "../components/Menu";
import { Header } from "../components/Header";
import { Container, Row, Col, Navbar } from "react-bootstrap";
import Api from "../service/Api";

const inventory = [
  {
    id: 1,
    name: "Snickers",
    price: 1.5,
    quantity: 0,
  },
  {
    id: 42,
    name: "M&M's",
    price: 1.25,
    quantity: 8,
  },
  {
    id: 33,
    name: "Almond Joy",
    price: 1.25,
    quantity: 11,
  },
  {
    id: 74,
    name: "Milky Way",
    price: 1.65,
    quantity: 3,
  },
  {
    id: 5,
    name: "Payday",
    price: 1.75,
    quantity: 2,
  },
  {
    id: 16,
    name: "Reese's",
    price: 1.5,
    quantity: 5,
  },
  {
    id: 87,
    name: "Pringles",
    price: 2.35,
    quantity: 4,
  },
  {
    id: 82,
    name: "Cheez-Its",
    price: 2,
    quantity: 6,
  },
  {
    id: 9,
    name: "Doritos",
    price: 1.95,
    quantity: 7,
  },
  {
    id: 376,
    name: "Almond Joy",
    price: 1.25,
    quantity: 11,
  },
  {
    id: 7344,
    name: "Milky Way",
    price: 1.65,
    quantity: 3,
  },
  {
    id: 455,
    name: "Payday",
    price: 1.75,
    quantity: 2,
  },
  {
    id: 1643,
    name: "Reese's",
    price: 1.5,
    quantity: 5,
  },
  {
    id: 8437,
    name: "Pringles",
    price: 2.35,
    quantity: 4,
  },
  {
    id: 8432,
    name: "Cheez-Its",
    price: 2,
    quantity: 6,
  },
  {
    id: 934,
    name: "Doritos",
    price: 1.95,
    quantity: 7,
  },
];
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inventory: [],
      itemToBuy: {
        id: "",
        price: "",
      },
      amount: "",
      change: {},
      error: {
        hasError: false,
        message: "",
      },
    };
    this.api = new Api();
  }

  componentDidMount() {
    this.handleFetchAllItems();
  }

  handleFetchAllItems = async () => {
    const items = await this.api.getAll();
    this.setState({ inventory: items.data });
  };

  handleOnAddMoneyClick = (amount, b) => {
    console.log(amount, "amount");
    console.log(b, "b");

    this.setState({ amount: amount });
  };

  handleBuyItem = async (item) => {
    const { id, name, price, quantity } = item;

    if (quantity <= 0) {
      this.setState({
        error: {
          hasError: true,
          message: "SOLD OUT!!!",
        },
      });
      return;
    }

    //check money inserted

    //make api call
    // const items = await this.api.buyItem();
    // this.setState({ inventory: items.data });
  };

  handleOnItemClick = (item) => {
    this.setState({ itemToBuy: item, error: { hasError: false, message: "" } });
  };

  render() {
    const { itemToBuy, error } = this.state;
    return (
      <Container fluid className="p-5">
        <Header title={"VendingMachine"} />

        <Row className="m-4">
          <Col lg={8}>
            <Row>
              {[...inventory, ...inventory].map((p, i) => {
                return (
                  <Inventory
                    item={p}
                    key={i}
                    onItemClick={() => this.handleOnItemClick(p)}
                  />
                );
              })}
            </Row>
          </Col>

          <Menu
            onAddMoneyClick={this.handleOnAddMoneyClick}
            itemToBuy={itemToBuy}
            onMakePurchaseClick={this.handleBuyItem}
            error={error}
          />
        </Row>
      </Container>
    );
  }
}

export default App;
