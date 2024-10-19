import EditDetailsPage from "../index.js";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import { useState } from "react";
import { updateUser } from "../../../redux/action.js";

const EditUserDetails = ({ styles, setOpenSnackBar }) => {
  const { user, isUserLoading } = useSelector((state) => ({
    user: state.user,
    isUserLoading: state.isUserLoading,
  }));

  const [user_email, setUserEmail] = useState(user?.user_email);
  const [name, setName] = useState(user?.name);
  const [github, setGithub] = useState(user?.social_links?.github_url);
  const [linkedin, setLinkedin] = useState(user?.social_links?.linkedin_url);
  const [blog, setBlog] = useState(user?.social_links?.blog_url);
  const [twitter, setTwitter] = useState(user?.social_links?.twitter_url);
  const [stackOverFlow, setStackoverflow] = useState(
    user?.social_links?.stackoverflow_url
  );
  const [about, setAbout] = useState(user?.about);
  const [profile_url, setProfileUrl] = useState(user?.profile_url);

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    let updatedUser = {
      user_email: user_email,
      name: name,
      about: about,
      profile_url: profile_url,
      social_links: {
        github_url: github,
        linkedin_url: linkedin,
        blog_url: blog,
        twitter_url: twitter,
        stackoverflow_url: stackOverFlow,
      },
    };
    dispatch(updateUser(updatedUser, user.id));
  };

  const handleImageUpload = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    if (file) {
      const fileType = file.type;
      const validTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

      if (validTypes.includes(fileType)) {
        setProfileUrl(file);
      } else {
        setOpenSnackBar(true, "Invalid Image");
      }
    }
  };

  const getImageUrl = () => {
    if (typeof profile_url === "string") return profile_url;

    if (!profile_url) return null;

    return URL.createObjectURL(profile_url);
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
        <Grid container spacing={2} sx={{ maxWidth: "100%" }}>
          <Grid item xs={4} align="left">
            <Grid
              container
              align="center"
              justifyContent="center"
              padding={"20px"}
            >
              <img
                src={getImageUrl()}
                style={{
                  aspectRatio: 19 / 20,
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                  opacity: "1",
                  borderRadius: "12%",
                  paddingBottom: "20px",
                }}
                alt="coder logo"
              />

              <Button
                variant="contained"
                component="label"
                accept=".jpeg, .jpg, .png, .webp"
                style={{
                  backgroundColor: "var(--primary-color)",
                  fontSize: "12px",
                  padding: "8px 12px",
                  borderRadius: 12,
                  width: "auto",
                }}
                onChange={handleImageUpload}
              >
                Upload Image
                <input type="file" hidden />
              </Button>
            </Grid>
          </Grid>

          <Grid
            container
            item
            xs={8}
            sx={{ maxWidth: "100%", mt: "30px", mb: "20px" }}
            alignContent={"start"}
            rowSpacing={"30px"}
          >
            <Grid item xs={8}>
              <TextField
                fullWidth
                onChange={(e) => setUserEmail(e.target.value)}
                label="Email"
                defaultValue={user_email}
                disabled
                style={{ width: "90%", paddingLeft: "auto" }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Name"
                onChange={(e) => setName(e.target.value)}
                defaultValue={name}
                style={{ width: "90%" }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Github"
                onChange={(e) => setGithub(e.target.value)}
                defaultValue={github}
                style={{ width: "90%" }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="LinkedIn"
                onChange={(e) => setLinkedin(e.target.value)}
                defaultValue={linkedin}
                style={{ width: "90%" }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Blog"
                onChange={(e) => setBlog(e.target.value)}
                defaultValue={blog}
                style={{ width: "90%" }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Twitter"
                onChange={(e) => setTwitter(e.target.value)}
                defaultValue={twitter}
                style={{ width: "90%" }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Stackoverflow"
                onChange={(e) => setStackoverflow(e.target.value)}
                defaultValue={stackOverFlow}
                style={{ width: "90%" }}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid container justify="center" spacing={2}>
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
