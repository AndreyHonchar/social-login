import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import { GoogleLogin } from "react-google-login";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
});

const Login = () => {
  const classes = useStyles();
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const onSuccessLogin = (response) => {
    setUser({
      ...response.profileObj,
      accessToken: response.accessToken,
    });
    navigate("/");
  };

  return (
    <div className={classes.root}>
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        render={(renderProps) => {
          return (
            <Button variant="contained" color="primary" {...renderProps}>
              Login with Google
            </Button>
          );
        }}
        onSuccess={onSuccessLogin}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
};

export default Login;
