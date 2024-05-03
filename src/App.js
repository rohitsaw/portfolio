import { useSearchParams } from "react-router-dom";
import { forwardRef, useEffect } from "react";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import Button from "@mui/material/Button";
import GoogleIcon from "@mui/icons-material/Google";

import AnimateRoutes from "./component/routes";
import Profile from "./component/profile";

import styles from "./app.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setOpenSnackBar,
  setUserFromGoogle,
  getUser,
} from "../src/redux/action.js";
import { base_url as serverAddress, loadUser } from "./api.js";
import ErrorPage from "./pages/ErrorPage/index.js";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function App() {
  const dispatch = useDispatch();

  let [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const getLogedInUser = () => {
      loadUser()
        .then((resObject) => {
          console.log("user", resObject);
          dispatch(setUserFromGoogle(resObject.user));
        })
        .catch((error) => {
          console.log("Error", error);
        });
    };
    getLogedInUser();
    dispatch(getUser(searchParams.get("email") ?? "rsaw409@gmail.com"));
  }, []);

  const { user, isValidView } = useSelector((state) => ({
    user: state.userFromGoogle,
    isValidView: state.isValidView,
  }));

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

  if (!isValidView) {
    return <ErrorPage />;
  }

  return (
    <>
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
            sx={{ color: `var(--primary-color)` }}
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
    </>
  );
}

export default App;
