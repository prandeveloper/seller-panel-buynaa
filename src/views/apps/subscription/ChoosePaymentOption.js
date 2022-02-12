import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  CardSubtitle,
  CardFooter,
  CardLink,
} from "reactstrap";

export class ChoosePaymentOption extends Component {
  render() {
    return (
      <Container className="d-flex justify-content-center align-items-center">
        <Row>
          <Col>
            <Card className="">
              <CardBody>
                <CardHeader tag="h2" className="text-primary font-weight-bold">
                  SUBSCRIPTION PLAN
                </CardHeader>
                <div className="m-3">
                  <CardTitle className="text-success font-weight-bold">
                    Plan Price
                  </CardTitle>
                  <CardSubtitle className="text-danger font-weight-bold">
                    ₹699 Only/
                  </CardSubtitle>
                </div>
                <div className="m-3">
                  <CardTitle className="text-success font-weight-bold">
                    Plan Active Period
                  </CardTitle>
                  <CardSubtitle className="text-danger font-weight-bold">
                    370 Days
                  </CardSubtitle>
                </div>
                <CardFooter>
                  <CardLink className="text-danger font-weight-bolder">
                    Subscribe Now
                  </CardLink>
                </CardFooter>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ChoosePaymentOption;
