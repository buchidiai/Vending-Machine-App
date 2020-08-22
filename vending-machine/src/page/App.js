import React from "react";
import { Inventory } from "../components/Inventory";
import { Menu } from "../components/Menu";
import { Header } from "../components/Header";
import { getChangeDenomination } from "../helper/helperFunction";
import { Container, Row, Col } from "react-bootstrap";
import Api from "../service/Api";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amounts: [1.0, 0.25, 0.1, 0.05],
      total: 0,
      inventory: [],
      itemToBuy: {
        id: "",
        price: "",
      },
      amount: "",
      change: [],
      returnChange: false,
      error: {
        hasError: false,
        message: "",
      },
      onSuccess: {
        message: "",
      },
    };
    this.api = new Api();
  }

  componentDidMount() {
    this.handleFetchAllItems();
  }

  handleFetchAllItems = async () => {
    try {
      const items = await this.api.getAll();
      this.setState({ inventory: items.data });
    } catch (error) {
      this.setState({
        error: { hasError: true, message: error.response.data.message },
      });
    }
  };

  handleOnAddMoneyClick = (amount) => {
    this.setState({ total: this.state.total + amount, change: [] });
  };

  handleBuyItem = async (item) => {
    const { id } = item;
    const { total } = this.state;

    try {
      const items = await this.api.buyItem(total.toFixed(2), id);

      this.setState({
        total: 0,
        change: items.data,
        onSuccess: { message: "Thank you" },
      });

      this.handleFetchAllItems();
    } catch (error) {
      this.setState({
        error: { hasError: true, message: error.response.data.message },
      });
      this.handleFetchAllItems();
    }
  };

  handleOnItemClick = (item) => {
    this.setState({
      itemToBuy: item,
      change: [],
      error: { hasError: false, message: "" },
      onSuccess: { message: "" },
    });
  };

  handleOnReturnChange = () => {
    const change = getChangeDenomination(this.state.total);

    this.setState({
      total: 0,
      change: change,
      onSuccess: { message: `$${this.state.total.toFixed(2)} returned` },
    });
  };

  render() {
    const {
      inventory,
      itemToBuy,
      error,
      change,
      returnChange,
      onSuccess,
      total,
    } = this.state;
    return (
      <Container fluid className="p-5">
        <Header title={"VendingMachine"} />
        <hr />
        <Row className="m-4">
          <Col lg={8}>
            <Row md={4}>
              {inventory.map((p, i) => {
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
            total={total}
            onSuccess={onSuccess}
            hideReturnChange={returnChange}
            change={change}
            moneyAmounts={this.state.amounts}
            total={this.state.total}
            onAddMoneyClick={this.handleOnAddMoneyClick}
            itemToBuy={itemToBuy}
            onMakePurchaseClick={this.handleBuyItem}
            onReturnChangeClick={this.handleOnReturnChange}
            error={error}
          />
        </Row>
      </Container>
    );
  }
}

export default App;
