import React from "react";
import Wizard from "./StoreFormComponent";
import {
  // Form,
  FormGroup,
  Input,
  Label,
  CustomInput,
  InputGroup,
  InputGroupText,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardHeader,
  Button,
} from "reactstrap";
import { Check } from "react-feather";
import Checkbox from "../../../components/@vuexy/checkbox/CheckboxesVuexy";
import axiosConfig from "../../../axiosConfig";
import { history } from "../../../history";
import swal from "sweetalert";

class AddMyStore extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      store_name: "",
      store_desc: "",
      websiteUrl: "",
      store_email: "",
      phone_no: "",
      altphone_no: "",
      altphone_no2: "",
      day: "",
      startTym: "",
      endTym: "",
      address_line1: "",
      address_line2: "",
      landmark: "",
      state: "",
      city: "",
      pincode: "",
      gst_no: "",
      business_type: "",
      pan_no: "",
      company_panno: "",
      address_proof: "",
      storeImg: "",
      shoplogo_img: "",
      gstImg: "",
      storepan_img: "",
      tradelicence_img: "",
      companypan_img: "",
      address_proof_img: "",
      sortorder: "",
      selectedFile: undefined,
      selectedName: "",
      selectedFile1: undefined,
      selectedName1: "",
      selectedFile2: undefined,
      selectedName2: "",
      selectedFile3: undefined,
      selectedName3: "",
      selectedFile4: undefined,
      selectedName4: "",
      selectedFile5: undefined,
      selectedName5: "",
      selectedFile6: undefined,
      selectedName6: "",
      status: "",
    };

    this.submitHandler = this.submitHandler.bind(this);
  }

  // onChangeHandler = (event) => {
  //   this.setState({ selectedFile: event.target.files[0] });
  //   this.setState({ selectedName: event.target.files[0].name });
  //   console.log(event.target.files[0]);
  // };
  onChangeHandler = (event) => {
    this.setState({ selectedFile: event.target.files });
    this.setState({ selectedName: event.target.files.name });
    console.log(event.target.files);
  };
  onChangeHandler1 = (event) => {
    this.setState({ selectedFile1: event.target.files });
    this.setState({ selectedName1: event.target.files.name });
    console.log(event.target.files);
  };
  onChangeHandler2 = (event) => {
    this.setState({ selectedFile2: event.target.files });
    this.setState({ selectedName2: event.target.files.name });
    console.log(event.target.files);
  };
  onChangeHandler3 = (event) => {
    this.setState({ selectedFile3: event.target.files });
    this.setState({ selectedName3: event.target.files.name });
    console.log(event.target.files);
  };
  onChangeHandler4 = (event) => {
    this.setState({ selectedFile4: event.target.files });
    this.setState({ selectedName4: event.target.files.name });
    console.log(event.target.files);
  };
  onChangeHandler5 = (event) => {
    this.setState({ selectedFile5: event.target.files });
    this.setState({ selectedName5: event.target.files.name });
    console.log(event.target.files);
  };
  onChangeHandler6 = (event) => {
    this.setState({ selectedFile6: event.target.files });
    this.setState({ selectedName6: event.target.files.name });
    console.log(event.target.files);
  };

  changeHandler1 = (e) => {
    this.setState({ status: e.target.value });
  };
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = () => {
    // e.preventDefault();
    //console.log(this.state);

    const data = new FormData();
    data.append("store_name", this.state.store_name);
    data.append("store_desc", this.state.store_desc);
    data.append("websiteUrl", this.state.websiteUrl);
    data.append("store_email", this.state.store_email);
    data.append("phone_no", this.state.phone_no);
    data.append("altphone_no", this.state.altphone_no);
    data.append("altphone_no2", this.state.altphone_no2);
    data.append("day", this.state.day);
    data.append("startTym", this.state.startTym);
    data.append("endTym", this.state.endTym);
    data.append("address_line1", this.state.address_line1);
    data.append("address_line2", this.state.address_line2);
    data.append("landmark", this.state.landmark);
    data.append("state", this.state.state);
    data.append("city", this.state.city);
    data.append("pincode", this.state.pincode);
    data.append("gst_no", this.state.gst_no);
    data.append("business_type", this.state.business_type);
    data.append("pan_no", this.state.pan_no);
    data.append("company_panno", this.state.company_panno);
    data.append("address_proof", this.state.address_proof);
    data.append("sortorder", this.state.sortorder);
    data.append("status", this.state.status);
    for (const file of this.state.selectedFile) {
      if (this.state.selectedFile !== null) {
        data.append("storeImg", file, file.name);
      }
    }
    for (const file of this.state.selectedFile1) {
      if (this.state.selectedFile1 !== null) {
        data.append("shoplogo_img", file, file.name);
      }
    }
    for (const file of this.state.selectedFile2) {
      if (this.state.selectedFile2 !== null) {
        data.append("gstImg", file, file.name);
      }
    }
    for (const file of this.state.selectedFile3) {
      if (this.state.selectedFile3 !== null) {
        data.append("storepan_img", file, file.name);
      }
    }
    for (const file of this.state.selectedFile4) {
      if (this.state.selectedFile4 !== null) {
        data.append("tradelicence_img", file, file.name);
      }
    }
    for (const file of this.state.selectedFile5) {
      if (this.state.selectedFile5 !== null) {
        data.append("companypan_img", file, file.name);
      }
    }
    for (const file of this.state.selectedFile6) {
      if (this.state.selectedFile6 !== null) {
        data.append("address_proof_img", file, file.name);
      }
    }

    for (var key of data.keys()) {
      console.log(key);
    }
    for (var value of data.values()) {
      console.log(value);
    }

    axiosConfig
      .post("/addstore", data)
      .then((response) => {
        console.log(response);
        swal("Success!", "Submitted SuccessFull!", "success");
        this.props.history.push("/app/myStore/storeList");
      })
      .catch((error) => {
        swal("Error!", "Error Received", "error");
        console.log(error);
      });
  };

  render() {
    const steps = [
      {
        title: "1",
        content: (
          <Row>
            <Col md="6" sm="12">
              <FormGroup>
                <Label>Store Name</Label>
                <Input
                  type="text"
                  name="store_name"
                  placeholder="Enter Store Name"
                  value={this.state.store_name}
                  onChange={this.changeHandler}
                />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label>Store image</Label>
                <CustomInput
                  type="file"
                  multiple
                  onChange={this.onChangeHandler}
                />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label>Store Description </Label>
                <Input
                  type="text"
                  name="store_desc"
                  placeholder="Store description"
                  value={this.state.store_desc}
                  onChange={this.changeHandler}
                />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label>Website Url</Label>
                <Input
                  type="text"
                  name="websiteUrl"
                  placeholder="Enter Website Url"
                  value={this.state.websiteUrl}
                  onChange={this.changeHandler}
                />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label>Store Email</Label>
                <Input
                  type="email"
                  name="store_email"
                  placeholder="Email"
                  value={this.state.store_email}
                  onChange={this.changeHandler}
                />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label>Phone No.</Label>
                <Input
                  type="number"
                  name="phone_no"
                  placeholder="Phone No."
                  value={this.state.phone_no}
                  onChange={this.changeHandler}
                />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label>Alt Phone No.</Label>
                <Input
                  type="number"
                  name="altphone_no"
                  placeholder="Alt Phone No."
                  value={this.state.altphone_no}
                  onChange={this.changeHandler}
                />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label>Alt Phone No2.</Label>
                <Input
                  type="number"
                  name="altphone_no2"
                  placeholder="Alt Phone No2."
                  value={this.state.altphone_no2}
                  onChange={this.changeHandler}
                />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label>Day</Label>
                <CustomInput
                  type="select"
                  name="day"
                  placeholder="Day"
                  value={this.state.day}
                  onChange={this.changeHandler}
                >
                  <option value="Monday - Friday">Monday - Friday</option>
                  <option value="Monday - Saturday">Monday - Saturday</option>
                  <option value="Monday - Sunday">Monday - Sunday</option>
                  <option value="Monday - Thrusday">Monday - Thrusday</option>
                </CustomInput>
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label>Start Time</Label>
                <Input
                  type="time"
                  name="startTym"
                  placeholder="Start Time"
                  value={this.state.startTym}
                  onChange={this.changeHandler}
                />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label>End Time</Label>
                <Input
                  type="time"
                  name="endTym"
                  placeholder="End Time"
                  value={this.state.endTym}
                  onChange={this.changeHandler}
                />
              </FormGroup>
            </Col>
          </Row>
        ),
      },
      {
        title: "2",
        content: (
          <Row>
            <Col md="6" sm="12">
              <FormGroup>
                <Label>Address Line1 </Label>
                <Input
                  type="textarea"
                  name="address_line1"
                  placeholder="Adderss Line1"
                  value={this.state.address_line1}
                  onChange={this.changeHandler}
                />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label>Address Line2 </Label>
                <Input
                  type="textarea"
                  name="address_line2"
                  placeholder="Adderss Line2"
                  value={this.state.address_line2}
                  onChange={this.changeHandler}
                />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label>Landmark </Label>
                <Input
                  type="text"
                  name="landmark"
                  placeholder="Landmark"
                  value={this.state.landmark}
                  onChange={this.changeHandler}
                />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label>State</Label>
                <Input
                  type="text"
                  name="state"
                  placeholder="State"
                  value={this.state.state}
                  onChange={this.changeHandler}
                />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label>City</Label>
                <Input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={this.state.city}
                  onChange={this.changeHandler}
                />
              </FormGroup>
            </Col>

            <Col md="6" sm="12">
              <FormGroup>
                <Label>Pin Code</Label>
                <Input
                  type="number"
                  name="pincode"
                  value={this.state.pincode}
                  onChange={this.changeHandler}
                />
              </FormGroup>
            </Col>
          </Row>
        ),
      },
      {
        title: 3,
        content: (
          <Row>
            <Col md="6" sm="12">
              <FormGroup>
                <Label>Store GST No.</Label>
                <Input
                  type="text"
                  name="gst_no"
                  value={this.state.gst_no}
                  onChange={this.changeHandler}
                />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label>Business Type</Label>
                <CustomInput
                  type="select"
                  name="business_type"
                  placeholder="Business Type"
                  value={this.state.business_type}
                  onChange={this.changeHandler}
                >
                  <option>Select</option>
                  <option value="Personal">Personal</option>
                  <option value="Proprietorship">Proprietorship</option>
                </CustomInput>
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label>Personal Pan No.</Label>
                <Input
                  type="text"
                  name="pan_no"
                  value={this.state.pan_no}
                  onChange={this.changeHandler}
                />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label>Company Pan No.</Label>
                <Input
                  type="text"
                  name="company_panno"
                  value={this.state.company_panno}
                  onChange={this.changeHandler}
                />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label>Address Proof ID </Label>
                <CustomInput
                  type="select"
                  name="address_proof"
                  placeholder="Adderss Proof"
                  value={this.state.address_proof}
                  onChange={this.changeHandler}
                >
                  <option>Select</option>
                  <option value="Address Proof ID">Address Proof ID</option>
                  <option value="Electricity Bill">Electricity Bill</option>
                  <option value="Telephone Bill">Telephone Bill</option>
                  <option value="Rental Agreementy">Rental Agreement</option>
                </CustomInput>
              </FormGroup>
            </Col>
          </Row>
        ),
      },
      {
        title: 4,
        content: (
          <Row>
            <Col md="6" sm="12">
              <FormGroup>
                <Label>Shop Logo Image</Label>
                <CustomInput
                  type="file"
                  multiple
                  onChange={this.onChangeHandler1}
                />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label>GST Image</Label>
                <CustomInput
                  type="file"
                  multiple
                  onChange={this.onChangeHandler2}
                />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label>Store Pan Image</Label>
                <CustomInput
                  type="file"
                  multiple
                  onChange={this.onChangeHandler3}
                />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label>Trade Licence Image</Label>
                <CustomInput
                  type="file"
                  multiple
                  onChange={this.onChangeHandler4}
                />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label>Company Pan Image</Label>
                <CustomInput
                  type="file"
                  multiple
                  onChange={this.onChangeHandler5}
                />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label>Address Proof Image</Label>
                <CustomInput
                  type="file"
                  multiple
                  onChange={this.onChangeHandler6}
                />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label>Sort Oder</Label>
                <Input
                  type="number"
                  name="sortorder"
                  placeholder="Sort Order"
                  value={this.state.sortorder}
                  onChange={this.changeHandler}
                />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
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
                  <span style={{ marginRight: "20px", fontWeight: 800 }}>
                    Active
                  </span>

                  <input
                    style={{ marginRight: "3px" }}
                    type="radio"
                    name="status"
                    value="Inactive"
                  />
                  <span style={{ marginRight: "3px", fontWeight: 800 }}>
                    Inactive
                  </span>
                </div>
              </FormGroup>
            </Col>
          </Row>
        ),
      },
    ];
    //
    return (
      <Card>
        <Row className="m-2">
          <Col>
            <h1 col-sm-6 className="float-left">
              Add My Store
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
          <Wizard enableAllSteps onFinish={this.submitHandler} steps={steps} />
        </CardBody>
      </Card>
    );
  }
}

export default AddMyStore;
