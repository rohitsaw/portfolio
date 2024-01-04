const base_url = "https://rsaw409-portfolio-backend.onrender.com";

const getProjects = async () => {
  const url = `${base_url}/projects`;
  const response = await fetch(url);
  const projects = await response.json();
  return projects;
};

const getCertificates = async () => {
  const url = `${base_url}/certificates`;
  const response = await fetch(url);
  const certificates = await response.json();
  return certificates;
};

const getUser = async () => {
  const url = `${base_url}/user`;
  const response = await fetch(url);
  const user = await response.json();
  return user;
};

const getEducations = async () => {
  const url = `${base_url}/educations`;
  const response = await fetch(url);
  const educations = await response.json();
  return educations;
};

const getSkills = async () => {
  const url = `${base_url}/skills`;
  const response = await fetch(url);
  const skills = await response.json();
  return skills;
};

const getExperiences = async () => {
  const url = `${base_url}/experiences`;
  const response = await fetch(url);
  const experiences = await response.json();
  return experiences;
};

const getProfileImage = async ({ access_token }) => {
  const url = `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${access_token}`;
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${access_token}`,
      Accept: "application/json",
    },
  });
  const result = await response.json();
  return result;
};

export {
  getProjects,
  getCertificates,
  getUser,
  getEducations,
  getSkills,
  getExperiences,
  getProfileImage,
};
