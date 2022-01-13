import React, {useState} from "react";
import {useHistory} from 'react-router-dom'
import {
  Form,
  FormGroup,
  Input,
  Label,
  Button,
  CardHeader,
  Card,
  Col,
  Row,
  Container,
} from "reactstrap";
import Checkbox from "../../../../components/@vuexy/checkbox/CheckboxesVuexy"
import { Check } from "react-feather"
import glogo from "../../../../assets/img/pages/glogo.png";

// class Register extends React.Component {
    function Register()
    {
        const [seller_name,setName] = useState(""); 
        const [email,setEmail] = useState("");
        const [password,usePassword] = useState("");
        const [confirm_password,setConfirmPass] = useState("");
        // const [status,setStatus] = useState("");
        // const [sortorder,setSortorder] = useState("");
    const history= useHistory();
    async function signUp()
    {
        let item={seller_name,email,password,confirm_password }
        // console.warn(item)
       let result= await fetch("http://35.154.86.59/api/admin/seller_signup",{
            method: 'POST',
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify(item)
        })
        result= await result.json();
        console.warn("result",result)
        localStorage.setItem("user-info",JSON.stringify(result));
        history.push("/app/myStore/addStorePage")
    }
    
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
                  <Card className="rounded-0  px-2 pb-3 login-tabs-container">
                    <CardHeader className="pb-1 justify-content-center">
                      <img src={glogo} class="img-fluid" alt="..." />
                      {/* <img src={glogo} alt="glogo" /> */}
                      <br />
                    </CardHeader>
       
            <FormGroup className="form-label-group">
              <Input
                type="text"
                placeholder="Seller Name"
                required
                value={seller_name}
                onChange={(e)=>setName( e.target.value )}
              />
              <Label>Seller Name</Label>
            </FormGroup>
            <FormGroup className="form-label-group">
              <Input
                type="email"
                placeholder="E-mail"
                required
                value={email}
                onChange={(e)=>setEmail( e.target.value )}
              />
              <Label>Email</Label>
            </FormGroup>
            <FormGroup className="form-label-group">
              <Input
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e)=>usePassword( e.target.value )}
              />
              <Label>Password</Label>
            </FormGroup>
            <FormGroup className="form-label-group">
              <Input
                type="password"
                placeholder="Confirm Password"
                required
                value={confirm_password}
               
                onChange={(e)=>setConfirmPass( e.target.value )}
              />
              <Label>Confirm Password</Label>
            </FormGroup>
            {/* <FormGroup className="form-label-group">
              <Input
                type="number"
                placeholder="Confirm Password"
                required
                value={sortorder}
                onChange={(e)=>setSortorder( e.target.value )}
              />
              <Label>Sort Order</Label>
            </FormGroup>
             <FormGroup className="form-label-group">
              <Input
                type="status"
                placeholder="Status"
                required
                value={status}
                onChange={(e)=>setStatus( e.target.value )}
              />
              <Label>Status</Label>
            </FormGroup> */}
            <FormGroup>
              <Checkbox
                color="primary"
                icon={<Check className="vx-icon" size={16} />}
                label=" I accept the terms & conditions."
                defaultChecked={true}
              />
            </FormGroup> 
            <div className="d-flex justify-content-between">
              <Button.Ripple
                color="primary"
                outline
                onClick={() => {
                  history.push("/pages/login")
                }}
              >
                Login
              </Button.Ripple>
              <Button.Ripple color="primary" type="submit" onClick={signUp}>
                Register
              </Button.Ripple>
            </div>
        
          </Card>
            </Col>
          </Col>
        </Row>
      </Container>
        )
      }
    
   
    export default Register