import { Col, Row, Form, Button, Card } from "react-bootstrap";
import { ToastContainer, Toast } from "react-bootstrap";
import { useState } from "react";
import "./LoginComponent.css";
import axios from "axios";

const LoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");

  const openToast = (message) => {
    setMessage(message);
    setShow(true);
  };
  const validateEmailandPassword = (email, password) => {
    if (email.trim() === "") {
      return "Email is required!";
    }
    if (password.trim() === "") {
      return "Password is required!";
    }
    return "";
  };

  function loginSubmission(e) {
    e.preventDefault();
    console.log("Login Submitted", email, password);
    var validated = validateEmailandPassword(email, password);
    if (validated !== "") {
      openToast(validated);
      alert(validated);
      return;
    }
    axios
      .post("https://reqres.in/api/login", {
        email: email,
        // email: "eve.holt@reqres.in",
        password: password,
        // password: "5cityslicka",
      })
      .then((res) => {
        // console.log(res);
        if (res.data.token !== undefined) {
          openToast("Login Successful");
        } else {
          openToast("Invalid Credentials");
        }
      })
      .catch((err) => {
        console.log(err);
        openToast("Some error occured, please try again later!");
        // alert(err);
      });
  }
  return (
    <div className="login-component">
      <ToastContainer className="p-3" position="top">
        <Toast
          onClose={() => setShow(false)}
          show={show}
          delay={30000}
          autohide
        >
          <Toast.Header>
            <strong className="me-auto">Bootstrap</strong>
            <small>Just Now</small>
          </Toast.Header>
          <Toast.Body>{message}</Toast.Body>
        </Toast>
      </ToastContainer>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5 col-lg-5 col-xl-5 login-section">
            <Card className="border-0">
              <div className="card-title">
                <b>Welcome Back</b>
              </div>
              <div className="card-sub-title">
                <b>Sub title goes here</b>
              </div>
              <Form onSubmit={loginSubmission}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    value={email}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    value={password}
                  />
                </Form.Group>
                <Button
                  className="btn-block login-btn"
                  variant="dark"
                  type="submit"
                >
                  Login
                </Button>
              </Form>
              <Row className="mt-3">
                <Col className="text-left m-0">
                  <Form.Check
                    type="Checkbox"
                    label="Remember Password"
                    className="rem-pass"
                    defaultChecked="true"
                  />
                </Col>
                <Col className="text-right">
                  <a href="/forgotpassword">Forgot Password?</a>
                </Col>
              </Row>
            </Card>
          </div>
          <div className="col-md-7 col-lg-7 col-xl-7 side-background d-none d-md-block">
            About...
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
