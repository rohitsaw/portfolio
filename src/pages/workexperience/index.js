import React from "react";
import { useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import dayjs from "dayjs";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import Typography from "@mui/material/Typography";

import { motion } from "framer-motion";

const WorkExperience = () => {
  let { isWorkExperiencesLoading, workExperiences } = useSelector((state) => ({
    isWorkExperiencesLoading: state.isWorkExperiencesLoading,
    workExperiences: state.workExperiences,
  }));

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {isWorkExperiencesLoading ? (
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
            {workExperiences.map((work) => (
              <>
                <ListItemButton>
                  <ListItem
                    key={work.id}
                    alignItems="flex-start"
                    secondaryAction={`${dayjs(work.start_date).format(
                      "MMM YYYY"
                    )} - ${
                      work.end_date
                        ? dayjs(work.end_date).format("MMM YYYY")
                        : "Current"
                    }`}
                  >
                    <ListItemText
                      primary={work.company_name}
                      secondaryTypographyProps={{
                        paddingRight: 18,
                      }}
                      secondary={
                        <React.Fragment>
                          <Typography
                            sx={{ display: "inline" }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                            {work.designation}
                          </Typography>
                          <br />
                          <ul>
                            {work.details ? (
                              work.details
                                .split(".")
                                .filter((a) => !!a)
                                .map((e) => <li>{`${e}.`}</li>)
                            ) : (
                              <li>Not Available.</li>
                            )}
                          </ul>
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

export default WorkExperience;
