import React from "react";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";

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
            size="small"
            fields="name,email,picture"
            // onClick={componentClicked}
            callback={this.responseFacebook}
          />
        </div>
      </div>
    );
  }
}

export default Login;
