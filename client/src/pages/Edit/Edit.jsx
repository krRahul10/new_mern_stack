import React, { useEffect, useState } from "react";
import './edit.css'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Select from "react-select";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

const Edit = () => {
  const [inputdata, setInputData] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
    gender: "",
    location: "",
  });
  console.log("inputData", inputdata);

  const [status, setStatus] = useState("Active");
  const [image, setImage] = useState("");
  const [preview, setPreview] = useState("");

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

  // status set

  const setStatusValue = (e) => {
    setStatus(e.value);
  };

  // set Image

  const setImageValue = (e) => {
    setImage(e.target.files[0]);
  };

  useEffect(() => {
    if (image) {
      setPreview(URL.createObjectURL(image));
    }
  }, [image]);

  // submit user data

  const submitUserData = (e) => {
    e.preventDefault();

    const { fname, lname, email, mobile, gender, location } = inputdata;

    if(fname ===""){
       toast.error("first name fill") 
    }else if( lname===''){
        toast.error("last name fill")
    }else if ( email===''){
        toast.error("email id  is required ")
    } else if (!email.includes("@")){
        toast.error("valid email")
    }else if (mobile===""){
        toast.error("fill mobile")
    }else if(mobile.length<10){
        toast.error("enter valid number")
    }else if(gender === ""){
        toast.error("select gender")
    } else if (status ===""){
        toast.error("status fill")
    }else if (image === ""){
        toast.error("select img")
    }else if ( location === ""){
        toast.error("location required")
    }else {
        toast.success("done")
    }
    }
  ;
  return (
    <>
     <div className="container">
        <h2 className="text-center mt-1">Lets EDIT Your Details</h2>
        <Card>
          <div className="profile_div text-center">
            <img src={preview ? preview : "/man.png"} alt="img" />
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
                  value={inputdata.fname}
                />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name="lname"
                  placeholder="Enter Your Last Name"
                  onChange={setInputValue}
                  value={inputdata.lname}
                />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  onChange={setInputValue}
                  value={inputdata.email}
                />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control
                  type="text"
                  name="mobile"
                  placeholder="Enter Your Mobile Number"
                  onChange={setInputValue}
                  value={inputdata.mobile}
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
                <Select options={options} onChange={setStatusValue} value={status} />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Select Your Profile</Form.Label>
                <Form.Control
                  type="file"
                  placeholder="profile"
                  name="user_profile"
                  onChange={setImageValue}
                />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Enter Your Location</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Your Location"
                  name="location"
                  onChange={setInputValue}
                  value={inputdata.location}
                />
              </Form.Group>
              <Button variant="primary" type="submit" onClick={submitUserData}>
                Submit
              </Button>
            </Row>
          </Form>
        </Card>
        <ToastContainer/>
      </div>
    </>
  )
}

export default Edit