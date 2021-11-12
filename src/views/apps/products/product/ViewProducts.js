import React from "react";
import { Card, CardBody, Row, Col, Button } from "reactstrap";
import { history } from "../../../../history";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";
import "../../../../assets/scss/pages/app-ecommerce-shop.scss";
import axiosConfig from "../../../../axiosConfig";

class ViewProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    let { id } = this.props.match.params;
    axiosConfig
      .get(`/getoneproduct/${id}`)
      .then((response) => {
        this.setState({ data: response.data.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  // state = {
  //   selectedColor: 1,
  // };
  // toggleSelectedColor = (color) => this.setState({ selectedColor: color });
  render() {
    return (
      <React.Fragment>
        <Card className="overflow-hidden app-ecommerce-details">
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Product Detail
              </h1>
            </Col>
            <Col>
              <Button
                className=" btn btn-danger float-right"
                onClick={() =>
                  history.push("/app/products/product/productsList")
                }
              >
                Back
              </Button>
            </Col>
          </Row>
          <CardBody className="pb-0">
            <Row className="mb-5 mt-2">
              <Col
                className="d-flex align-items-start justify-content-center mb-2 mb-md-0"
                sm="12"
                md="5"
              >
                <img
                  src={this.state.data.product_img?.[0]}
                  alt="Google Home"
                  height="300"
                  width="250"
                />
              </Col>

              <Col md="7" sm="12">
                <h4>Product Name</h4>
                <h6>{this.state.data.product_name}</h6>
                <hr />
                <h4>Cost Price</h4>
                <h6>{this.state.data.cost_price}</h6>
                <hr />
                <h4>Selling Price </h4>
                <h6>{this.state.data.sell_price}</h6>
                <hr />
                <h4>GSt Rate </h4>
                <h6>{this.state.data.gst}</h6>
                <hr />
                <h4>SKU No.</h4>
                <h6>{this.state.data.sku_no}</h6>
                <hr />
                <h4>HSN/SAC</h4>
                <h6>{this.state.data.hsn_sac_no}</h6>
                <hr />
                <h4>Short Description </h4>
                <h6>{this.state.data.short_desc}</h6>
                <hr />
                <h4>Product Description </h4>
                <h6>{ReactHtmlParser(this.state.data.long_desc)}</h6>
                <hr />
                <h4>Brand</h4>
                <h6>{this.state.data.brand?.name}</h6>
                <hr />
                <h4>Product Category</h4>
                <h6>{this.state.data.productcategory?.name}</h6>
                <hr />
                <h4>Product Sub Category </h4>
                <h6>{this.state.data.productsubcategory?.name}</h6>
                <hr />
                <h4>Size</h4>
                <h6>{this.state.data.size}</h6>
                <hr />
                <h4>Colour </h4>
                <h6>{this.state.data.colour}</h6>
                <hr />
                <h4>Material </h4>
                <h6>{this.state.data.material}</h6>
                <hr />
                <h4>Stock Quantity </h4>
                <h6>{this.state.data.qty}</h6>
                <hr />
                <h4>Re-Order Level</h4>
                <h6>{this.state.data.reorder_level}</h6>
                <hr />
                <h4>Stock Available </h4>
                <h6>{this.state.data.stock}</h6>
                <hr />
                {/* <h4>Colors</h4>
                <div
                  className={classnames(
                    "color-radio color-radio-primary mr-50",
                    {
                      selected: this.state.selectedColor === 1,
                    }
                  )}
                  onClick={() => this.toggleSelectedColor(1)}
                >
                  <div className="radio-content"></div>
                </div>
                <div
                  className={classnames(
                    "color-radio color-radio-success mr-50",
                    {
                      selected: this.state.selectedColor === 2,
                    }
                  )}
                  onClick={() => this.toggleSelectedColor(2)}
                >
                  <div className="radio-content"></div>
                </div>
                <div
                  className={classnames(
                    "color-radio color-radio-danger mr-50",
                    {
                      selected: this.state.selectedColor === 3,
                    }
                  )}
                  onClick={() => this.toggleSelectedColor(3)}
                >
                  <div className="radio-content"></div>
                </div>{" "}
                <div
                  className={classnames("color-radio color-radio-info mr-50", {
                    selected: this.state.selectedColor === 4,
                  })}
                  onClick={() => this.toggleSelectedColor(4)}
                >
                  <div className="radio-content"></div>
                </div>
                <div
                  className={classnames(
                    "color-radio color-radio-warning mr-50",
                    {
                      selected: this.state.selectedColor === 5,
                    }
                  )}
                  onClick={() => this.toggleSelectedColor(5)}
                >
                  <div className="radio-content"></div>
                </div>
                <div
                  className={classnames("color-radio color-radio-dark", {
                    selected: this.state.selectedColor === 6,
                  })}
                  onClick={() => this.toggleSelectedColor(6)}
                >
                  <div className="radio-content"></div>
                </div>
                <hr />
                <h6 className="my-50">
                  <span>Available</span>
                  <span className="mx-50">-</span>
                  <span className="text-success">In Stock</span>
                </h6> */}
                {/* <div className="action-btns">
                  <Button.Ripple className="mr-1 mb-1" color="primary">
                    <ShoppingCart size={15} />
                    <span className="align-middle ml-50">ADD TO CART</span>
                  </Button.Ripple>
                  <Button.Ripple className="mb-1" color="danger" outline>
                    <Heart size={15} />
                    <span className="align-middle ml-50">WISHLIST</span>
                  </Button.Ripple>
                </div> */}
                {/* <div className="d-flex flex-wrap social-media-btns">
                  <Button.Ripple
                    className="mr-1 btn-icon rounded-circle"
                    color="primary"
                    outline
                  >
                    <Facebook size={15} />
                  </Button.Ripple>
                  <Button.Ripple
                    className="mr-1 btn-icon rounded-circle"
                    color="info"
                    outline
                  >
                    <Twitter size={15} />
                  </Button.Ripple>
                  <Button.Ripple
                    className="mr-1 btn-icon rounded-circle"
                    color="danger"
                    outline
                  >
                    <Youtube size={15} />
                  </Button.Ripple>
                  <Button.Ripple
                    className="btn-icon rounded-circle"
                    color="primary"
                    outline
                  >
                    <Instagram size={15} />
                  </Button.Ripple>
                </div> */}
              </Col>
            </Row>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}
export default ViewProducts;
