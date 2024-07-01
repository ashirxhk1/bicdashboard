import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { LoginApi } from "../features/userApis";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon,
} from "mdb-react-ui-kit";
import Cookies from "universal-cookie";
import { Button } from "reactstrap";
import BtnLoader from "./loader/BtnLoader";
const cookie = new Cookies();

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [load,setLoad] = useState(false)
  const nav = useNavigate();

  async function clii(e) {
    e.preventDefault();
    setLoad(true)
    if (email.trim() === '' || password.trim() === '') {
      alert('Please fill in all fields');
      return;
    } else {
      let data = { email, password };
      
      try {
        const res = await LoginApi(data);
        
        if (res.status === 200 && res.data.success === true) {
          localStorage.setItem(
            "bicuserData",
            JSON.stringify({ email: res.data.user.email, id: res.data.user._id, role: res.data.user.role })
          );
          cookie.set("bictoken", res.data.token);
          nav("bi/profile");
          window.location.reload();
          setLoad(false)
        } else {
          alert('Login failed. Please check your credentials.');
        }
      } catch (error) {
        if (error.response) {
          alert(`Error: ${error.response.data.message || 'An error occurred'}`);
        } else if (error.request) {
          alert('No response received from the server. Please try again later.');
        } else {
          alert('An error occurred. Please try again later.');
        }
      }
    }
  }
  

  return (
    <MDBContainer
      fluid
      className="p-4 background-radial-gradient overflow-hidden d-flex justify-content-center align-items-center"
    >
      <MDBRow>
        <MDBCol
          md="6"
          className="text-center text-md-start d-flex flex-column justify-content-center"
        >
          <h1
            className="my-5 display-3 fw-bold ls-tight px-3"
            style={{ color: "hsl(56, 100%, 50%)" }}
          >
            Bright Idea's <br />
            <span style={{ color: "hsl(218, 81%, 75%)" }}>Communication</span>
          </h1>

          <p className="px-4" style={{ color: "hsl(0, 0%, 100%)" }}>
          <b>Welcome to Bright Ideas Communications, where innovation meets excellence in IT solutions. With a passion for cutting-edge technology and a commitment to client success, we deliver bespoke strategies and seamless execution to drive your business forward. Explore our comprehensive suite of services designed to elevate your digital presence and maximize efficiency. Discover why Bright Ideas Communications is your trusted partner in navigating the evolving landscape of technology.</b>
          </p>
        </MDBCol>

        <MDBCol md="6" className="position-relative d-flex justify-content-center align-items-center">
          <div
            id="radius-shape-1"
            className="position-absolute rounded-circle shadow-5-strong"
          ></div>
          <div
            id="radius-shape-2"
            className="position-absolute shadow-5-strong"
          ></div>

          <MDBCard className="my-5 bg-primary bg-gradient w-75">
            <MDBCardBody className="p-5">
              <form onSubmit={clii}>
                <MDBInput
                  wrapperClass="mb-4"
                  label="Email"
                  id="form3"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Password"
                  id="form4"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <div className="d-flex justify-content-start mb-4">
                  <MDBCheckbox
                    name="flexCheck"
                    value=""
                    id="flexCheckDefault"
                    label="Remember me"
                  />
                </div>

                <Button className="w-100 signupBtn d-flex gap-2 justify-content-center align-content-center" type="submit" disabled={load}> 
                  Sign-in {load && <BtnLoader/>}
                </Button>
              </form>
              <div className="text-center">
                <MDBBtn
                  tag="a"
                  color="none"
                  className="mx-3"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="facebook-f" size="sm" />
                </MDBBtn>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="mx-3"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="twitter" size="sm" />
                </MDBBtn>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="mx-3"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="google" size="sm" />
                </MDBBtn>

                <MDBBtn
                  tag="a"
                  color="none"
                  className="mx-3"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="github" size="sm" />
                </MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Login;
