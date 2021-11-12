import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Form,
  Row,
  Input,
  CustomInput,
  Label,
  Button,
} from "reactstrap";
import { history } from "../../../history";
import axiosConfig from "../../../axiosConfig";

export class AddStore extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFile: null,
      selectedName: "",
      storeID: "",
      store_logo: "",
      store_name: "",
      email: "",
      mobile: "",
      address: "",
      country: "",
      state: "",
      city: "",
      owner_name: "",
      sortorder: "",
      status: "",
    };
  }

  onChangeHandler = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
    this.setState({ selectedName: event.target.files[0].name });
    console.log(event.target.files[0]);
  };

  changeHandler1 = (e) => {
    this.setState({ status: e.target.value });
  };
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("storeID", this.state.storeID);
    data.append("store_name", this.state.store_name);
    data.append("email", this.state.email);
    data.append("mobile", this.state.mobile);
    data.append("address", this.state.address);
    data.append("country", this.state.country);
    data.append("state", this.state.state);
    data.append("city", this.state.city);
    data.append("owner_name", this.state.owner_name);
    data.append("sortorder", this.state.sortorder);
    data.append("status", this.state.status);
    if (this.state.selectedFile !== null) {
      data.append(
        "store_logo",
        this.state.selectedFile,
        this.state.selectedName
      );
    }
    for (var value of data.values()) {
      console.log(value);
    }
    axiosConfig
      .post("/addstore", data)
      .then((response) => {
        console.log(response);
        this.props.history.push("/app/myStore/storeList");
      })
      .catch((error) => {
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
                Add New Store
              </h1>
            </Col>
            <Col>
              <Button
                className=" btn btn-danger float-right"
                onClick={() => history.push("/app/myStore/storeList")}
              >
                Back
              </Button>
            </Col>
          </Row>
          <CardBody>
            <Form className="m-1" onSubmit={this.submitHandler}>
              <Row className="mb-2">
                <Col lg="6" md="4" sm="4" className="mb-2">
                  <Label>Store ID:</Label>
                  <Input
                    type="text"
                    placeholder="Store ID"
                    name="storeID"
                    value={this.state.storeID}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="4">
                  <Label>Store Name: </Label>
                  <Input
                    type="text"
                    name="store_name"
                    value={this.state.store_name}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="4" sm="4" className="mb-2">
                  <Label>Store Email</Label>
                  <Input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={this.state.email}
                    onChange={this.changeHandler}
                  />
                </Col>{" "}
                <Col lg="6" md="4" sm="4" className="mb-2">
                  <Label>Mobile Number</Label>
                  <Input
                    required
                    type="number"
                    name="mobile"
                    value={this.state.mobile}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="4" className="mb-1">
                  <Label>Store Address: *</Label>
                  <Input
                    type="textarea"
                    name="address"
                    value={this.state.address}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="4" sm="4" className="mb-2">
                  <Label>City / District:</Label>
                  <Input
                    required
                    type="text"
                    placeholder="City"
                    name="city"
                    value={this.state.city}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="4" sm="4" className="mb-2">
                  <Label>State</Label>
                  <Input
                    required
                    type="text"
                    placeholder="State"
                    name="state"
                    value={this.state.state}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="4" sm="4" className="mb-2">
                  <Label>Country:</Label>
                  <Input
                    required
                    type="text"
                    placeholder="Country"
                    name="country"
                    value={this.state.country}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="4" sm="4" className="mb-2">
                  <Label>Owner Name</Label>
                  <Input
                    required
                    type="text"
                    name="owner_name"
                    value={this.state.owner_name}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="4" sm="4" className="mb-2">
                  <Label>SortOrder</Label>
                  <Input
                    required
                    type="number"
                    name="sortorder"
                    value={this.state.sortorder}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="4">
                  <Label>Choose Store Logo:</Label>
                  <CustomInput type="file" onChange={this.onChangeHandler} />
                </Col>
                <Col lg="6" md="4" sm="4" className="mb-2 mt-1">
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
                </Col>
              </Row>
              <Row>
                <Button.Ripple
                  color="primary"
                  type="submit"
                  className="mr-1 mb-1"
                >
                  Add Store
                </Button.Ripple>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}
export default AddStore;

//  {/* <Col lg="6" md="4">
//                 <Label> </Label>
//                 <CustomInput type="select" placeholder="" name="" >
//                 <option>1</option>
//                 <option>2</option>
//                 <option>3</option>
//                 <option>4</option>
//                 </CustomInput>
//               </Col> */}
//
