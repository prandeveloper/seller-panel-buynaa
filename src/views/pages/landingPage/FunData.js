import React from "react";
import "../assets/style/style.css";
import { FaUser } from "react-icons/fa";
//import w13 from "../assets/img/w13.jpg";
import { Row, Col, Container } from "reactstrap";

const FunData = () => {
  return (
    <div>
      <Container className="pt-100">
        <Row>
          <Col lg="12" className="d-flex justify-content-center pb-4">
            <h1 className="text-primary">What Do You Need To Get Started?</h1>
          </Col>
        </Row>
      </Container>
      <Container fluid className="d-flex justify-content-center">
        <Row>
          <Col
            lg="3"
            className="d-flex flex-column justify-content-center align-items-center m-3"
          >
            <FaUser size={70} className="mb-3" />
            <h6 className="text-center fw-bold lh-base">
              Goods & Servces Tax Identification Number
            </h6>
          </Col>
          <Col
            lg="3"
            className="d-flex flex-column justify-content-center align-items-center m-3"
          >
            <FaUser size={70} className="mb-3" />
            <h6 className="text-center fw-bold lh-base">
              Bank Accounts <br /> Details
            </h6>
          </Col>
          <Col
            lg="3"
            className="d-flex flex-column justify-content-center align-items-center m-3"
          >
            <FaUser size={70} className="mb-3" />
            <h6 className="text-center fw-bold lh-base">
              Permanent Account <br /> Number
            </h6>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FunData;
