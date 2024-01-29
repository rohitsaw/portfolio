import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";

import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import { Divider } from "@mui/material";

const Profile = ({
  picture,
  first_name,
  last_name,
  email,
  logOutFn,
  setOpenSnackBar,
}) => {
  const [anchorElUser, setAnchorElUser] = useState(null);

  const navigate = useNavigate();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogOut = () => {
    setAnchorElUser(null);
    logOutFn();
  };

  const goToEditPage = () => {
    console.log("email", email);
    if (email === "rsaw409@gmail.com") {
      navigate("/edit-details");
      handleCloseUserMenu();
    } else {
      setOpenSnackBar(true);
    }
  };

  return (
    <Box>
      <Tooltip title="Open Profile">
        <IconButton onClick={handleOpenUserMenu}>
          <Avatar
            sx={{ bgcolor: "#14b8a6" }}
            alt="Profile name initials"
          >{`${first_name[0]}${last_name[0]}`}</Avatar>
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorElUser}
        keepMounted
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <MenuItem key={"profile"}>
          <Avatar alt="Profile Picture" src={picture} />
          <Box sx={{ marginLeft: "12px" }}>
            <Typography variant="h6" sx={{ letterSpacing: 0 }}>
              Hi {first_name}!
            </Typography>
            <Typography variant="subtitle2" sx={{ color: "#65656d" }}>
              {email}
            </Typography>
          </Box>
        </MenuItem>
        <Divider />
        <MenuItem onClick={goToEditPage}>
          <PersonIcon
            sx={{
              fontSize: "18px",
              paddingLeft: "8px",
              color: "#65656d",
              opacity: 0.8,
            }}
          />
          <Box sx={{ marginLeft: "18px", color: "#65656d" }}>Edit Profile</Box>
        </MenuItem>
        <Divider />
        <MenuItem key={"Logout"} onClick={handleLogOut}>
          <LogoutIcon
            sx={{
              fontSize: "18px",
              paddingLeft: "8px",
              color: "#65656d",
              opacity: 0.8,
            }}
          />
          <Box sx={{ marginLeft: "18px", color: "#65656d" }}>Log out</Box>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default Profile;
