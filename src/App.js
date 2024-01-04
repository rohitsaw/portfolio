import { BrowserRouter } from "react-router-dom";
import { useGoogleLogin, googleLogout } from "@react-oauth/google";
import { useEffect, useState, forwardRef } from "react";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import Button from "@mui/material/Button";
import GoogleIcon from "@mui/icons-material/Google";

import AnimateRoutes from "./component/routes";
import { getProfileImage } from "./api.js";
import Profile from "./component/profile";

import styles from "./app.module.css";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function App() {
  const [profile, setProfile] = useState(null);

  const [openSnackBar, setOpenSnackBar] = useState(false);

  useEffect(() => {
    // const user = localStorage.getItem("user");
    const profile = localStorage.getItem("profile");
    if (profile) setProfile(JSON.parse(profile));
  }, []);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      localStorage.setItem("user", JSON.stringify(codeResponse));
      getProfileImage(codeResponse)
        .then((res) => {
          setProfile(res);
          localStorage.setItem("profile", JSON.stringify(res));
        })
        .catch((err) => console.log(err));
    },
    onError: (error) => console.log("Login Failed:", error),
  });

  const handleLogOut = () => {
    googleLogout();
    setProfile(null);

    localStorage.removeItem("user");
    localStorage.removeItem("profile");
  };

  return (
    <div className="App">
      <div className={styles.profile}>
        {profile ? (
          <Profile
            picture={profile.picture}
            first_name={profile.given_name}
            last_name={profile.family_name}
            email={profile.email}
            logOutFn={handleLogOut}
            setOpenSnackBar={setOpenSnackBar}
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
      <BrowserRouter>
        <AnimateRoutes />
      </BrowserRouter>
      <Snackbar
        open={openSnackBar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackBar(false)}
      >
        <Alert
          onClose={() => setOpenSnackBar(false)}
          severity="error"
          sx={{ width: "100%" }}
        >
          You do not have permission to edit!
        </Alert>
      </Snackbar>
    </div>
  );
}

export default App;
