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
  CustomInput,
  FormGroup,
  CardTitle,
} from "reactstrap";
import { history } from "../../../../history";
import axiosConfig from "../../../../axiosConfig";

export class AddEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employee_name: "",
      phone_no: "",
      email: "",
      password: "",
      designation: "",
      brand_img: "",
      sortorder: "",
      status: "",
      selectedFile: null,
      selectedName: "",
      colors: {
        red: true,
        green: false,
        blue: true,
        yellow: false,
      },
    };
  }

  handleClick = event => {
    const { name, checked } = event.target;

    this.setState(prevState => {
      const colors = prevState.colors;
      colors[name] = checked;
      return colors;
    });
  };

  onChangeHandler = event => {
    this.setState({ selectedFile: event.target.files[0] });
    this.setState({ selectedName: event.target.files[0].name });
    console.log(event.target.files[0]);
  };

  changeHandler1 = e => {
    this.setState({ status: e.target.value });
  };
  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  changeHandler2 = e => {
    if (e.target.value.length < 11)
      this.setState({
        [e.target.name]: e.target.value,
      });
  };
  submitHandler = e => {
    e.preventDefault();
    const data = new FormData();
    data.append("employee_name", this.state.employee_name);
    data.append("phone_no", this.state.phone_no);
    data.append("email", this.state.email);
    data.append("password", this.state.password);
    data.append("designation", this.state.designation);
    data.append("sortorder", this.state.sortorder);
    data.append("status", this.state.status);
    if (this.state.selectedFile !== null) {
      data.append("image", this.state.selectedFile, this.state.selectedName);
    }
    //   for (var value of data.values()) {
    //     console.log(value);
    //  }
    //   for (var value of data.values()) {
    //     console.log(value);
    //  }
    axiosConfig
      .post("/addemployee", data)
      .then(response => {
        console.log(response);
        this.props.history.push("/app/contactUs/employee/employeeList");
      })
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    const favColors = Object.keys(this.state.colors)
      .filter(key => this.state.colors[key])
      .join(", ");
    return (
      <div>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Add New Employee
              </h1>
            </Col>
            <Col>
              <Button
                className=" btn btn-danger float-right"
                onClick={() =>
                  history.push("/app/contactUs/employee/employeeList")
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
                  <FormGroup>
                    <Label>Employee Name</Label>
                    <Input
                      type="text"
                      placeholder="Employee Name"
                      name="name"
                      value={this.state.name}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Phone Number</Label>
                    <Input
                      type="number"
                      placeholder="Phone Number"
                      name="phone_no"
                      value={this.state.phone_no}
                      onChange={this.changeHandler2}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Employee Email</Label>
                    <Input
                      type="email"
                      placeholder="Employee Email"
                      name="email"
                      value={this.state.email}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Password</Label>
                    <Input
                      type="password"
                      name="password"
                      value={this.state.password}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Designation</Label>
                    <CustomInput
                      type="select"
                      name="designation"
                      value={this.state.designation}
                      onChange={this.changeHandler}
                    >
                      <option>select</option>
                      <option value="owner">Owner</option>
                      <option value="manager">Manager</option>
                      <option value="employee">Employee</option>
                    </CustomInput>
                  </FormGroup>
                </Col>

                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Sort Order</Label>
                    <Input
                      type="number"
                      placeholder="Sort Order"
                      name="sortorder"
                      value={this.state.sortorder}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>

                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Brand Image / Logo</Label>
                    <CustomInput type="file" onChange={this.onChangeHandler} />
                  </FormGroup>
                </Col>

                <Col lg="6" md="6" sm="6" className="mb-1 ">
                  <FormGroup>
                    <Label className="mb-1">Status</Label>
                    <div
                      className="form-label-group"
                      onChange={e => this.changeHandler1(e)}
                    >
                      <input
                        style={{ marginRight: "3px", fontWeight: 800 }}
                        type="radio"
                        name="status"
                        value="Active"
                      />
                      <span style={{ marginRight: "20px", fontWeight: 800 }}>
                        Active
                      </span>

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
              <Card>
                <h2>Permissions</h2>
                <Row>
                  <Col lg="6" className="mt-1">
                    <main>
                      <div className="mt-2">
                        <h4>Store</h4>
                        <Row>
                          <Col>
                            <input
                              checked={this.state.colors.red}
                              onChange={this.handleClick}
                              type="checkbox"
                              name="red"
                            />{" "}
                            Red
                          </Col>
                          <Col>
                            <input
                              checked={this.state.colors.blue}
                              onChange={this.handleClick}
                              type="checkbox"
                              name="blue"
                            />{" "}
                            Blue
                          </Col>
                          <Col>
                            <input
                              checked={this.state.colors.green}
                              onChange={this.handleClick}
                              type="checkbox"
                              name="green"
                            />{" "}
                            Green
                          </Col>
                          <Col>
                            <input
                              checked={this.state.colors.yellow}
                              onChange={this.handleClick}
                              type="checkbox"
                              name="yellow"
                            />{" "}
                            Yellow
                          </Col>
                        </Row>
                      </div>
                      {/* <p> Your favourite colors are: {favColors}</p> */}
                    </main>
                  </Col>
                  <Col lg="6" className="mt-1">
                    <main>
                      <div className="mt-2">
                        <h4>Employee</h4>
                        <Row>
                          <Col>
                            <input
                              checked={this.state.colors.red}
                              onChange={this.handleClick}
                              type="checkbox"
                              name="red"
                            />{" "}
                            Red
                          </Col>
                          <Col>
                            <input
                              checked={this.state.colors.blue}
                              onChange={this.handleClick}
                              type="checkbox"
                              name="blue"
                            />{" "}
                            Blue
                          </Col>
                          <Col>
                            <input
                              checked={this.state.colors.green}
                              onChange={this.handleClick}
                              type="checkbox"
                              name="green"
                            />{" "}
                            Green
                          </Col>
                          <Col>
                            <input
                              checked={this.state.colors.yellow}
                              onChange={this.handleClick}
                              type="checkbox"
                              name="yellow"
                            />{" "}
                            Yellow
                          </Col>
                        </Row>
                      </div>
                      {/* <p> Your favourite colors are: {favColors}</p> */}
                    </main>
                  </Col>
                  <Col lg="6" className="mt-1">
                    <main>
                      <div className="mt-2">
                        <h4>Customer</h4>
                        <Row>
                          <Col>
                            <input
                              checked={this.state.colors.red}
                              onChange={this.handleClick}
                              type="checkbox"
                              name="red"
                            />{" "}
                            Red
                          </Col>
                          <Col>
                            <input
                              checked={this.state.colors.blue}
                              onChange={this.handleClick}
                              type="checkbox"
                              name="blue"
                            />{" "}
                            Blue
                          </Col>
                          <Col>
                            <input
                              checked={this.state.colors.green}
                              onChange={this.handleClick}
                              type="checkbox"
                              name="green"
                            />{" "}
                            Green
                          </Col>
                          <Col>
                            <input
                              checked={this.state.colors.yellow}
                              onChange={this.handleClick}
                              type="checkbox"
                              name="yellow"
                            />{" "}
                            Yellow
                          </Col>
                        </Row>
                      </div>
                      {/* <p> Your favourite colors are: {favColors}</p> */}
                    </main>
                  </Col>
                  <Col lg="6" className="mt-1">
                    <main>
                      <div className="mt-2">
                        <h4>Supplier</h4>
                        <Row>
                          <Col>
                            <input
                              checked={this.state.colors.red}
                              onChange={this.handleClick}
                              type="checkbox"
                              name="red"
                            />{" "}
                            Red
                          </Col>
                          <Col>
                            <input
                              checked={this.state.colors.blue}
                              onChange={this.handleClick}
                              type="checkbox"
                              name="blue"
                            />{" "}
                            Blue
                          </Col>
                          <Col>
                            <input
                              checked={this.state.colors.green}
                              onChange={this.handleClick}
                              type="checkbox"
                              name="green"
                            />{" "}
                            Green
                          </Col>
                          <Col>
                            <input
                              checked={this.state.colors.yellow}
                              onChange={this.handleClick}
                              type="checkbox"
                              name="yellow"
                            />{" "}
                            Yellow
                          </Col>
                        </Row>
                      </div>
                      {/* <p> Your favourite colors are: {favColors}</p> */}
                    </main>
                  </Col>
                  <Col lg="6" className="mt-1">
                    <main>
                      <div className="mt-2">
                        <h4>Product</h4>
                        <Row>
                          <Col>
                            <input
                              checked={this.state.colors.red}
                              onChange={this.handleClick}
                              type="checkbox"
                              name="red"
                            />{" "}
                            Red
                          </Col>
                          <Col>
                            <input
                              checked={this.state.colors.blue}
                              onChange={this.handleClick}
                              type="checkbox"
                              name="blue"
                            />{" "}
                            Blue
                          </Col>
                          <Col>
                            <input
                              checked={this.state.colors.green}
                              onChange={this.handleClick}
                              type="checkbox"
                              name="green"
                            />{" "}
                            Green
                          </Col>
                          <Col>
                            <input
                              checked={this.state.colors.yellow}
                              onChange={this.handleClick}
                              type="checkbox"
                              name="yellow"
                            />{" "}
                            Yellow
                          </Col>
                        </Row>
                      </div>
                      {/* <p> Your favourite colors are: {favColors}</p> */}
                    </main>
                  </Col>
                  <Col lg="6" className="mt-1">
                    <main>
                      <div className="mt-2">
                        <h4>Stock Control</h4>
                        <Row>
                          <Col>
                            <input
                              checked={this.state.colors.red}
                              onChange={this.handleClick}
                              type="checkbox"
                              name="red"
                            />{" "}
                            Red
                          </Col>
                          <Col>
                            <input
                              checked={this.state.colors.blue}
                              onChange={this.handleClick}
                              type="checkbox"
                              name="blue"
                            />{" "}
                            Blue
                          </Col>
                          <Col>
                            <input
                              checked={this.state.colors.green}
                              onChange={this.handleClick}
                              type="checkbox"
                              name="green"
                            />{" "}
                            Green
                          </Col>
                          <Col>
                            <input
                              checked={this.state.colors.yellow}
                              onChange={this.handleClick}
                              type="checkbox"
                              name="yellow"
                            />{" "}
                            Yellow
                          </Col>
                        </Row>
                      </div>
                      {/* <p> Your favourite colors are: {favColors}</p> */}
                    </main>
                  </Col>
                  <Col lg="6" className="mt-1">
                    <main>
                      <div className="mt-2">
                        <h4>Offers</h4>
                        <Row>
                          <Col>
                            <input
                              checked={this.state.colors.red}
                              onChange={this.handleClick}
                              type="checkbox"
                              name="red"
                            />{" "}
                            Red
                          </Col>
                          <Col>
                            <input
                              checked={this.state.colors.blue}
                              onChange={this.handleClick}
                              type="checkbox"
                              name="blue"
                            />{" "}
                            Blue
                          </Col>
                          <Col>
                            <input
                              checked={this.state.colors.green}
                              onChange={this.handleClick}
                              type="checkbox"
                              name="green"
                            />{" "}
                            Green
                          </Col>
                          <Col>
                            <input
                              checked={this.state.colors.yellow}
                              onChange={this.handleClick}
                              type="checkbox"
                              name="yellow"
                            />{" "}
                            Yellow
                          </Col>
                        </Row>
                      </div>
                      {/* <p> Your favourite colors are: {favColors}</p> */}
                    </main>
                  </Col>
                  <Col lg="6" className="mt-1">
                    <main>
                      <div className="mt-2">
                        <h4>Coupons</h4>
                        <Row>
                          <Col>
                            <input
                              checked={this.state.colors.red}
                              onChange={this.handleClick}
                              type="checkbox"
                              name="red"
                            />{" "}
                            Red
                          </Col>
                          <Col>
                            <input
                              checked={this.state.colors.blue}
                              onChange={this.handleClick}
                              type="checkbox"
                              name="blue"
                            />{" "}
                            Blue
                          </Col>
                          <Col>
                            <input
                              checked={this.state.colors.green}
                              onChange={this.handleClick}
                              type="checkbox"
                              name="green"
                            />{" "}
                            Green
                          </Col>
                          <Col>
                            <input
                              checked={this.state.colors.yellow}
                              onChange={this.handleClick}
                              type="checkbox"
                              name="yellow"
                            />{" "}
                            Yellow
                          </Col>
                        </Row>
                      </div>
                      {/* <p> Your favourite colors are: {favColors}</p> */}
                    </main>
                  </Col>
                  <Col lg="6" className="mt-1">
                    <main>
                      <div className="mt-2">
                        <h4>Billing</h4>
                        <Row>
                          <Col>
                            <input
                              checked={this.state.colors.red}
                              onChange={this.handleClick}
                              type="checkbox"
                              name="red"
                            />{" "}
                            Red
                          </Col>
                          <Col>
                            <input
                              checked={this.state.colors.blue}
                              onChange={this.handleClick}
                              type="checkbox"
                              name="blue"
                            />{" "}
                            Blue
                          </Col>
                          <Col>
                            <input
                              checked={this.state.colors.green}
                              onChange={this.handleClick}
                              type="checkbox"
                              name="green"
                            />{" "}
                            Green
                          </Col>
                          <Col>
                            <input
                              checked={this.state.colors.yellow}
                              onChange={this.handleClick}
                              type="checkbox"
                              name="yellow"
                            />{" "}
                            Yellow
                          </Col>
                        </Row>
                      </div>
                      {/* <p> Your favourite colors are: {favColors}</p> */}
                    </main>
                  </Col>
                  <Col lg="6" className="mt-1">
                    <main>
                      <div className="mt-2">
                        <h4>Purchase Order</h4>
                        <Row>
                          <Col>
                            <input
                              checked={this.state.colors.red}
                              onChange={this.handleClick}
                              type="checkbox"
                              name="red"
                            />{" "}
                            Red
                          </Col>
                          <Col>
                            <input
                              checked={this.state.colors.blue}
                              onChange={this.handleClick}
                              type="checkbox"
                              name="blue"
                            />{" "}
                            Blue
                          </Col>
                          <Col>
                            <input
                              checked={this.state.colors.green}
                              onChange={this.handleClick}
                              type="checkbox"
                              name="green"
                            />{" "}
                            Green
                          </Col>
                          <Col>
                            <input
                              checked={this.state.colors.yellow}
                              onChange={this.handleClick}
                              type="checkbox"
                              name="yellow"
                            />{" "}
                            Yellow
                          </Col>
                        </Row>
                      </div>
                      {/* <p> Your favourite colors are: {favColors}</p> */}
                    </main>
                  </Col>
                  <Col lg="6" className="mt-1">
                    <main>
                      <div className="mt-2">
                        <h4>Purchase Invoice</h4>
                        <Row>
                          <Col>
                            <input
                              checked={this.state.colors.red}
                              onChange={this.handleClick}
                              type="checkbox"
                              name="red"
                            />{" "}
                            Red
                          </Col>
                          <Col>
                            <input
                              checked={this.state.colors.blue}
                              onChange={this.handleClick}
                              type="checkbox"
                              name="blue"
                            />{" "}
                            Blue
                          </Col>
                          <Col>
                            <input
                              checked={this.state.colors.green}
                              onChange={this.handleClick}
                              type="checkbox"
                              name="green"
                            />{" "}
                            Green
                          </Col>
                          <Col>
                            <input
                              checked={this.state.colors.yellow}
                              onChange={this.handleClick}
                              type="checkbox"
                              name="yellow"
                            />{" "}
                            Yellow
                          </Col>
                        </Row>
                      </div>
                      {/* <p> Your favourite colors are: {favColors}</p> */}
                    </main>
                  </Col>
                </Row>
              </Card>
              <Row>
                <Button.Ripple
                  color="primary"
                  type="submit"
                  className="ml-2 mb-1"
                >
                  Add Employee
                </Button.Ripple>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default AddEmployee;
