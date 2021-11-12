import React, { Component } from "react";
import { Card, CardBody, Row, Col, Button } from "reactstrap";
import axiosConfig from "../../../axiosConfig";
import { history } from "../../../history";

export class ViewStore extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    let { id } = this.props.match.params;
    axiosConfig
      .get(`/viewonestore/${id}`)
      .then((response) => {
        // console.log(response.data);
        console.log(response.data.data);
        this.setState({ data: response.data.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <React.Fragment>
        <Card className="overflow-hidden app-ecommerce-details">
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Store Details
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
          <CardBody className="pb-0">
            <Row className="mb-5 mt-2">
              <Col
                className="d-flex align-items-start justify-content-center mb-2 mb-md-0"
                sm="12"
                md="5"
              >
                <img
                  src={this.state.data.store_logo}
                  alt="Google Home"
                  height="250"
                  width="250"
                />
              </Col>
              <Col md="7" sm="12">
                <h4 style={{ fontWeight: 800 }}>Store Name</h4>
                <h5>{this.state.data.store_name}</h5>
                <hr />
                <h4 style={{ fontWeight: 800 }}>Store ID </h4>
                <h5>{this.state.data.storeID}</h5>
                <hr />
                <h4 style={{ fontWeight: 800 }}>Owner Name</h4>
                <h5>{this.state.data.owner_name}</h5>
                <hr />
                <h4 style={{ fontWeight: 800 }}>Email</h4>
                <h5>{this.state.data.email}</h5>
                <hr />
                <h4 style={{ fontWeight: 800 }}>Mobile Number</h4>
                <h5>{this.state.data.mobile}</h5>
                <hr />
                <h4 style={{ fontWeight: 800 }}>Address</h4>
                <h5>{this.state.data.address}</h5>
                <hr />
                <h4 style={{ fontWeight: 800 }}>City</h4>
                <h5>{this.state.data.city}</h5>
                <hr />
                <h4 style={{ fontWeight: 800 }}>State </h4>
                <h5>{this.state.data.state}</h5>
                <hr />
                <h4 style={{ fontWeight: 800 }}>Country</h4>
                <h5>{this.state.data.country}</h5>
                <hr />
                <h4 style={{ fontWeight: 800 }}>Status</h4>
                <h5>{this.state.data.status}</h5>
                <hr />
              </Col>
            </Row>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

export default ViewStore;
