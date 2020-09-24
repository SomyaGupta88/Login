import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
import "./styles.css";

function Logo() {
  return (
    <div className="center">
      <img
        alt="Bobble AI"
        src="data:image/png;base64,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"
      />
    </div>
  );
}

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
      <Logo />
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
