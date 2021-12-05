import "./aboutus.css";
import { Card } from "primereact/card";
import { Col, Row } from "react-bootstrap";

const aboutus = () => {
  return (
    <div
      style={{
        backgroundImage: "url(aboutus.jpg)",

        position: "fixed",
        width: "100%",
        height: "100%",
        top: "0px",
        left: "0px",
        zIndex: "1000",
        height: "100vh",
      }}
    >
      <div>
        <Row>
          <br></br>
        </Row>
        <Row>
          <h1 className="nameCard1" style={{ marginLeft: "42%" }}>
            CardArmour.pk
          </h1>
        </Row>
        <Row>
          <h4 className="nameCard1" style={{ marginLeft: "47%" }}>
            About Us
          </h4>
        </Row>
        <Row>
          <Col md={6}>
            <Card className="card1">
              <img
                src="./talha.jpeg"
                style={{ height: "250px", marginLeft: "25%" }}
              />
              <p className="text">
                Talha Rizwan CO-FOUNDER CardArmour.pk is an Software Engineering
                student at COMSATS Islamabad. He wishes to provide value to the
                IT industry with his hardwork and dedication.
              </p>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="card2">
              <img
                src="./shehroze.jpeg"
                style={{ height: "250px", marginLeft: "30%" }}
              />
              <p className="text">
                Shehroze Ehsan CO-FOUNDER CardArmour.pk is an Software
                Engineering student at COMSATS Islamabad. He is an ambitious
                student and a fast learner.
              </p>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={3}></Col>
          <Col md={6}>
            <Card className="para">
              <p className="paratext">
                CardArmour.pk strives to provide security when dealing with
                money online. CardArmour was made in an effort to reduce the
                probability of getting breached. The less servers with your
                original bank account details exponentially reduces chances of
                getting leaked. Even though our servers are not hack proof we
                ensure that if a breach occurs we will be the first to contact
                our customers so that can take precuationary measures from their
                side.{" "}
              </p>
            </Card>
          </Col>
          <Col md={3}></Col>
        </Row>
      </div>
    </div>
  );
};

export default aboutus;
