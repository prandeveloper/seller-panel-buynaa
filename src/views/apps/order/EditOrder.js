import React from "react";
import {
  Card,
  CardBody,
  Form,
  Row,
  Col,
  Media,
  Table,
  InputGroup,
  Input,
  InputGroupAddon,
  Button,
  FormGroup,
  CustomInput,
  Label,
} from "reactstrap";
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb";
import axiosConfig from "../../../axiosConfig";
import { history } from "../../../history";

import "moment-timezone";
import moment from "moment";
import logo from "../../../assets/img/logo/ilogo.png";
import { Mail, Phone, FileText, Download } from "react-feather";
import "../../../assets/scss/pages/invoice.scss";

const params = {
  spaceBetween: 10,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
};
class EditOrder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "",
      data: [],
    };
  }

  componentDidMount() {
    let { id } = this.props.match.params;
    axiosConfig
      .get(`/getoneorderbyseller/${id}`, {
        headers: {
          "auth-adtoken": localStorage.getItem("auth-adtoken"),
        },
      })
      .then((response) => {
        console.log(response.data.data);
        this.setState({ data: response.data.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.props.match.params, this.state);

    let { id } = this.props.match.params;
    axiosConfig
      .post(`/updateOrderStatusbyseller/${id}`, this.state, {
        headers: {
          "auth-adtoken": localStorage.getItem("auth-adtoken"),
        },
      })
      .then((response) => {
        console.log(response);
        this.props.history.push("/app/order/allOrder");
      })
      .catch((error) => {
        console.log(error.error);
      });
  };

  render() {
    return (
      <React.Fragment>
        {/* <Breadcrumbs breadCrumbTitle="Invoice" /> */}

        <Row>
          <Col className="" sm="12">
            <Card className="">
              <CardBody>
                <Row>
                  <Col md="6" sm="12" className="pt-1">
                    <h1>Edit Order</h1>
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
                <Form onSubmit={this.submitHandler}>
                  <Row className="my-3">
                    <Col md="8" sm="12">
                      <FormGroup>
                        <Label>Change Order Status</Label>
                        <CustomInput
                          type="select"
                          placeholder="Order Status"
                          name="status"
                          value={this.state.status}
                          onChange={this.changeHandler}
                        >
                          <option>Select Status.....</option>
                          <option value="Order Placed">Order Placed</option>
                          <option value="Delivered">Delivered</option>
                          <option value="Pending">Pending</option>
                          <option value="Cancelled">Cancelled</option>
                          <option value="Completed">Completed</option>
                        </CustomInput>
                      </FormGroup>
                    </Col>
                    <Col md="8" sm="12">
                      <Button color="primary" type="submit">
                        Update
                      </Button>
                    </Col>
                  </Row>
                </Form>
                {this.state.data.map((detail) => (
                  <div>
                    <Card>
                      <Row className="mt-3">
                        <Col lg="6" md="6" sm="12" className="shadow">
                          <h5 className="m-2">ORDER ID</h5>
                        </Col>
                        <Col lg="6" md="6" sm="12" className="shadow">
                          <h6 className="m-2">{detail?.orderId?._id}</h6>
                        </Col>
                        <Col lg="6" md="6" sm="12" className="shadow">
                          <h5 className="m-2">ORDER STATUS</h5>
                        </Col>
                        <Col lg="6" md="6" sm="12" className="shadow">
                          <h6 className="m-2">{detail?.status}</h6>
                        </Col>
                        <Col lg="6" md="6" sm="12" className="shadow">
                          <h5 className="m-2">ORDER DATE</h5>
                        </Col>
                        <Col lg="6" md="6" sm="12" className="shadow">
                          <h6 className="m-2">
                            {moment(detail?.orderId?.createdAt).format("ll")}
                          </h6>
                        </Col>
                        <Col lg="6" md="6" sm="12" className="shadow">
                          <h5 className="m-2">SHIPPING DATE</h5>
                        </Col>
                        <Col lg="6" md="6" sm="12" className="shadow">
                          <h6 className="m-2">
                            {detail?.orderId.shipping_date}
                          </h6>
                        </Col>
                        <Col lg="6" md="6" sm="12" className="shadow">
                          <h5 className="m-2">ORDER TYPE</h5>
                        </Col>
                        <Col lg="6" md="6" sm="12" className="shadow">
                          <h6 className="m-2">{detail?.orderId.order_type}</h6>
                        </Col>
                        <Col lg="6" md="6" sm="12" className="shadow">
                          <h5 className="m-2">PAYMENT TYPE</h5>
                        </Col>
                        <Col lg="6" md="6" sm="12" className="shadow">
                          <h6 className="m-2">
                            {detail?.orderId.payment_type}
                          </h6>
                        </Col>
                      </Row>
                      <div>
                        {detail?.cartId.map((custom) => (
                          <Row>
                            <Col lg="6" md="6" sm="12" className="shadow">
                              <h5 className="m-2">CUSTOMER NAME</h5>
                            </Col>
                            <Col lg="6" md="6" sm="12" className="shadow">
                              <h6 className="m-2">
                                {custom?.customer?.firstname}{" "}
                                {custom?.customer?.lastname}
                              </h6>
                            </Col>
                            <Col lg="6" md="6" sm="12" className="shadow">
                              <h5 className="m-2">EMAIL</h5>
                            </Col>
                            <Col lg="6" md="6" sm="12" className="shadow">
                              <h6 className="m-2">{custom?.customer?.email}</h6>
                            </Col>
                            <Col lg="6" md="6" sm="12" className="shadow">
                              <h5 className="m-2">PHONE</h5>
                            </Col>
                            <Col lg="6" md="6" sm="12" className="shadow">
                              <h6 className="m-2">
                                {custom?.customer?.mobile}
                              </h6>
                            </Col>
                          </Row>
                        ))}
                      </div>
                      <Row>
                        <Col lg="6" md="6" sm="12" className="shadow">
                          <h5 className="m-2">ADDRESS</h5>
                        </Col>
                        <Col lg="6" md="6" sm="12" className="shadow">
                          <h6 className="m-2">
                            {detail?.orderId?.delivery_address.address} ,
                            {detail?.orderId?.delivery_address.locality}
                          </h6>
                        </Col>
                        <Col lg="6" md="6" sm="12" className="shadow">
                          <h5 className="m-2">CITY/STATE</h5>
                        </Col>
                        <Col lg="6" md="6" sm="12" className="shadow">
                          <h6 className="m-2">
                            {detail?.orderId?.delivery_address.city} /
                            {detail?.orderId?.delivery_address.state}
                          </h6>
                        </Col>
                        <Col lg="6" md="6" sm="12" className="shadow">
                          <h5 className="m-2">PINCODE</h5>
                        </Col>
                        <Col lg="6" md="6" sm="12" className="shadow">
                          <h6 className="m-2">
                            {detail?.orderId?.delivery_address.pincode}
                          </h6>
                        </Col>
                      </Row>
                    </Card>

                    <Card className="invoice-items-table pt-1">
                      <h3>Product Detail</h3>
                      <Row>
                        <Col sm="12">
                          <Table responsive borderless>
                            <thead>
                              <tr>
                                <th>
                                  <h6>PRODUCT NAME</h6>
                                </th>
                                <th>
                                  <h6>SKU NO.</h6>
                                </th>
                                <th>
                                  <h6>COLOR</h6>
                                </th>
                                <th>
                                  <h6>SIZE</h6>
                                </th>
                                <th>
                                  <h6>QUANTITY</h6>
                                </th>
                                <th>
                                  <h6>PRICE</h6>
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {detail?.cartId.map((cart) => (
                                <tr>
                                  <td>
                                    <h5>{cart?.product?.product_name}</h5>
                                  </td>
                                  <td>
                                    <h5>{cart?.product?.sku_no}</h5>
                                  </td>
                                  <td>
                                    <h5>{cart?.color}</h5>
                                  </td>
                                  <td>
                                    <h5>{cart?.size}</h5>
                                  </td>
                                  <td>
                                    <h5>{cart?.product_qty}</h5>
                                  </td>
                                  <td>
                                    <h5>{cart?.product_price}</h5>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </Table>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="6" md="6" sm="12">
                          <h5>GRAND TOTAL</h5>
                        </Col>
                        <Col lg="6" md="6" sm="12">
                          <h5 className="text-right">GRAND TOTAL</h5>
                        </Col>
                      </Row>
                    </Card>
                  </div>
                ))}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default EditOrder;
