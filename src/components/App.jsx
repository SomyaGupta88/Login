import React from "react";
import Form from "./Form.jsx";
import Logo from "./Logo.jsx";
import Signup from "./Signup.jsx";
import AppHeader from "./AppHeader.jsx";
import Hr from "./Hr.jsx";
import Login from "./Login.jsx";
import "./styles.scss";

export default function App() {
  return (
    <div>
      <Logo />
      <div className="container">
        <Signup />
        <AppHeader />
        <div class="center pb">
          <Login />
        </div>
        <Hr />
        <Form />
        {/* <ForgotPassword /> */}
        {/* <SignUp /> */}
      </div>
    </div>
  );
}
