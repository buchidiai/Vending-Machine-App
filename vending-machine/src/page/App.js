import React from "react";
import {
  TransactionMenu,
  ItemCard,
  Header,
  LoadingIndicator,
} from "../components";
import { Api, getChangeDenomination } from "../service";
import { Container, Row, Col } from "react-bootstrap";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amounts: [1.0, 0.25, 0.1, 0.05],
      total: 0,
      inventory: [],
      loading: true,
      buttonLoading: false,
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
    setTimeout(() => {
      this.handleFetchAllItems();
    }, 2000);
  }

  handleFetchAllItems = async () => {
    try {
      const items = await this.api.getAll();

      this.setState({ inventory: items.data, loading: false });
    } catch (error) {
      this.setState({
        error: {
          hasError: true,
          message: error.response.data.message,
          loading: false,
        },
      });
    }
  };

  handleOnAddMoneyClick = (amount) => {
    this.setState({ total: this.state.total + amount, change: [] });
  };

  handleBuyItem = async (item) => {
    const { id } = item;
    const { total } = this.state;

    this.setState({
      error: { hasError: false, message: "" },
      buttonLoading: true,
    });

    try {
      const items = await this.api.buyItem(total.toFixed(2), id);

      this.setState({
        buttonLoading: false,
        total: 0,
        change: items.data,
        onSuccess: { message: "Thank you!!" },
      });

      this.handleFetchAllItems();
    } catch (error) {
      setTimeout(() => {
        this.setState({
          error: { hasError: true, message: error.response.data.message },
          buttonLoading: false,
        });
      }, 500);

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
    const { total } = this.state;
    const change = getChangeDenomination(total);

    this.setState({ change: [] });

    this.setState({
      error: { hasError: false, message: "" },
      total: 0,
      change: change,
      onSuccess: {
        message:
          total === 0 ? "No money Inserted." : `$${total.toFixed(2)} returned.`,
      },
    });
  };

  render() {
    const { inventory, loading, ...rest } = this.state;
    return (
      <Container fluid className="p-5">
        <Header title={"Vending Machine"} />
        <hr />
        <Row>
          <Col sm={8}>
            {loading ? (
              <Row lg={3}>
                <LoadingIndicator />
              </Row>
            ) : (
              <Row lg={3}>
                {inventory.map((p, i) => {
                  return (
                    <ItemCard
                      item={p}
                      key={i}
                      onItemClick={() => this.handleOnItemClick(p)}
                    />
                  );
                })}
              </Row>
            )}
          </Col>

          <TransactionMenu
            {...rest}
            onAddMoneyClick={this.handleOnAddMoneyClick}
            onMakePurchaseClick={this.handleBuyItem}
            onReturnChangeClick={this.handleOnReturnChange}
          />
        </Row>
      </Container>
    );
  }
}

export default App;
