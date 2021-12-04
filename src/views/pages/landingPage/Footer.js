import React from "react";
import { Link } from "react-router-dom";
//import apple from "../assets/img/apple.png";
import "../assets/style/style.css";

const Footer = () => {
  return (
    <footer>
      {/* <div className="footer_section1 footer-top black-bg pt-20 pb-30 main-widget">
        <div className="container">
          <div className="row justify-content-between">
            <h1>ehafeebwebwebrbwer</h1>
          </div>
        </div>
      </div> */}

      <div className="footer_section2">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="footer-widget">
                <div className="footer_logo">
                  <img src={apple} alt="" />
                </div>
                <div className="fw-text">
                  <div className="footer-contact-list mt-20">
                    <ul>
                      <li>
                        <span>Phone: </span> 4445454548888
                      </li>
                      <li>
                        <span>Email: </span> Demo@fmo.com
                      </li>
                      <li>
                        <span>Address: </span> Most of its text is made up from
                        sections 1.10.32–3 of Cicero's De finibus
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-4 col-md-6">
              <div className="footer-widget">
                <div className="fw-title mb-25">
                  <h5>Commuinity</h5>
                </div>
                <div className="fw-links">
                  <ul className="quick">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/group_tuition">Group Tuition</Link>
                    </li>
                    <li>
                      <Link to="/online_tuition">Online Tuition</Link>
                    </li>
                    <li>
                      <Link to="/on_demand">On-Demand Tuition</Link>
                    </li>
                    {/* <li><a href="#"></a></li>
                                            <li><a href="#">Online Tuition</a></li>
                                            <li><a href="#">On-Demand Tuition</a></li> */}
                    {/* <li><a href="#">List Requirements</a></li>
                                            <li><a href="#">Home Tuition</a></li>
                                            <li><a href="#">Group Tuition</a></li>
                                            <li> <Link to="tutorsearch">Tutor Search</Link></li>
                                            <li><a href="#">On Demand</a></li>
                                            <li><a href="#">Online Tuition</a></li> */}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-4 col-md-6">
              <div className="footer-widget">
                <div className="fw-title mb-25">
                  <h5>Others Link</h5>
                </div>
                <div className="fw-links">
                  <ul className="quick">
                    <li>
                      <Link to="/terms">Terms & Conditions</Link>
                    </li>
                    <li>
                      <Link to="/policy">Privacy & policy</Link>
                    </li>
                    <li>
                      <a href="#"></a>
                    </li>
                    <li>
                      <Link to="/about">About Us</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-4 col-md-6">
              <div className="footer-widget">
                <div className="fw-title mb-25">
                  <h5>Join Us</h5>
                </div>
                <div className="fw-links">
                  <ul className="quick">
                    <li>
                      <Link to="/become_teacher">Become Teacher</Link>
                    </li>
                    <li>
                      <Link to="/become_student">Become Student</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="footer-widget">
                <div className="fw-title mb-25">
                  <h5>Download App</h5>
                </div>
                <div className="footer_btns">
                  <button>
                    <img src={apple} alt="" />
                    Apple iOS
                  </button>
                  <button>
                    <img src={apple} alt="" />
                    Google Play
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-100 footer_copyright">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="copyright-text">
                  Copyright © 2020 Buynaa Ecommerce . All Rights Reserved.
                </div>
              </div>
              <div className="col-md-3">
                {/* <div className="copyright-text top_bar">
                                    Top Bar <img src={footericon1} alt="" />
                                    </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
