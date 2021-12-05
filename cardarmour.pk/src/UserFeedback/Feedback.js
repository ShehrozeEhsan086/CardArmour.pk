import { Col, Row } from "react-bootstrap";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { InputTextarea } from "primereact/inputtextarea";
import React, { useState } from "react";
import "./Feedback.css";

const Feedback = () => {
  const [value2, setValue2] = useState("");
  return (
    <div
      style={{
        backgroundImage: "url(background.jpg)",
        position: "fixed",
        width: "100%",
        height: "100%",
        top: "0px",
        left: "0px",
        zIndex: "1000",
      }}
    >
      <div>
        <Row>
          <br></br>
        </Row>
        <Row>
          <h1 className="name">CardArmour.pk</h1>
        </Row>
        <Row>
          <Col md={3}></Col>
          <Col md={6}>
            <Card
              style={{
                backgroundColor: "rgb(238, 252, 255)",
                borderRadius: "4%",
                marginTop: "10%",
                marginLeft: "20%",
                marginRight: "20%",
              }}
            >
              <h3 className="feedback">Feedback</h3>
              <Row>
                <Col md={2}></Col>
                <Col md={8}>
                  <div style={{ marginLeft: "5%", marginTop: "8%" }}>
                    <h5 style={{ marginLeft: "14%" }}>
                      Please Explain in detail:
                    </h5>
                    <InputTextarea
                      value={value2}
                      onChange={(e) => setValue2(e.target.value)}
                      rows={5}
                      cols={40}
                      autoResize
                    />
                  </div>
                </Col>
                <Col md={2}></Col>
              </Row>
              <Button
                label="Submit"
                className="p-button-rounded p-button-info"
                style={{ marginLeft: "33%", marginTop: "2%" }}
              />
              <Button
                label="Cancel"
                className="p-button-rounded p-button-danger"
                style={{ marginLeft: "5%" }}
              />
            </Card>
          </Col>
          <Col md={3}></Col>
        </Row>
      </div>
    </div>
  );
};

export default Feedback;
