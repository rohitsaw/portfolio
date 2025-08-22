import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function CircularProgressWithLabel({ value, label }) {
  const [progress, setProgress] = useState(0);

  // Animate progress when value changes
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldValue) => {
        if (oldValue >= value) {
          clearInterval(timer);
          return value;
        }
        return Math.min(oldValue + 1, value);
      });
    }, 15);
    return () => clearInterval(timer);
  }, [value]);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Box sx={{ position: "relative", display: "inline-flex" }}>
        <CircularProgress
          variant="determinate"
          value={progress}
          size={90}
          thickness={5}
          sx={{
            color: "var(--primary-color)",
            backgroundColor: "#f0f0f0",
            borderRadius: "50%",
          }}
        />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ fontWeight: "bold", color: "var(--primary-color)" }}
          >
            {`${Math.round(progress)}%`}
          </Typography>
        </Box>
      </Box>
      {label && (
        <Typography
          variant="body2"
          sx={{ marginTop: 1, color: "text.secondary", textAlign: "center" }}
        >
          {label}
        </Typography>
      )}
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  /** Value between 0 and 100 */
  value: PropTypes.number.isRequired,
  /** Optional label under the circle */
  label: PropTypes.string,
};

export default CircularProgressWithLabel;
