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

export class AddStockAdjustment extends Component {
  constructor(props) {
    super(props);
    {
      this.state = {
        // addTextbox: [{}],
        reference_no:	"",
        adjustment_date: "",
        warehouse:	"",
        reason:	"",
        adjusted_qty:	"",
        adjusted_value:	"",

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

        // Reason List
      axiosConfig
      .get("/getReason")
      .then(response =>{
        console.log(response);
        this.setState({reasonL: response.data.data});
      })
      .catch(error=>{
        console.log(error);
      })
    }
  addControls() {
    this.setState({
      addTextbox: [...this.state.addTextbox, {}],
    });
  }
  delControl(i) {
    this.state.addTextbox.splice(i, 1);
    this.setState({});
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
        .post("/addstockadjustment", this.state)
        .then(response => {
          console.log(response);
          swal("Success!", "Submitted SuccessFull!", "success");
          this.props.history.push(
            "/app/stockControl/stockAdjustment"
          );
        })
        .catch(error => {
          swal("Error!", "Error Received", "error");
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
                Add Stock Adjustment
              </h1>
            </Col>
            <Col>
              <Button
                className=" btn btn-danger float-right"
                onClick={() =>
                  history.push("/app/stockControl/stockTransferRequest")}
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
                    name="reference_no"
                    value={this.state.reference_no}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" className="mb-1">
                  <Label>Stock Adjustment Date</Label>
                  <Input
                    type="date"
                    name="adjustment_date"
                    value={this.state.adjustment_date}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" className="mb-1">
                  <Label>Warehouse</Label>
                  <CustomInput
                    type="select"
                    name="warehouse"
                    value={this.state.warehouse}
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
                <Col lg="6" md="6" className="mb-1">
                  <Label>Adjusted qty</Label>
                  <Input
                    type="number"
                    name="adjusted_qty"
                    value={this.state.adjusted_qty}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" className="mb-1">
                  <Label>Adjusted Value</Label>
                  <Input
                    type="text"
                    name="adjusted_value"
                    value={this.state.adjusted_value}
                    onChange={this.changeHandler}
                  ></Input>
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
export default AddStockAdjustment;