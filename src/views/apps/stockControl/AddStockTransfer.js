import React, { Component } from "react";
import {
  Card,
  CardBody,
  Col,
  Form,
  Row,
  Input,
  CustomInput,
  Label,
  Button,
  FormGroup,
} from "reactstrap";
import { history } from "../../../history";
import axiosConfig from "../../../axiosConfig";
import swal from "sweetalert";

export class AddStockTransfer extends Component {
  constructor(props) {
    super(props);
    {
      this.state = {
        addTextbox: [{}],
      };
    }
  }

  // async componentDidMount() {
  //   //Warehouse List
  //   axiosConfig
  //     .get("/getwarehouse")
  //     .then(response => {
  //       console.log(response);
  //       this.setState({ warehouseL: response.data.data });
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }
  addControls() {
    this.setState({
      addTextbox: [...this.state.addTextbox, {}],
    });
  }
  delControl(i) {
    this.state.addTextbox.splice(i, 1);
    this.setState({});
  }

  //   async componentDidMount() {
  //     //Product Category
  //     axiosConfig
  //       .get("/getproduct")
  //       .then(response => {
  //         console.log(response);
  //         this.setState({ productS: response.data.data });
  //       })
  //       .catch(error => {
  //         console.log(error);
  //       });
  //   }

  //   changeHandler1 = e => {
  //     this.setState({ status: e.target.value });
  //   };
  //   changeHandler = e => {
  //     this.setState({ [e.target.name]: e.target.value });
  //   };
  //   submitHandler = e => {
  //     e.preventDefault();

  //     axiosConfig
  //       .post("/addOffer", this.state)
  //       .then(response => {
  //         console.log(response);
  //         swal("Success!", "Submitted SuccessFull!", "success");
  //         this.props.history.push(
  //           "/app/offerAndCoupon/specialOffer/specialOfferList"
  //         );
  //       })
  //       .catch(error => {
  //         swal("Error!", "Error Received", "error");
  //         console.log(error);
  //       });
  //   };
  render() {
    return (
      <div>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Add New Stock Transfer
              </h1>
            </Col>
            <Col>
              <Button
                className=" btn btn-danger float-right"
                onClick={() =>
                  history.push("/app/stockControl/stockTransferRequest")
                }
              >
                Back
              </Button>
            </Col>
          </Row>
          <CardBody>
            <Form className="m-1" onSubmit={this.submitHandler}>
              <Row className="mb-2">
                <Col lg="6" md="6">
                  <Label>Referance Number</Label>
                  <Input
                    type="text"
                    name="offerTitle"
                    // value={this.state.offerTitle}
                    // onChange={this.changeHandler}
                  />
                </Col>
              </Row>

              <Row>
                <Col lg="6" md="6" className="mb-1">
                  <Label>Select From Warehouse</Label>
                  <CustomInput
                    type="select"
                    name="percentageOff"
                    // value={this.state.percentageOff}
                    // onChange={this.changeHandler}
                  >
                    {/* {this.state.warehouseL?.map(warehouseList => (
                      <option key={warehouseList._id} value={warehouseList._id}>
                        {warehouseList.warehousename}
                      </option>
                    ))} */}
                  </CustomInput>
                </Col>
                <Col lg="6" md="6" className="mb-1">
                  <Label>Select To Warehouse</Label>
                  <CustomInput
                    type="select"
                    name="percentageOff"
                    // value={this.state.percentageOff}
                    // onChange={this.changeHandler}
                  ></CustomInput>
                </Col>

                <Col lg="6" md="6" className="mb-1">
                  <Label>Transfer Date</Label>
                  <Input
                    type="date"
                    name="sortorder"
                    // value={this.state.sortorder}
                    // onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" className="mb-1">
                  <Label>Delivery Due Date</Label>
                  <Input
                    type="date"
                    name="sortorder"
                    // value={this.state.sortorder}
                    // onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" className="mb-1">
                  <Label>Transfer Type</Label>
                  <CustomInput
                    type="select"
                    name="percentageOff"
                    // value={this.state.percentageOff}
                    // onChange={this.changeHandler}
                  ></CustomInput>
                </Col>
                <Col lg="6" md="6" className="mb-1">
                  <Label>Reason</Label>
                  <CustomInput
                    type="select"
                    name="percentageOff"
                    // value={this.state.percentageOff}
                    // onChange={this.changeHandler}
                  ></CustomInput>
                </Col>
              </Row>
              <Row className="mt-4">
                <div>
                  {this.state.addTextbox.map(index => (
                    <div>
                      {index ? (
                        <div id="btn">
                          <Row>
                            <Col lg="12" md="6" sm="6" className="mb-2">
                              <Row>
                                <Col lg="6" mf="6">
                                  <Button
                                    color="primary"
                                    onClick={() => this.addControls()}
                                  >
                                    Add Product
                                  </Button>
                                </Col>
                                <Col
                                  lg="6"
                                  mf="6"
                                  className="d-flex justify-content-end"
                                >
                                  <Button
                                    color="danger"
                                    onClick={() => this.delControl(index)}
                                  >
                                    Remove
                                  </Button>
                                </Col>
                              </Row>
                            </Col>
                          </Row>
                        </div>
                      ) : null}

                      <Row>
                        <Col md="4" sm="12">
                          <FormGroup>
                            <Label> Product Name </Label>
                            <Input type="text" placeholder=" Product Name" />
                          </FormGroup>
                        </Col>
                        <Col md="4" sm="12">
                          <FormGroup>
                            <Label> SKU </Label>
                            <Input type="text" placeholder="SKU" />
                          </FormGroup>
                        </Col>
                        <Col md="4" sm="12">
                          <FormGroup>
                            <Label> HSN </Label>
                            <Input type="text" rows="5" placeholder="HSN" />
                          </FormGroup>
                        </Col>
                        <Col md="4" sm="12">
                          <FormGroup>
                            <Label> Quantity </Label>
                            <Input
                              type="text"
                              rows="5"
                              placeholder="Quantity"
                            />
                          </FormGroup>
                        </Col>
                        <Col md="4" sm="12">
                          <FormGroup>
                            <Label> Cost price </Label>
                            <Input
                              type="text"
                              rows="5"
                              placeholder="Cost price"
                            />
                          </FormGroup>
                        </Col>
                        <Col md="4" sm="12">
                          <FormGroup>
                            <Label> GST </Label>
                            <Input type="text" rows="5" placeholder="GST" />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                  ))}
                </div>
              </Row>
              <Row className="mt-4">
                <Col md="6" sm="12">
                  <FormGroup>
                    <Label> Note</Label>
                    <Input type="textarea" placeholder="" />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Button.Ripple
                  color="primary"
                  type="submit"
                  className="mr-1 mb-1"
                >
                  Add
                </Button.Ripple>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}
export default AddStockTransfer;
