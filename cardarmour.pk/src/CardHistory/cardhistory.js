import "./cardhistory.css";
import { Col, Row } from "react-bootstrap";
import { Button } from "primereact/button";

const cardhistory = () => {
  return (
    <div
      style={{
        backgroundImage: "url(backgroundhome.jpg)",
        position: "fixed",
        width: "100%",
        height: "100%",
        top: "0px",
        left: "0px",
        zIndex: "1000",
      }}
    >
      <div>
        <br></br>
      </div>
      <Row>
        <Col md={2}>
          <Button
            label="Return Home"
            className="p-button-rounded p-button-outlined"
            style={{ color: "yellow", marginLeft: "15%" }}
          />
        </Col>
        <Col md={8}>
          <div>
            <h1 className="nameCard">CardArmour.pk</h1>
          </div>
        </Col>
        <Col md={2}>
          <Button
            label="Report a Problem"
            className="p-button-raised p-button-danger"
            style={{ marginTop: "2%" }}
          />
        </Col>
      </Row>

      <div>
        <br></br>
        <h5 className="vcth">Virtual Card Transaction History</h5>
      </div>
      <div style={{ marginLeft: "15%", marginRight: "15%", marginTop: "2%" }}>
        <table className="customers">
          <tr
            style={{
              alignItems: "center",
            }}
          >
            <th style={{ textAlign: "center" }}>Date</th>
            <th style={{ textAlign: "center" }}>Comment</th>
            <th style={{ textAlign: "center" }}>Status</th>
            <th style={{ textAlign: "center" }}>Amount</th>
          </tr>
          <tbody>
            {/* {products.map((product) => ( */}
            <tr>
              {/* <td>{titleLov[product.title - 1].title}</td> */}
              {/* <td>{CheckkTitle(product.title)}</td>
                    <td>{product.date}</td>
                    <td>{product.comment}</td>
                    <td>{product.status}</td>
                    <td>{product.amount}</td> */}
            </tr>
            {/* ))} */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default cardhistory;