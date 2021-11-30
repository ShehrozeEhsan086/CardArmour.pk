import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Col, Row } from "react-bootstrap";
import "./login.css";
import React, { useState } from "react";
import { Chip } from "primereact/chip";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Checkbox } from "primereact/checkbox";

const Login = () => {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [checked, setChecked] = useState(false);

  return (
    <div
      style={{
        backgroundImage: "url(background.jpg)",
        height: "100vh",
      }}
    >
      <div>
        <Row>
          <br></br>
        </Row>
        <Row>
          <h1 className="name">CardArmour.pk</h1>
        </Row>
        <Row
          className="p-shadow-24"
          style={{ marginLeft: "35%", marginTop: "3%", marginRight: "35%" }}
        >
          <Card title="">
            <p className="LoginTag">Login</p>
            <p className="WelcomeTag">Welcome Back!</p>

            <span
              className="p-float-label"
              style={{
                marginLeft: "29%",
                marginBottom: "4%",
                marginTop: "8%",
              }}
            >
              <InputText
                id="username"
                value={value2}
                onChange={(e) => setValue2(e.target.value)}
                style={{ width: "222px" }}
              />
              <label htmlFor="username">Username</label>
            </span>

            <span
              className="p-float-label"
              style={{
                marginLeft: "29%",
                //   marginBottom: "5%",
                marginRight: "100%",
              }}
            >
              <Password
                className="p-float-label"
                value={value1}
                onChange={(e) => setValue1(e.target.value)}
                feedback={false}
                toggleMask
              />
              <label htmlFor="Password">Password</label>
            </span>
            <Button
              label="Reset Password?"
              className="p-button-text"
              style={{
                marginLeft: "71%",
                marginBottom: "6%",
                marginTop: "-7%",
              }}
            />
            <div className="p-field-checkbox">
              <Checkbox
                inputId="binary"
                checked={checked}
                onChange={(e) => setChecked(e.checked)}
              />
              <label htmlFor="binary">{"Remember me"}</label>
            </div>

            <Button
              label="LOGIN"
              className="p-button-outlined p-button-info"
              style={{ marginLeft: "42%", marginTop: "2%" }}
            />

            <p className="secondarylogin">Or login with</p>
            <div
              className="p-d-flex p-ai-center p-flex-wrap"
              style={{ marginLeft: "23%" }}
            >
              <Chip
                label="Apple"
                icon="pi pi-apple"
                className="p-mr-2 p-mb-2"
              />
              <Chip
                label="Facebook"
                icon="pi pi-facebook"
                className="p-mr-2 p-mb-2"
                style={{ marginLeft: "2%" }}
              />
              <Chip
                label="Google"
                icon="pi pi-google"
                className="p-mr-2 p-mb-2"
                style={{ marginLeft: "2%", marginBottom: "5%" }}
              />

              <p style={{ marginLeft: "16%" }}>Dont have an account?</p>
              <Button
                label="Sign up now"
                className="p-button-text"
                style={{ marginLeft: "19%", marginTop: "-3%" }}
              />
            </div>
          </Card>
        </Row>
      </div>
    </div>
  );
};

export default Login;
