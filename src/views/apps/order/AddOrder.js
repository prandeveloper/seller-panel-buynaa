import React, { Component } from "react";

import {
  Card,
  CardBody,
  Col,
  Form,
  Row,
  Input,
  Label,
  Button,
  FormGroup,
  CustomInput,
} from "reactstrap";
import { history } from "../../../history";
import axiosConfig from "../../../axiosConfig";
import Axios from "axios";

export class AddOrder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //   name: "",
      //   sortorder: "",
      //   desc: "",
      //   brand_img: "",
      //   status: "",
      //   selectedFile: null,
      //   selectedName: "",
      customer: "",
      product: "",
      order_type: "",
      payment_type: "",
      qty: "",
      purchaseprice: "",
      delivery_address: "",
      order_date: "",
      status: "",
      productList: [],
      customerList: [],
    };
  }

  componentDidMount() {
    axiosConfig
      .get("/getproduct")
      .then((response) => {
        console.log(response);
        this.setState({ productList: response.data.data });
      })
      .catch((error) => {
        console.log(error);
      });

    Axios.get("http://35.154.86.59/api/user/allcustomer", {
      headers: {
        "auth-token": localStorage.getItem("token"),
      },
    })
      .then((response) => {
        console.log(response);
        this.setState({ customerList: response.data.data });
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  //   onChangeHandler = (event) => {
  //     this.setState({ selectedFile: event.target.files[0] });
  //     this.setState({ selectedName: event.target.files[0].name });
  //     console.log(event.target.files[0]);
  //   };

  changeHandler1 = (e) => {
    this.setState({ status: e.target.value });
  };
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    //http://35.154.86.59/api/admin/addorder

    axiosConfig
      .post("/addorder", this.state, {
        headers: {
          "auth-token": localStorage.getItem("token"),
        },
      })
      .then((response) => {
        console.log(response);
        //this.setState({ productList: response.data.data });
      })
      .catch((error) => {
        console.log(error.response);
      });
    // const data = new FormData();
    // data.append("name", this.state.name);
    // data.append("desc", this.state.desc);
    // data.append("sortorder", this.state.sortorder);
    // data.append("status", this.state.status);
    // if (this.state.selectedFile !== null) {
    //   data.append(
    //     "brand_img",
    //     this.state.selectedFile,
    //     this.state.selectedName
    //   );
    // }

    // customer,
    //   product,
    //   order_type,
    //   payment_type,
    //   qty,
    //   purchaseprice,
    //   delivery_address,
    //   order_date,
    //   status;
    //   for (var value of data.values()) {
    //     console.log(value);
    //  }
    // axiosConfig
    //   .post("/addbrand", data)
    //   .then((response) => {
    //     console.log(response);
    //     this.props.history.push("/app/products/brand/brandList");
    //     alert("New Brand Added !");
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };
  render() {
    return (
      <div>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Add New Brand
              </h1>
            </Col>
            <Col>
              <Button
                className=" btn btn-danger float-right"
                onClick={() => history.push("/app/order/allOrder")}
              >
                Back
              </Button>
            </Col>
          </Row>
          <CardBody>
            <Form className="m-1" onSubmit={this.submitHandler}>
              <Row className="mb-2">
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Customer Name</Label>
                    <CustomInput
                      type="select"
                      name="customer"
                      value={this.state.customer}
                      onChange={this.changeHandler}
                    >
                      {this.state.customerList.map((customer) => (
                        <option key={customer._id} value={customer._id}>
                          {customer.firstname}&nbsp;
                          {customer.lastname}
                        </option>
                      ))}
                    </CustomInput>
                    {/* <Input
                      type="text"
                      placeholder="Customer Name"
                      name="customer"
                      value={this.state.customer}
                      onChange={this.changeHandler}
                    /> */}
                  </FormGroup>
                </Col>

                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Select Product</Label>
                    <CustomInput
                      type="select"
                      name="product"
                      value={this.state.product}
                      onChange={this.changeHandler}
                    >
                      {this.state.productList.map((gRate) => (
                        <option key={gRate._id} value={gRate._id}>
                          {gRate.product_name}
                        </option>
                      ))}
                    </CustomInput>
                  </FormGroup>
                </Col>

                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Order Type</Label>
                    <CustomInput
                      type="select"
                      name="order_type"
                      value={this.state.order_type}
                      onChange={this.changeHandler}
                      readOnly="true"
                    >
                      <option value="In Shop" selected>
                        In Shop
                      </option>
                      <option value="Remote" selected>
                        Remote
                      </option>
                    </CustomInput>
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Payment Type</Label>
                    <CustomInput
                      type="select"
                      name="payment_type"
                      value={this.state.payment_type}
                      onChange={this.changeHandler}
                    >
                      <option value="Cash" selected>
                        Cash
                      </option>
                      <option value="Online">Online</option>
                    </CustomInput>
                  </FormGroup>
                </Col>

                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Quantity</Label>
                    <Input
                      type="number"
                      min={0}
                      placeholder="Quantity"
                      name="qty"
                      value={this.state.qty}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>

                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Price</Label>
                    <Input
                      type="number"
                      min={0}
                      placeholder="Price"
                      name="purchaseprice"
                      value={this.state.purchaseprice}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>

                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Delivery Address</Label>
                    <Input
                      type="text"
                      placeholder="Address"
                      name="delivery_address"
                      value={this.state.delivery_address}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>

                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Order Date</Label>
                    <Input
                      type="date"
                      placeholder="Date"
                      name="order_date"
                      value={this.state.order_date}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>

                {/* <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Brand Image / Logo</Label>
                    <CustomInput type="file" onChange={this.onChangeHandler} />
                  </FormGroup>
                </Col> */}

                <Col lg="6" md="6" sm="6" className="mb-2 mt-1">
                  <FormGroup>
                    <Label className="mb-1">Status</Label>
                    <div
                      className="form-label-group"
                      onChange={(e) => this.changeHandler1(e)}
                    >
                      <input
                        style={{ marginRight: "3px" }}
                        type="radio"
                        name="status"
                        value="Active"
                      />
                      <span style={{ marginRight: "20px" }}>Active</span>

                      <input
                        style={{ marginRight: "3px" }}
                        type="radio"
                        name="status"
                        value="Inactive"
                      />
                      <span style={{ marginRight: "3px" }}>Inactive</span>
                    </div>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Button.Ripple
                  color="primary"
                  type="submit"
                  className="mr-1 mb-1"
                >
                  Add Order
                </Button.Ripple>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default AddOrder;
