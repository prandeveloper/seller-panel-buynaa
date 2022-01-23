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
        reference_no: "",
        from_warehouse: "",
        to_warehouse: "",
        transfer_date: "",
        delivery_duedate: "",
        transfer_type: "",
        reason: "",
        item: {
          sl_no: "",
          product_name: "",
          hsn: "",
          sku: "",
          quality: "",
          cost_price: "",
          gst: "",
          total: "",
        },
        items: [
          {
            sl_no: "",
            product_name: "",
            hsn: "",
            sku: "",
            quality: "",
            cost_price: "",
            gst: "",
            total: "",
          },
        ],
      };
    }
  }
  async componentDidMount() {
    //Warehouse List
    axiosConfig
      .get("/getwarehouse")
      .then((response) => {
        console.log(response);
        this.setState({ warehouseL: response.data.data });
      })
      .catch((error) => {
        console.log(error);
      });

    //Reason List
    axiosConfig
      .get("/getReason")
      .then((response) => {
        console.log(response);
        this.setState({ reasonL: response.data.data });
      })
      .catch((error) => {
        console.log(error);
      });
    //Transfer Type List
    axiosConfig
      .get("/getTransfertype")
      .then((response) => {
        console.log(response);
        this.setState({ transfertypeL: response.data.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  changeHandler1 = (e) => {
    this.setState({ status: e.target.value });
  };

  //table
  updateMessage(event) {
    this.setState({
      message: event.target.value,
    });
  }

  updateMessage(event) {
    //event.target.name;
    console.log(event.target.name, event.target.value);

    this.setState((prevState) => {
      let item = Object.assign({}, prevState.item);
      item[event.target.name] = event.target.value;
      // item.sl_no = "someothername";
      return { item };
    });
    console.log(this.state.item);
    // this.setState({
    //   message: event.target.value,
    // });
  }

  handleClick() {
    var items = this.state.items;

    items.push(this.state.message);

    this.setState({
      items: items,
    });
  }

  renderRows() {
    var context = this;
    return this.state.items.map(function (o, i) {
      return (
        <tr key={"item-" + i}>
          <td>
            <Input
              type="text"
              value={o.sl_no}
              onChange={context.handleItemChanged.bind(context, i)}
            />
          </td>
          <td>
            <Input
              type="text"
              value={o.product_name}
              onChange={context.handleItemChanged.bind(context, i)}
            />
          </td>
          <td>
            <Input
              type="text"
              value={o.hsn}
              onChange={context.handleItemChanged.bind(context, i)}
            />
          </td>
          <td>
            <Input
              type="text"
              value={o.sku}
              onChange={context.handleItemChanged.bind(context, i)}
            />
          </td>
          <td>
            <Input
              type="text"
              value={o.quality}
              onChange={context.handleItemChanged.bind(context, i)}
            />
          </td>
          <td>
            <Input
              type="text"
              value={o.cost_price}
              onChange={context.handleItemChanged.bind(context, i)}
            />
          </td>
          <td>
            <Input
              type="text"
              value={o.gst}
              onChange={context.handleItemChanged.bind(context, i)}
            />
          </td>
          <td>
            <Input
              type="text"
              value={o.total}
              onChange={context.handleItemChanged.bind(context, i)}
            />
          </td>
          <td>
            <Button
              className="mr-1"
              color="secondary"
              type="button"
              style={{ backgroundColor: "#ab1515" }}
              onClick={context.handleItemDelete.bind(context, i)}
            >
              Delete
            </Button>
          </td>
        </tr>
      );
    });
  }

  handleItemChanged(i, event) {
    var items = this.state.items;

    items[i] = event.target.value;

    this.setState({
      items: items,
    });
  }

  handleItemDelete(i) {
    var items = this.state.items;

    items.splice(i, 1);

    this.setState({
      items: items,
    });
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();
    axiosConfig
      .post("/addstocktransfer", this.state)
      .then((response) => {
        console.log(response);
        swal("Success!", "Submitted SuccessFull!", "success");
        this.props.history.push("/app/stockControl/StockTransferRequest");
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
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
                    type="number"
                    name="reference_no"
                    value={this.state.reference_no}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" className="mb-1">
                  <Label>Select From Warehouse</Label>
                  <CustomInput
                    type="select"
                    name="from_warehouse"
                    value={this.state.from_warehouse}
                    onChange={this.changeHandler}
                  >
                    {this.state.warehouseL?.map((warehouseList) => (
                      <option key={warehouseList._id} value={warehouseList._id}>
                        {warehouseList.warehousename}
                      </option>
                    ))}
                  </CustomInput>
                </Col>
                <Col lg="6" md="6" className="mb-1">
                  <Label>Select To Warehouse</Label>
                  <CustomInput
                    type="select"
                    name="to_warehouse"
                    value={this.state.to_warehouse}
                    onChange={this.changeHandler}
                  >
                    {this.state.warehouseL?.map((warehouseList) => (
                      <option key={warehouseList._id} value={warehouseList._id}>
                        {warehouseList.warehousename}
                      </option>
                    ))}
                  </CustomInput>
                </Col>
                <Col lg="6" md="6" className="mb-1">
                  <Label>Transfer Date</Label>
                  <Input
                    type="date"
                    name="transfer_date"
                    value={this.state.transfer_date}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" className="mb-1">
                  <Label>Delivery Due Date</Label>
                  <Input
                    type="date"
                    name="delivery_duedate"
                    value={this.state.delivery_duedate}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" className="mb-1">
                  <Label>Transfer Type</Label>
                  <CustomInput
                    type="select"
                    name="transfer_type"
                    value={this.state.transfer_type}
                    onChange={this.changeHandler}
                  >
                    {this.state.transfertypeL?.map((transfertypeList) => (
                      <option
                        key={transfertypeList._id}
                        value={transfertypeList._id}
                      >
                        {transfertypeList.transfer_type}
                      </option>
                    ))}
                  </CustomInput>
                </Col>
                <Col lg="6" md="6" className="mb-1">
                  <Label>Reason</Label>
                  <CustomInput
                    type="select"
                    name="reason"
                    value={this.state.reason}
                    onChange={this.changeHandler}
                  >
                    {this.state.reasonL?.map((reasonList) => (
                      <option key={reasonList._id} value={reasonList._id}>
                        {reasonList.reason}
                      </option>
                    ))}
                  </CustomInput>
                </Col>
              </Row>
              <Row className="mb-2">
                <div>
                  <table>
                    <thead>
                      <tr>
                        <th width="100px">SL No.</th>
                        <th width="200px">Product Name </th>
                        <th width="100px">HSN</th>
                        <th width="100px">SKU</th>
                        <th width="100px">Quantity</th>
                        <th width="100px">Cost Price </th>
                        <th width="100px">GST</th>
                        <th width="100px">Total</th>
                      </tr>
                    </thead>
                    <tbody>{this.renderRows()}</tbody>
                  </table>
                  <hr />
                  <table>
                    {/* <thead>
                      <tr>
                        <th width="100px">SL No.</th>
                        <th width="200px">Product Name </th>
                        <th width="100px">HSN</th>
                        <th width="100px">SKU</th>
                        <th width="100px">Quantity</th>
                        <th width="100px">Cost Price </th>
                        <th width="100px">GST</th>
                        <th width="100px">Total</th>
                      </tr>
                    </thead> */}
                    <tbody>
                      <tr>
                        <td width="100px">
                          <Input
                            className="md-1"
                            type="text"
                            name="sl_no"
                            onChange={this.updateMessage.bind(this)}
                          />
                        </td>
                        <td width="200px">
                          <Input
                            className="md-1"
                            type="text"
                            name="product_name"
                            onChange={this.updateMessage.bind(this)}
                          />
                        </td>
                        <td width="100px">
                          <Input
                            className="md-1"
                            type="text"
                            name="hsn"
                            onChange={this.updateMessage.bind(this)}
                          />
                        </td>
                        <td width="100px">
                          <Input
                            className="md-1"
                            type="text"
                            name="sku"
                            onChange={this.updateMessage.bind(this)}
                          />
                        </td>
                        <td width="100px">
                          <Input
                            className="md-1"
                            type="text"
                            name="quality"
                            onChange={this.updateMessage.bind(this)}
                          />
                        </td>
                        <td width="100px">
                          <Input
                            className="md-1"
                            type="text"
                            name="cost_price"
                            onChange={this.updateMessage.bind(this)}
                          />
                        </td>
                        <td width="100px">
                          <Input
                            className="md-1"
                            type="text"
                            name="gst"
                            onChange={this.updateMessage.bind(this)}
                          />
                        </td>
                        <td width="100px">
                          <Input
                            className="md-1"
                            type="text"
                            name="total"
                            onChange={this.updateMessage.bind(this)}
                          />
                        </td>
                        <td>
                          <Button
                            color="primary"
                            type="button"
                            onClick={this.handleClick.bind(this)}
                            className="mr-1"
                          >
                            Add
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  {/* <tr>
                    <td width="100px">
                      <Input
                        className="md-1"
                        type="text"
                        onChange={this.updateMessage.bind(this)}
                      />
                    </td>
                    <td width="200px">
                      <Input
                        className="md-1"
                        type="text"
                        onChange={this.updateMessage.bind(this)}
                      />
                    </td>
                    <td width="100px">
                      <Input
                        className="md-1"
                        type="text"
                        onChange={this.updateMessage.bind(this)}
                      />
                    </td>
                    <td width="100px">
                      <Input
                        className="md-1"
                        type="text"
                        onChange={this.updateMessage.bind(this)}
                      />
                    </td>
                    <td width="100px">
                      <Input
                        className="md-1"
                        type="text"
                        onChange={this.updateMessage.bind(this)}
                      />
                    </td>
                    <td width="100px">
                      <Input
                        className="md-1"
                        type="text"
                        onChange={this.updateMessage.bind(this)}
                      />
                    </td>
                    <td width="100px">
                      <Input
                        className="md-1"
                        type="text"
                        onChange={this.updateMessage.bind(this)}
                      />
                    </td>
                    <td width="100px">
                      <Input
                        className="md-1"
                        type="text"
                        onChange={this.updateMessage.bind(this)}
                      />
                    </td>
                    <td>
                      <Button
                        color="primary"
                        type="button"
                        onClick={this.handleClick.bind(this)}
                        className="mr-1"
                      >
                        Add Item
                      </Button>
                    </td>
                  </tr> */}
                  {/* <Row>
                    <Col md="1">
                      <Input
                        className="md-1"
                        type="text"
                        onChange={this.updateMessage.bind(this)}
                      />
                    </Col>
                    <Col md="3">
                      <Input
                        className="md-"
                        type="text"
                        onChange={this.updateMessage.bind(this)}
                      />
                    </Col>
                    <Col md="1">
                      <Input
                        className="md-1"
                        type="text"
                        onChange={this.updateMessage.bind(this)}
                      />
                    </Col>
                    <Col md="1">
                      <Input
                        className="md-1"
                        type="text"
                        onChange={this.updateMessage.bind(this)}
                      />
                    </Col>
                    <Col md="1">
                      <Input
                        className="md-1"
                        type="text"
                        onChange={this.updateMessage.bind(this)}
                      />
                    </Col>
                    <Col md="1">
                      <Input
                        className="md-1"
                        type="text"
                        onChange={this.updateMessage.bind(this)}
                      />
                    </Col>
                    <Col md="1">
                      <Input
                        className="md-1"
                        type="text"
                        onChange={this.updateMessage.bind(this)}
                      />
                    </Col>
                    <Col md="1">
                      <Input
                        className="md-1"
                        type="text"
                        onChange={this.updateMessage.bind(this)}
                      />
                    </Col>
                    <Button
                      color="primary"
                      type="button"
                      onClick={this.handleClick.bind(this)}
                      className="mr-1"
                    >
                      Add Item
                    </Button>
                  </Row> */}
                </div>
              </Row>
              <Row>
                <Button color="primary" type="submit" className="mr-1 mb-1">
                  Add
                </Button>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}
export default AddStockTransfer;
