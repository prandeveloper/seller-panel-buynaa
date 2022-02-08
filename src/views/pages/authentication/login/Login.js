import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  Container,
  CardTitle,
  FormGroup,
  Input,
  Label,
  Button,
  CardHeader,
  Card,
  Col,
  Row,
  Form,
} from "reactstrap";
import Checkbox from "../../../../components/@vuexy/checkbox/CheckboxesVuexy";
import { Check } from "react-feather";
import glogo from "../../../../assets/img/pages/glogo.png";
import { history } from "../../../../history";
import axios from "axios";
class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }
  handlechange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  loginHandler = (e) => {
    e.preventDefault();

    axios
      .post("http://35.154.86.59/api/admin/sellerlogin", this.state)
      .then((response) => {
        console.log(response);
        localStorage.setItem("auth-adtoken", response.data.token);
        history.push("/analyticsDashboard");
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  render() {
    return (
      <Container>
        <Row className="m-0 justify-content-center">
          <Col
            sm="8"
            xl="7"
            lg="10"
            md="8"
            className="d-flex justify-content-center"
          >
            <Col lg="8" md="12" className="p-1">
              <Card className="rounded-0 mb-0 px-2 pb-3 login-tabs-container">
                <CardHeader className="pb-1">
                  <img src={glogo} class="img-fluid" alt="..." />
                  {/* <img src={glogo} alt="glogo" /> */}
                  <br />
                  <CardTitle>
                    <h4 className="mb-0">Login</h4>
                  </CardTitle>
                </CardHeader>
                <h5 className="px-2 py-2 auth-title fw-bolder text-dark">
                  Welcome back, please login to your account.
                </h5>
                <Form onSubmit={this.loginHandler}>
                  <Label>Email</Label>
                  <FormGroup className="form-label-group position-relative has-icon-left">
                    <Input
                      type="email"
                      name="email"
                      placeholder="E-mail"
                      value={this.state.email}
                      onChange={this.handlechange}
                      required
                    />
                  </FormGroup>
                  <Label>Password</Label>
                  <FormGroup className="form-label-group position-relative has-icon-left">
                    <Input
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={this.state.password}
                      onChange={this.handlechange}
                      required
                    />
                  </FormGroup>

                  <div className="m-2">
                    <h6
                      onClick={() => {
                        history.push("/pages/forgot-password");
                      }}
                    >
                      Forget Password
                    </h6>
                  </div>

                  <div className="d-flex justify-content-between">
                    <Button.Ripple
                      color="primary"
                      outline
                      onClick={() => {
                        history.push("/pages/register");
                      }}
                    >
                      Register
                    </Button.Ripple>
                    <Button.Ripple color="primary" type="submit">
                      Login
                    </Button.Ripple>
                  </div>
                </Form>
              </Card>
            </Col>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Login;
