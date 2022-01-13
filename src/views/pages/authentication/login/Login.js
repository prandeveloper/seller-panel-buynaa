import React, {useState ,useEffect} from "react";
import {useHistory} from "react-router-dom"
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
} from "reactstrap";
import Checkbox from "../../../../components/@vuexy/checkbox/CheckboxesVuexy"
import { Check } from "react-feather"
import glogo from "../../../../assets/img/pages/glogo.png";
// class Login extends React.Component {
    function Login()
    {
const [email,setEmail]=useState("");
const [password,usePassword]=useState("");
const history=useHistory();

useEffect(() => {
      if(localStorage.getItem('user-info')){
    history.push("/app/myStore/addStorePage")
      
      }
  }, [])  


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
        
          
      
        <Card className="rounded-0 mb-0 px-2 login-tabs-container">
          <CardHeader className="pb-1">
          <img src={glogo} class="img-fluid" alt="..." />
              {/* <img src={glogo} alt="glogo" /> */}
              <br />
            <CardTitle>
              <h4 className="mb-0">Login</h4>
            </CardTitle>
          </CardHeader>
          <p className="px-2 auth-title">
            Welcome back, please login to your account.
          </p>
        
    
    
            <FormGroup className="form-label-group position-relative has-icon-left">
              <Input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e)=>setEmail( e.target.value )}
              
                required
              />
              
              {/* <div className="form-control-position">
                <Mail size={15} />
              </div> */}
              <Label>Email</Label>
            </FormGroup>
            <FormGroup className="form-label-group position-relative has-icon-left">
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e)=>setPassword( e.target.value )}
              
                required
              />
              
              {/* <div className="form-control-position">
                <Mail size={15} />
              </div> */}
              <Label>Password</Label>
            </FormGroup>
      
            <FormGroup className="d-flex justify-content-between align-items-center">
              <Checkbox
                color="primary"
                icon={<Check className="vx-icon" size={16} />}
                label="Remember me"
                defaultChecked={false}
              
              />
              <div className="float-right">
                {/* <Link to="/pages/forgot-password">Forgot Password?</Link> */}
              </div>
            </FormGroup>
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
        
        
       
     

      </Card>
       
         
         </Col>
         </Col>
         </Row>
</Container>
    )

}
export default Login