import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./About";
import OurVision from "./OurVision";
import OurMission from "./OurMission";
import FunData from "./FunData";
import FooterHeader from "./FooterHeader";
import Footer from "./Footer";
import { Button, Col, Row } from "reactstrap";
import banner2 from "../assets/img/landing/banner.png";
import "../assets/style/style.css";
import "../assets/style/style.css";

export class Home extends Component {
  render() {
    return (
      <>
        <section className="">
          <Row>
            <Col lg="4">
              <div className="px-5" style={{ bottom: "5rem" }}>
                <div className="slider-item st-slide-text pt-100">
                  <div className="slider-text one">
                    <h1 className="fw-bold lh-base">
                      Manage <br /> your Stock the <br />
                      <spn className="text-primary">the right way </spn>
                    </h1>
                    <p className="fw-bold fs-2x">
                      Do MORE with Buynaa Inventory <br /> Mangement & Billing
                      Solution
                    </p>

                    <div className="slider-btn">
                      <Button color="dark">GET STARTED</Button>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="8">
              {" "}
              <div>
                <img
                  src={banner2}
                  alt="First slide"
                  className=""
                  style={{ width: "80rem", height: "90vh" }}
                />
              </div>
            </Col>
          </Row>
        </section>
        {/* <Quality /> */}
        {/* <ProductCategory /> */}
        {/* <Product /> */}
        {/* <Video />
        <BlogSection />
        <NewsSection />
        <Brochure />
        <Subscribe />*/}
        <About />
        <OurVision />
        <OurMission />
        <FunData />
        <FooterHeader />
        <Footer />
      </>
    );
  }
}

export default Home;