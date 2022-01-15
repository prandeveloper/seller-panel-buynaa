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
      };
    }
  }
  async componentDidMount() {
    //Warehouse List
    axiosConfig
      .get("/getwarehouse")
      .then(response => {
        console.log(response);
        this.setState({ warehouseL: response.data.data });
      })
      .catch(error => {
        console.log(error);
      });

    //Reason List
      axiosConfig
      .get("/getReason")
      .then(response => {
        console.log(response);
        this.setState({ reasonL: response.data.data });
      })
      .catch(error => {
        console.log(error);
      });
         //Transfer Type List
         axiosConfig
         .get("/getTransfertype")
         .then(response => {
           console.log(response);
           this.setState({ transfertypeL: response.data.data });
         })
         .catch(error => {
           console.log(error);
         });
  }
  changeHandler1 = e => {
    this.setState({ status: e.target.value });
  };
  
  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = e => {
    e.preventDefault();
    axiosConfig
      .post("/addstocktransfer", this.state)
      .then(response => {
        console.log(response);
        swal("Success!", "Submitted SuccessFull!", "success");
        this.props.history.push("/app/stockControl/StockTransferRequest");
      })
      .catch(error => {
        console.log(error);
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
                  history.push("/app/stockControl/stockTransferRequest")}>
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
                      onChange={this.changeHandler}/>
                  </Col>
                  <Col lg="6" md="6" className="mb-1">
                    <Label>Select From Warehouse</Label>
                    <CustomInput
                      type="select"
                      name="from_warehouse"
                      value={this.state.from_warehouse}
                      onChange={this.changeHandler}
                    >
                      {this.state.warehouseL?.map(warehouseList => (
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
                    {this.state.warehouseL?.map(warehouseList => (
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
                    {this.state.transfertypeL?.map(transfertypeList => (
                    <option key={transfertypeList._id} value={transfertypeList._id}>
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
                           {this.state.reasonL?.map(reasonList => (
                        <option key={reasonList._id} value={reasonList._id}>
                          {reasonList.reason}
                        </option>
                      ))}
                    </CustomInput>
                  </Col>
                </Row>
                <Row>
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-1 mb-1">
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