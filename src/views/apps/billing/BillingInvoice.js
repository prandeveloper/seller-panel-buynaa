import React from "react";
import {
  Card,
  CardBody,
  Row,
  Col,
  Media,
  Table,
  InputGroup,
  Input,
  InputGroupAddon,
  Button,
} from "reactstrap";
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb";
import axiosConfig from "../../../axiosConfig";
import Moment from "react-moment";
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
class BillingInvoice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
  // - Product Search Button, Name, Quantity, Sell Price, Discount, GST, Grand Total,  Create Invoice Button, Destroy Button, Previous Button, Next Button
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs breadCrumbTitle="Invoice" />
        {this.state.data.map((detail) => (
          <Row>
            {/* <Col className="mb-1 invoice-header" md="5" sm="12">
            <InputGroup>
              <Input placeholder="Email" />
              <InputGroupAddon addonType="append">
                <Button.Ripple color="primary" outline>
                  Send Invoice
                </Button.Ripple>
              </InputGroupAddon>
            </InputGroup>
          </Col> */}
            <Col
              className="d-flex flex-column flex-md-row justify-content-end invoice-header mb-1"
              md="7"
              sm="12"
            >
              <Button
                className="mr-1 mb-md-0 mb-1"
                color="primary"
                onClick={() => window.print()}
              >
                <FileText size="15" />
                <span className="align-middle ml-50">Print</span>
              </Button>
              {/* <Button.Ripple color="primary" outline>
              <Download size="15" />
              <span className="align-middle ml-50">Download</span>
            </Button.Ripple> */}
            </Col>
            <Col className="invoice-wrapper" sm="12">
              <Card className="invoice-page">
                <CardBody>
                  <Row>
                    <Col md="6" sm="12" className="pt-1">
                      <Media className="pt-1">
                        <img src={logo} alt="logo" />
                      </Media>
                    </Col>
                    <Col md="6" sm="12" className="text-right">
                      <h1>Invoice</h1>
                      <div className="invoice-details mt-2">
                        <h5 className="mt-2">ORDER ID</h5>
                        <h6>{detail?.orderId?._id}</h6>
                      </div>
                      <div className="invoice-details mt-2">
                        <h5 className="mt-2">INVOICE DATE</h5>
                        <h6>
                          {moment(detail?.orderId?.createdAt).format("ll")}
                        </h6>
                      </div>
                    </Col>
                  </Row>
                  <Row className="pt-2">
                    <Col md="6" sm="12">
                      <h5>Recipient</h5>
                      <div className="recipient-info my-2">
                        <p>{this.state.data.customer_name}</p>
                      </div>
                      <div className="recipient-contact pb-2">
                        <p>
                          <Mail size={15} className="mr-50" />
                          {this.state.data.customer_email}
                        </p>
                        <p>
                          <Phone size={15} className="mr-50" />
                          {this.state.data.customer_phone}
                        </p>
                      </div>
                    </Col>
                    {/* <Col md="6" sm="12" className="text-right">
                    <h5>Microsion Technologies Pvt. Ltd.</h5>
                    <div className="company-info my-2">
                      <p>9 N. Sherwood Court</p>
                      <p>Elyria, OH</p>
                      <p>94203</p>
                    </div>
                    <div className="company-contact">
                      <p>
                        <Mail size={15} className="mr-50" />
                        hello@pixinvent.net
                      </p>
                      <p>
                        <Phone size={15} className="mr-50" />
                        +91 999 999 9999
                      </p>
                    </div>
                  </Col> */}
                  </Row>
                  <div className="invoice-items-table pt-1">
                    <Row>
                      <Col sm="12">
                        <Table responsive borderless>
                          <thead>
                            <tr>
                              <th>Product Nane</th>
                              <th>Quantity</th>
                              <th>Sell Price</th>
                              <th>Discount</th>
                              <th>Amount</th>
                            </tr>
                          </thead>
                          <tbody>
                            {this.state.data.product?.map((prod) => (
                              <tr>
                                <td>{prod.name}</td>
                                <td>{prod.qty}</td>
                                <td>{prod.cost}</td>
                                <td>{prod.discount}</td>
                                <td>{prod.amount}</td>
                              </tr>
                            ))}
                            {/* <tr>
                            <td>Newsletter template design</td>
                            <td>{this.state.data.product?.name}</td>
                            <td>{this.state.data.product?.qty}</td>
                            <td>{this.state.data.product?.cost}</td>
                          </tr> */}
                          </tbody>
                        </Table>
                      </Col>
                    </Row>
                  </div>
                  <div className="invoice-total-table">
                    <Row>
                      <Col
                        sm={{ size: 7, offset: 5 }}
                        xs={{ size: 7, offset: 5 }}
                      >
                        <Table responsive borderless>
                          <tbody>
                            {/* <tr>
                            <th>Sell Price</th>
                            <td>114000 USD</td>
                          </tr> */}

                            <tr>
                              <th>Total Quantity</th>
                              <td>{this.state.data.total_qty}</td>
                            </tr>
                            <tr>
                              <th>Grand Total</th>
                              <td>{this.state.data.total_amount}</td>
                            </tr>
                          </tbody>
                        </Table>
                      </Col>
                    </Row>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        ))}
      </React.Fragment>
    );
  }
}

export default BillingInvoice;
