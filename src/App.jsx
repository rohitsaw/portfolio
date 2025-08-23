import { forwardRef } from "react";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

import AnimateRoutes from "./component/routes/index.jsx";

import { useDispatch, useSelector } from "react-redux";
import { setOpenSnackBar } from "./redux/action.js";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function App() {
  const dispatch = useDispatch();

  const { openSnackBar, severity, snackBarMessage } = useSelector((state) => ({
    openSnackBar: state.openSnackBar,
    severity: state.severity,
    snackBarMessage: state.snackBarMessage,
  }));

  const handleSnackBar = (value, message) => {
    dispatch(setOpenSnackBar(value, message));
  };

  return (
    <>
      {/* Page Content */}
      <AnimateRoutes setOpenSnackBar={handleSnackBar} />

      {/* Snackbar */}
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
