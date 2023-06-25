import React, { useState } from "react";
import "./register.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Select from "react-select";

const Register = () => {
  const [inputdata, setInputData] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
    gender: "",
    location: "",
  });
  console.log("inputData", inputdata)

  const [status, setStatus] = useState("Active");

  const [image, setImage] = useState("");

  //select Option
  const options = [
    { value: "active", label: "active" },
    { value: "Inactive", label: "Inactive" },
  ];

  // setInput value

  const setInputValue = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputdata, [name]: value });
  };

  return (
    <>
      <div className="container">
        <h2 className="text-center mt-1">Register Your Details</h2>
        <Card>
          <div className="profile_div text-center">
            <img src="/man.png" alt="img" />
          </div>
          <Form>
            <Row>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  name="fname"
                  placeholder="Enter Your First Name"
                  onChange={setInputValue}
                />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name="lname"
                  placeholder="Enter Your Last Name"
                  onChange={setInputValue}
                />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  onChange={setInputValue}
                />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control
                  type="text"
                  name="mobile"
                  placeholder="Enter Your Mobile Number"
                  onChange={setInputValue}
                />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Select Your Gender</Form.Label>
                <Form.Check
                  type={"radio"}
                  label={`${`Male`}`}
                  name="gender"
                  value={"male"}
                  onChange={setInputValue}
                />
                <Form.Check
                  type={"radio"}
                  label={`Female`}
                  name="gender"
                  value={"female"}
                  onChange={setInputValue}
                />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Select Your Status</Form.Label>
                <Select options={options} />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Select Your Profile</Form.Label>
                <Form.Control
                  type="file"
                  placeholder="profile"
                  name="user_profile"
                />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Enter Your Location</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Your Location"
                  name="location"
                  onChange={setInputValue}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Row>
          </Form>
        </Card>
      </div>
    </>
  );
};

export default Register;
