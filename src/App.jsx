import { forwardRef, useEffect } from "react";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import Button from "@mui/material/Button";
import GoogleIcon from "@mui/icons-material/Google";
import { useNavigate } from "react-router-dom";

import AnimateRoutes from "./component/routes/index.jsx";
import Profile from "./component/profile/index.jsx";

import styles from "./app.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setOpenSnackBar, setUserFromGoogle } from "./redux/action.js";
import { base_url as serverAddress } from "./api/api.js";
import { loadUser } from "./api/user.js";
import { getUser } from "./redux/action.js";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => ({
    user: state.userFromGoogle,
  }));

  useEffect(() => {
    const getLogedInUser = async () => {
      try {
        const resObject = await loadUser();
        dispatch(setUserFromGoogle(resObject.user));
        dispatch(
          getUser(resObject.user?.emails[0]?.value, resObject.user?.displayName)
        );
        navigate(`/${resObject.user?.emails[0]?.value}/about`, {
          replace: true,
        });
        console.log("LogedIn user found", resObject);
      } catch (error) {
        const pathname = window.location?.pathname;
        const extractedEmail = pathname?.split("/")?.[1];
        const restPath = pathname?.split("/")?.[2] ?? "about";
        console.log("extractedEmail", extractedEmail);
        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(extractedEmail)) {
          dispatch(getUser(extractedEmail, null));
          navigate(`/${extractedEmail}/${restPath}`, {
            replace: true,
          });
        } else {
          console.log("LogedIn user not found");
          dispatch(getUser("rsaw409@gmail.com", null));
          navigate("/rsaw409@gmail.com/about", {
            replace: true,
          });
        }
      }
    };
    getLogedInUser();
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
