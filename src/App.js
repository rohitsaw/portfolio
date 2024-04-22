import { BrowserRouter } from "react-router-dom";
import { useState, forwardRef, useEffect } from "react";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import Button from "@mui/material/Button";
import GoogleIcon from "@mui/icons-material/Google";

import AnimateRoutes from "./component/routes";
import Profile from "./component/profile";

import styles from "./app.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setOpenSnackBar } from "../src/redux/action.js";
import { base_url as serverAddress, loadUser } from "./api.js";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function App() {
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = () => {
      loadUser()
        .then((resObject) => {
          console.log("user", resObject);
          setUser(resObject.user);
        })
        .catch((error) => {
          console.log("Error", error);
        });
    };
    getUser();
  }, []);

  const { openSnackBar, severity, snackBarMessage } = useSelector((state) => ({
    openSnackBar: state.openSnackBar,
    severity: state.severity,
    snackBarMessage: state.snackBarMessage,
  }));

  const handleSnackBar = (value, message) => {
    dispatch(setOpenSnackBar(value, message));
  };

  const login = () => {
    window.open(`${serverAddress}/google`, "_self");
  };

  const logout = () => {
    window.open(`${serverAddress}/logout`, "_self");
  };

  return (
    <BrowserRouter>
      <div className={styles.profile}>
        {user ? (
          <Profile
            picture={user.photos[0]?.value}
            first_name={user.name.givenName}
            last_name={user.name.familyName}
            email={user.emails[0]?.value}
            emailVerified={user.emails[0]?.verified}
            logOut={logout}
            setOpenSnackBar={handleSnackBar}
          />
        ) : (
          <Button
            variant="outlined"
            startIcon={<GoogleIcon sx={{ fontSize: "32px" }} />}
            onClick={() => login()}
            sx={{ color: "#14b8a6" }}
          >
            Sign In
          </Button>
        )}
      </div>
      <AnimateRoutes setOpenSnackBar={handleSnackBar} />
      <Snackbar
        open={openSnackBar}
        autoHideDuration={1000}
        onClose={() => handleSnackBar(false, "")}
      >
        <Alert
          onClose={() => handleSnackBar(false, "")}
          severity={severity}
          sx={{ width: "100%" }}
        >
          {snackBarMessage}
        </Alert>
      </Snackbar>
    </BrowserRouter>
  );
}

export default App;
