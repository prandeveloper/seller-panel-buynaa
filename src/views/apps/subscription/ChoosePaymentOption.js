import Axios from "axios";
import React, { useCallback, useState, useEffect } from "react";
import useRazorpay from "react-razorpay";
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

export default function ChoosePaymentOption() {
  const [key, setKey] = useState("rzp_live_dX052iXb0Is1yu");
  const [orderId, setOrderId] = useState("");
  const [amount, setAmount] = useState("");
  const Razorpay = useRazorpay();

  useEffect(() => {
    console.log("useEffect");
    Axios.get("http://35.154.86.59/api/admin/rapay/699")
      .then((response) => {
        console.log(response.data);
        setOrderId(response.data?.order.id);
        setAmount(response.data?.order.amount);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);
  const handlePayment = useCallback(
    async (description, name, email, contact, sub_plan, status, duration) => {
      console.log(amount);
      const RazorpayOptions = {
        key: key,
        amount: sub_plan,
        currency: "INR",
        order_id: orderId,
        name: "SUBSCRIPTION PLAN",
        description: description,

        handler: (res) => {
          var data = {
            duration,
            sub_plan,
            status,
            sortorder: "",
            amount: sub_plan,
            description,
            name,
            email,
            contact,
          };
          console.log(res);
          Axios.post("http://35.154.86.59/api/admin/addSubscription", data, {
            headers: {
              "auth-adtoken": localStorage.getItem("auth-adtoken"),
            },
          })
            .then((response) => {
              console.log("pranay", response);
              // response should be subscribed or not
              localStorage.setItem("hasSubscribed", true);
              history.push("/analyticsDashboard");
            })
            .catch((error) => {
              console.log(error.response);
            });
          // Axios.get("http://35.154.86.59/api/admin/rapay/2")
          //   .then((response) => {
          //     console.log(response.data);
          //   })
          //   .catch((error) => {
          //     console.log(error.response);
          //   });
        },
        prefill: {
          name: name,
          email: email,
          contact: contact,
        },
        notes: {
          address: "BuyNaa Corporate Office",
        },
        theme: { color: "#3399cc" },
      };

      const rzpay = new Razorpay(RazorpayOptions);

      rzpay.on("payment.failure", function (resp) {
        alert("Remains on same page");
      });
      rzpay.on("payment.success", function (resp) {
        console.log(resp);
      });
      rzpay.open();
    },
    [Razorpay]
  );

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
                <CardLink
                  className="text-danger font-weight-bolder"
                  onClick={() =>
                    handlePayment(
                      "Plan Active Period : 370 days",
                      "Pranay Kumar",
                      "P.kumar@gmail.com",
                      "9876543210",
                      "69900",
                      true,
                      "370days"
                    )
                  }
                >
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
