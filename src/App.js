import { BrowserRouter } from "react-router-dom";
import AnimateRoutes from "./component/routes";
import { Provider, useDispatch } from "react-redux";

import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { useState } from "react";
import { Button } from "@mui/material";
import { setAccessToken } from "../src/redux/action.js";

function App() {
  const [isUserLogin, setUserLogin] = useState(false);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    googleLogout();
    setUserLogin(false);
    dispatch(setAccessToken(null));
  };

  const handleSuccess = (credentialResponse) => {
    console.log("credentialResponse", credentialResponse);
    setUserLogin(true);
    dispatch(setAccessToken(credentialResponse));
  };

  const handleError = (error) => {
    console.log("error", error);
  };

  return (
      <div className="App">
        <div
          style={{ position: "fixed", top: "10px", right: "9%", border: "0px" }}
        >
          {!isUserLogin ? (
            <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
          ) : (
            <Button onClick={handleLogOut}>Log Out</Button>
          )}
        </div>
        <BrowserRouter>
          <AnimateRoutes />
        </BrowserRouter>
      </div>
  );
}

export default App;
