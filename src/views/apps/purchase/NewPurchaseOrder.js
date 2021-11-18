import React from "react";
import Wizard from "./FormComponent";
import {
  // Form,
  FormGroup,
  Input,
  Label,
  CustomInput,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardHeader,
  // Button
} from "reactstrap";

import Checkbox from "../../../components/@vuexy/checkbox/CheckboxesVuexy";
import { Check } from "react-feather";
class NewPurchaseOrder extends React.Component {
  state = {
    steps: [
      {
        title: "1",
        content: (
          <Row>
            <Col md="6" sm="12">
              <FormGroup>
                <Label> Select Supplier </Label>
                <CustomInput type="select">
                  <option>Add Supplier</option>
                  <option>Add Supplier</option>
                  <option>Add Supplier</option>
                  <option>Add Supplier</option>
                </CustomInput>
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label> GSTIN </Label>
                <Input type="text" />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label> Amount Are </Label>
                <CustomInput type="select">
                  <option>Select</option>
                  <option>Tax Includive</option>
                  <option>Tax Excludive</option>
                  <option>Add Supplier</option>
                </CustomInput>
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label> Stock Due </Label>
                <Input type="date" name="select" />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label> Payment Due </Label>
                <Input type="date" name="select" />
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
                <Label> Proposal Title </Label>
                <Input type="text" />
              </FormGroup>
              <FormGroup>
                <Label> Job Title </Label>
                <Input type="text" />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label> Proposal Title </Label>
                <Input type="textarea" rows="5" />
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
                <Label> Event Name </Label>
                <Input type="text" />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label> Event Location </Label>
                <CustomInput type="select" name="select" id="location">
                  <option>New York</option>
                  <option>Chicago</option>
                  <option>San Francisco</option>
                  <option>Boston</option>
                </CustomInput>
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label> Event Status </Label>
                <CustomInput type="select" name="select" id="status">
                  <option>Planning</option>
                  <option>In Process</option>
                  <option>Finished</option>
                </CustomInput>
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup>
                <Label> Event Status </Label>
                <Label className="mr-2">Requirements :</Label>
                <div className="stacked-checkbox">
                  <div className="d-inline-block mr-2">
                    <Checkbox
                      color="primary"
                      icon={<Check className="vx-icon" size={16} />}
                      label="Staffing"
                      defaultChecked={false}
                    />
                  </div>
                  <div className="d-inline-block">
                    <Checkbox
                      color="primary"
                      icon={<Check className="vx-icon" size={16} />}
                      label="Catering"
                      defaultChecked={false}
                    />
                  </div>
                </div>
              </FormGroup>
            </Col>
          </Row>
        ),
      },
    ],
  };

  render() {
    const { steps } = this.state;
    return (
      <Card>
        <CardHeader>
          <h1>New Purchase Order</h1>
        </CardHeader>
        <CardBody>
          <Wizard
            enableAllSteps
            onFinish={() => alert("submitted")}
            steps={steps}
          />
        </CardBody>
      </Card>
    );
  }
}

export default NewPurchaseOrder;
