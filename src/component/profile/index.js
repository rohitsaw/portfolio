import { useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";

import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

const Profile = ({ picture, name, email, logOutFn }) => {
  const [anchorElUser, setAnchorElUser] = useState(null);

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

  return (
    <Box>
      <Tooltip title="Open Profile">
        <IconButton onClick={handleOpenUserMenu}>
          <Avatar alt="Profile Picture" src={picture} />
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorElUser}
        keepMounted
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <MenuItem key={name}>
          <Typography textAlign="center">{name}</Typography>
        </MenuItem>
        <MenuItem key={email}>
          <Typography textAlign="center">{email}</Typography>
        </MenuItem>
        <MenuItem key={"Logout"} onClick={handleLogOut}>
          <Typography textAlign="center">Logout</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default Profile;
