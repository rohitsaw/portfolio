import EditDetailsPage from "../index.js";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import { useState } from "react";
import { updateUser } from "../../../redux/action.js";

const EditUserDetails = ({ styles }) => {
  const { user } = useSelector((state) => ({
    user: state.user,
  }));

  const [user_email, setUserEmail] = useState(user.user_email);
  const [name, setName] = useState(user.name);
  const [github, setGithub] = useState(user.social_links?.github_url);
  const [linkedin, setLinkedin] = useState(user.social_links?.linkedin_url);
  const [blog, setBlog] = useState(user.social_links?.blog_url);
  const [twitter, setTwitter] = useState(user.social_links?.twitter_url);
  const [stackOverFlow, setStackoverflow] = useState(
    user.social_links?.stackoverflow_url
  );
  const [about, setAbout] = useState(user.about);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    let updatedUser = {
      user_email: user_email,
      name: name,
      about: about,
      social_links: {
        github_url: github,
        linkedin_url: linkedin,
        blog_url: blog,
        twitter_url: twitter,
        stackoverflow_url: stackOverFlow,
      },
    };
    dispatch(updateUser(updatedUser));
  };
  return (
    <div className={styles.editUserContainer}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          flexGrow: 1,
          maxWidth: "100%",
        }}
        noValidate
        autoComplete="off"
      >
        <Grid container justify="center" spacing={2} sx={{ maxWidth: "100%" }}>
          <Grid item xs={12} align="center">
            <TextField
              fullWidth
              onChange={(e) => setUserEmail(e.target.value)}
              label="Email"
              defaultValue={user.user_email}
              disabled
              style={{ width: 400, paddingLeft: "auto" }}
            />
          </Grid>
          <Grid item xs={6} align="right">
            <TextField
              label="Name"
              onChange={(e) => setName(e.target.value)}
              defaultValue={name}
              style={{ width: 400 }}
            />
          </Grid>
          <Grid item xs={6} align="left">
            <TextField
              label="Github"
              onChange={(e) => setGithub(e.target.value)}
              defaultValue={github}
              style={{ width: 400 }}
            />
          </Grid>
          <Grid item xs={6} align="right">
            <TextField
              label="LinkedIn"
              onChange={(e) => setLinkedin(e.target.value)}
              defaultValue={linkedin}
              style={{ width: 400 }}
            />
          </Grid>
          <Grid item xs={6} align="left">
            <TextField
              label="Blog"
              onChange={(e) => setBlog(e.target.value)}
              defaultValue={blog}
              style={{ width: 400 }}
            />
          </Grid>
          <Grid item xs={6} align="right">
            <TextField
              label="Twitter"
              onChange={(e) => setTwitter(e.target.value)}
              defaultValue={twitter}
              style={{ width: 400 }}
            />
          </Grid>
          <Grid item xs={6} align="left">
            <TextField
              label="Stackoverflow"
              onChange={(e) => setStackoverflow(e.target.value)}
              defaultValue={stackOverFlow}
              style={{ width: 400 }}
            />
          </Grid>
          <Grid item xs={12} align="center">
            <TextField
              fullWidth
              label="About"
              onChange={(e) => setAbout(e.target.value)}
              multiline
              maxRows={8}
              defaultValue={about}
            />
          </Grid>
          <Grid item xs={12} align="center">
            <Button
              variant="contained"
              style={{
                backgroundColor: "var(--primary-color)",
                fontSize: "24px",
                padding: "18px 36px",
                borderRadius: 35,
              }}
              type="submit"
            >
              Update
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default EditDetailsPage(EditUserDetails);
