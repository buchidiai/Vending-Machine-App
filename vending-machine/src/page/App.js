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
      //get products
      const items = await this.api.getAll();

      //set state and hide loading
      this.setState({ inventory: items.data, loading: false });
    } catch (error) {
      //catch and show error error
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
    //add money to vending machine
    this.setState({
      returnChange: false,
      total: this.state.total + amount,
      change: [],
    });
  };

  handleBuyItem = async (item) => {
    const { id } = item;
    const { total } = this.state;

    //clear messages
    this.setState({
      returnChange: false,
      error: { hasError: false, message: "" },
      buttonLoading: true,
    });

    try {
      //purchase item  by passing id and ammount inserted to machine
      const items = await this.api.buyItem(total.toFixed(2), id);

      //set change, and message
      this.setState({
        returnChange: true,
        buttonLoading: false,
        total: 0,
        change: items.data,
        onSuccess: { message: "Thank you!!" },
      });
      //fetch items again
      this.handleFetchAllItems();
    } catch (error) {
      //set errors
      setTimeout(() => {
        this.setState({
          error: {
            hasError: true,
            message: error.response.data.message,
          },
          buttonLoading: false,
        });
      }, 500);

      //fetch items again
      this.handleFetchAllItems();
    }
  };

  handleOnItemClick = (item) => {
    //set item clicked on
    this.setState({
      returnChange: false,
      itemToBuy: item,
      change: [],
      error: { hasError: false, message: "" },
      onSuccess: { message: "" },
    });
  };

  handleOnReturnChange = () => {
    const { total } = this.state;
    //get change denonimations
    const change = getChangeDenomination(total);

    //clear change
    this.setState({ change: [] });

    //set change state
    this.setState({
      returnChange: true,
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
