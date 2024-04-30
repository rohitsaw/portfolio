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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faUserCircle,
  faBriefcase,
  faCertificate,
  faCog,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";

import { Divider } from "@mui/material";

const Profile = ({
  picture,
  first_name,
  last_name,
  email,
  emailVerified,
  logOut,
  setOpenSnackBar,
}) => {
  const [anchorElUser, setAnchorElUser] = useState(null);

  const navigate = useNavigate();

  const menuItems = [
    {
      menu_name: "Edit Certificate",
      routeName: "/edit-certificate",
      icon: faCertificate,
    },
    {
      menu_name: "Edit Skill",
      routeName: "/edit-skill",
      icon: faCog,
    },
    {
      menu_name: "Edit Education",
      routeName: "/edit-education",
      icon: faGraduationCap,
    },
    {
      menu_name: "Edit Work",
      routeName: "/edit-experience",
      icon: faBriefcase,
    },
  ];

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogOut = () => {
    logOut();
  };

  const goToEditPage = (routeName) => {
    if (email === "rsaw409@gmail.com" && emailVerified) {
      navigate(routeName);
      handleCloseUserMenu();
    } else {
      setOpenSnackBar(true, "You do not have permission to edit!");
    }
  };

  return (
    <Box>
      <Tooltip title="Open Profile">
        <IconButton onClick={handleOpenUserMenu}>
          <Avatar
            sx={{ bgcolor: `var(--primary-color)` }}
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
        {menuItems.map((each) => {
          return (
            <MenuItem onClick={() => goToEditPage(each.routeName)}>
              <FontAwesomeIcon
                paddingLeft={18}
                color="#65656d"
                fontSize={18}
                opacity={0.8}
                icon={each.icon}
              />
              <Box sx={{ marginLeft: "18px", color: "#65656d" }}>
                {each.menu_name}
              </Box>
            </MenuItem>
          );
        })}

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
