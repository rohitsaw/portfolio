import { BrowserRouter } from "react-router-dom";
import AnimateRoutes from "./component/routes";

import { useGoogleLogin, googleLogout } from "@react-oauth/google";
import { useEffect, useState } from "react";
import axios from "axios";
import Profile from "./component/profile";
import GoogleButton from "react-google-button";

function App() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem("user");
    const profile = localStorage.getItem("profile");
    if (profile) setProfile(JSON.parse(profile));
  }, []);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      localStorage.setItem("user", JSON.stringify(codeResponse));
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${codeResponse.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${codeResponse.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setProfile(res.data);
          localStorage.setItem("profile", JSON.stringify(res.data));
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
      <div
        style={{
          position: "fixed",
          top: "10px",
          right: "9%",
          border: "0px",
        }}
      >
        {profile ? (
          <Profile
            picture={profile.picture}
            name={profile.name}
            email={profile.email}
            logOutFn={handleLogOut}
          />
        ) : (
          <GoogleButton onClick={() => login()} />
        )}
      </div>
      <BrowserRouter>
        <AnimateRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
