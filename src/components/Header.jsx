import React from "react";
import { AppBar, Button, makeStyles, Toolbar, Typography } from "@material-ui/core";
import { GoogleLogout } from "react-google-login";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
});

const Header = () => {
  const classes = useStyles();
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  const onLogoutSuccess = () => {
    setUser(null);
    navigate("/login");
  };

  return (
    <AppBar position="sticky">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {`${user.givenName} ${user.familyName}`}
        </Typography>
        <GoogleLogout
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          render={(renderProps) => {
            return (
              <Button variant="contained" {...renderProps}>
                Logout
              </Button>
            );
          }}
          onLogoutSuccess={onLogoutSuccess}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
