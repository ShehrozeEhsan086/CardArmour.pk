import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import LoginForm from "./Login/login";
import SignUp from "./SignUp/signup";
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./Homepage/homepage";
import PaymentMethod from "./PaymentMethod/paymentmethod";
import Feedback from "./UserFeedback/Feedback";
import CardHistory from "./CardHistory/cardhistory";
import Aboutus from "./Aboutus/aboutus";
import Setting from "./Setting/setting";

ReactDOM.render(
  <React.StrictMode>
    {/* <LoginForm /> */}
    {/* <SignUp /> */}
    <Homepage />
    {/* <Feedback /> */}
    {/* <PaymentMethod /> */}
    {/* <CardHistory /> */}
    {/* <Aboutus /> */}
    {/* <Setting /> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
