import React, { useState } from "react";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";

import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";

import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

import { motion } from "framer-motion";

import IconButton from "@mui/material/IconButton";
import CommentIcon from "@mui/icons-material/Comment";

import styles from "./index.module.css";

const Certification = () => {
  let { isCertificatesLoading, certificates } = useSelector((state) => ({
    isCertificatesLoading: state.isCertificatesLoading,
    certificates: state.certificates,
  }));

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {isCertificatesLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <CircularProgress />
        </div>
      ) : (
        <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
          <List component="nav">
            {certificates.map((each) => (
              <>
                <ListItemButton>
                  <ListItem
                    alignItems="flex-start"
                    secondaryAction={
                      <NavLink
                        to={each.verification_url}
                        target="_blank"
                        rel="noreferrer"
                        className={styles.navLinkHover}
                      >
                        <ArrowOutwardIcon
                          onClick={() => each.verification_url}
                        />
                      </NavLink>
                    }
                  >
                    <ListItemText
                      primary={each.certificate_name}
                      secondary={
                        <React.Fragment>
                          <Typography
                            sx={{ display: "inline" }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                            Certified By - {each.certification_authority}
                            <br />
                            Certification Date -{" "}
                            {new Date(
                              each.certification_date
                            ).toLocaleDateString()}
                          </Typography>
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                </ListItemButton>
                <Divider variant="middle" component="li" />
              </>
            ))}
          </List>
        </Box>
      )}
    </motion.div>
  );
};

export default Certification;
