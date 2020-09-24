import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

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

export default Form;
