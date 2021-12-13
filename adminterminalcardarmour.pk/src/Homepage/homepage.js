import { Col, Dropdown, Row } from "react-bootstrap";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import "./homepage.css";
import { useNavigate } from "react-router-dom";

import React, { useState } from "react";
import { connect } from "react-redux";
import { ProgressSpinner } from "primereact/progressspinner";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import {
  getCustomerId,
  getBankAccount,
  deletePaymentMethod,
  generateVirtualCard,
  linkVirtualCard,
  getVirtualCard,
  deleteVirtualCard,
  getFiveTransactions,
} from "../api/authenticationService";

const Homepage = ({ loading, error, ...props }) => {
  const navigate = useNavigate();
  const [displayBasic, setDisplayBasic] = useState(false);
  const [position, setPosition] = useState("center");
  const [expiryDate, setExpiryDate] = useState("");
  const [bankName, setBankName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expDate, setExpDate] = useState("");
  const [accountid1, setAccountId] = useState(null);
  const [virtualCardNumber, setVirtualCardNumber] = useState(null);
  const [cardid, setCardid] = useState(null);
  const [validity, setValidity] = useState("");
  const [cvc, setCVC] = useState("");
  const [transactions, setTransactions] = useState([]);
  const [gender_i, setGender] = useState(null);

  let userid = null;
  let accountid = null;

  const getToken = () => {
    return localStorage.getItem("USER_KEY");
  };
  const getID = () => {
    return localStorage.getItem("USER_ID");
  };
  let username = getToken();
  let id = getID();

  const genders = [{ name: "Male" }, { name: "Female" }];

  React.useEffect(() => {
    loading = true;
    username = getToken();

    if (username === "undefined" || username === null) {
      navigate("/");
    }
    getCustomerId(id).then((response) => {
      userid = response.data;
      localStorage.setItem("C_ID", response.data);
      getBankAccount(userid).then((response) => {
        setBankName(response.data.bankname);
        setCardNumber(response.data.cardnumber);
        setExpDate(response.data.expdate);
        setAccountId(response.data.accountid);
        accountid = response.data.accountid;
        if (accountid !== null) {
          getVirtualCard(accountid).then((response) => {
            console.log(response);
            setVirtualCardNumber(response.data.cardNumber);
            setValidity(response.data.expdate);
            setCVC(response.data.cvc);
            setCardid(response.data.cardid);
            localStorage.setItem("VC_ID", response.data.cardid);
            const virtualCardId = response.data.cardid;
            getFiveTransactions(virtualCardId).then((response) => {
              const transactionList = response.data;
              setTransactions(transactionList);
              console.log(transactions);
            });
          });
        }
      });
    });
  }, []);

  const handleDeletePayment = (e) => {
    e.preventDefault();
    deletePaymentMethod(accountid1).then((response) => {
      window.location.reload(true);
    });
  };

  const dialogFuncMap = {
    displayBasic: setDisplayBasic,
  };

  const onClick = (name, position) => {
    console.log(accountid1);
    dialogFuncMap[`${name}`](true);

    if (position) {
      setPosition(position);
    }
  };
  const onHide = (name) => {
    dialogFuncMap[`${name}`](false);
  };

  const handleSubmit = () => {
    const cardholdername = username;
    const expdate = expiryDate;
    generateVirtualCard(cardholdername, expdate).then((response) => {
      const virtualcardid = response.data;
      linkVirtualCard(accountid1, virtualcardid).then((response) => {
        console.log(response);
        window.location.reload(true);
      });
    });
    console.log("check");
  };

  const renderFooter = (name) => {
    return (
      <div>
        <Button
          label="No"
          icon="pi pi-times"
          onClick={() => onHide(name)}
          className="p-button-text"
        />
        <Button
          label="Yes"
          icon="pi pi-check"
          onClick={handleSubmit}
          autoFocus
        />
      </div>
    );
  };

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.clear();
    navigate("/");
  };

  const handleAboutus = (e) => {
    e.preventDefault();
    navigate("/aboutus");
  };

  const handleSetting = (e) => {
    e.preventDefault();
    navigate("/setting");
  };

  const handleFeedback = (e) => {
    e.preventDefault();
    navigate("/feedback");
  };

  const handlePayment = (e) => {
    e.preventDefault();
    navigate("/paymentmethod");
  };

  const handleCardHistory = (e) => {
    e.preventDefault();
    navigate("/cardhistory");
  };

  const handleFlaggedAccount = (e) => {
    e.preventDefault();
    navigate("/flaggedaccount");
  };

  const handleFeedbackHistory = (e) => {
    e.preventDefault();
    navigate("/feedbackhistory");
  };

  const handleVirtualCardDelete = (e) => {
    e.preventDefault();
    deleteVirtualCard(cardid).then((response) => {
      window.location.reload(true);
    });
  };

  const onGenderChange = (e) => {
    setGender(e.value);
  };

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
      {loading && (
        <div>
          <Row>
            <br></br>
          </Row>
          <Row>
            <ProgressSpinner id="loading" strokeWidth="5" />
            <h1 className="pending">Loading...</h1>
          </Row>
          <Row></Row>
        </div>
      )}
      {loading === false && (
        <div>
          <Row>
            <br></br>
          </Row>
          <Row>
            <Col md={4}>
              <Button
                onClick={handleFlaggedAccount}
                label="Flagged Accounts"
                className="p-button-outlined p-button-warning"
                style={{ color: "red", marginLeft: "5%" }}
              />
            </Col>
            <Col md={4}>
              <h1 className="nameCard1">CardArmour.pk</h1>
            </Col>
            <Col md={4}>
              <h2 className="name1">Welcome {username}</h2>
            </Col>
          </Row>
          <Row>
            <Col md={5}></Col>
            <Col md={4}></Col>
            <Col md={3}>
              <Button
                onClick={handleLogout}
                label="Log Out"
                className="p-button-outlined p-button-warning"
                style={{ color: "yellow", marginLeft: "23%" }}
              />
            </Col>
          </Row>
          <Row>
            <br></br>
          </Row>

          <Row>
            <Col md={8}>
              <div style={{ marginLeft: "1%" }}>
                <h4
                  style={{
                    textAlign: "center",
                    marginTop: "5%",
                    color: "white",
                  }}
                >
                  Customers
                </h4>
                <label htmlFor="gender" style={{ marginLeft: "40%" }}>
                  Gender
                </label>
                <Dropdown
                  inputId="gender"
                  value={gender_i}
                  options={genders}
                  onChange={onGenderChange}
                  placeholder="Select"
                  optionLabel="name"
                />
              </div>
              <table className="customers">
                <tr
                  style={{
                    alignItems: "center",
                  }}
                >
                  <th style={{ textAlign: "center" }}>Name</th>
                  <th style={{ textAlign: "center" }}>Gender</th>
                  <th style={{ textAlign: "center" }}>Cnic</th>
                  <th style={{ textAlign: "center" }}>DOB</th>
                  <th style={{ textAlign: "center" }}>Age</th>
                  <th style={{ textAlign: "center" }}>Email</th>
                  <th style={{ textAlign: "center" }}>Location</th>
                  <th style={{ textAlign: "center" }}>Options</th>
                </tr>
                <tbody>
                  {/* {feedbacks.map((feedback) => ( */}
                  <tr>
                    {/* <td>{titleLov[product.title - 1].title}</td>
                    <td>{CheckkTitle(product.title)}</td> */}
                    {/* <td>{feedback.detail}</td> */}
                    {/* <td>{feedback}</td> */}
                    {/* <td>{transaction.comment}</td>
                <td>{transaction.amount}</td> */}
                  </tr>
                  {/* ))} */}
                </tbody>
              </table>
            </Col>
            <Col md={4}>
              <div style={{ marginTop: "10%", marginRight: "1%" }}>
                <h4
                  style={{
                    textAlign: "center",
                    marginTop: "5%",
                    color: "white",
                  }}
                >
                  Customer Feedback
                </h4>
                <table className="customers">
                  <tr
                    style={{
                      alignItems: "center",
                    }}
                  >
                    <th style={{ textAlign: "center" }}>Destails</th>
                    <th style={{ textAlign: "center" }}>Options</th>
                  </tr>
                  <tbody>
                    {/* {feedbacks.map((feedback) => ( */}
                    <tr>
                      {/* <td>{titleLov[product.title - 1].title}</td>
                    <td>{CheckkTitle(product.title)}</td> */}
                      {/* <td>{feedback.detail}</td> */}
                      {/* <td>{feedback}</td> */}
                      {/* <td>{transaction.comment}</td>
                <td>{transaction.amount}</td> */}
                    </tr>
                    {/* ))} */}
                  </tbody>
                </table>
              </div>
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = ({ auth }) => {
  return {
    loading: auth.loading,
    error: auth.error,
  };
};

export default connect(mapStateToProps)(Homepage);
