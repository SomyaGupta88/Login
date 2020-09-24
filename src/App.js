import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
import "./styles.css";

function SignupLogin() {
  return (
    <div className="center pb">
      <p>Sign Up</p>
    </div>
  );
}

function AppHeader() {
  return (
    <div className="pb">
      <h2 className="header">Create Your Account</h2>
      <h6 className="header">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </h6>
    </div>
  );
}

function Form() {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const eye = passwordShown ? (
    <FontAwesomeIcon icon={faEyeSlash} />
  ) : (
    <FontAwesomeIcon icon={faEye} />
  );

  return (
    <form onsubmit={this.handleSubmit}>
      <div className="form-group">
        <div className="pb">
          <input
            type="name"
            className="form-control"
            placeholder="First Name"
            name="fname"
          ></input>
        </div>
        <div className="pb">
          <input
            type="name"
            className="form-control"
            placeholder="Last Name"
            name="lname"
          ></input>
        </div>
        <div className="pb">
          <input
            type="email"
            className="form-control"
            placeholder="Email Address"
            name="email"
          ></input>
        </div>
        <div className="customIcon pb">
          <input
            type={passwordShown ? "text" : "password"}
            className="form-control"
            placeholder="Password"
            name="pswd"
          ></input>
          <i onClick={togglePasswordVisiblity}> {eye} </i>
        </div>
        <div className="pb">
          <p className="center terms">
            By Clicking Sign Up, you agree to our <a href="#">Terms of Use</a>{" "}
            and <a href="#">Privacy Policy</a>
          </p>
        </div>
        <div className="pb">
          <button type="submit" className="btn-lg btn-primary btn-block">
            SIGN UP
          </button>
        </div>
      </div>
    </form>
  );
}

function Hr() {
  return (
    <div class="strike">
      <span>OR</span>
    </div>
  );
}

class Login extends React.Component {
  responseGoogle(response) {
    console.log(response);
  }

  responseFacebook(response) {
    console.log(response);
  }

  render() {
    return (
      <div className="flex">
        <div className="equal1">
          <GoogleLogin
            clientId="1070673178200-bosdbfh1d9gbk4ek6o0qnc2vhanejfd4.apps.googleusercontent.com"
            buttonText="LOGIN WITH GOOGLE"
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
        </div>
        <div className="equal1">
          <FacebookLogin
            appId="1683703825121184"
            autoLoad={true}
            size="medium"
            fields="name,email,picture"
            // onClick={componentClicked}
            callback={this.responseFacebook}
          />
        </div>
      </div>
    );
  }
}

export default function App() {
  return (
    <div>
      <div className="container">
        <SignupLogin />
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
