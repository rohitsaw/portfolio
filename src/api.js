let base_url =
  process.env.NODE_ENV === "production"
    ? "https://backend.portfolio.rsaw409.me"
    : "http://localhost:3000";

const loadUser = async () => {
  const response = await fetch(`${base_url}/login/success`, {
    method: "GET",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "https://portfolio.rsaw409.me",
      "Access-Control-Allow-Credentials": true,
    },
  });

  if (response.status === 200) {
    return response.json();
  } else {
    throw new Error("Something went wrong");
  }
};

const getProjects = async (user_id) => {
  const url = `${base_url}/projects?user_id=${user_id}`;
  const response = await fetch(url);
  const projects = await response.json();
  return projects;
};

const getCertificates = async (user_id) => {
  const url = `${base_url}/certificates?user_id=${user_id}`;
  const response = await fetch(url);
  const certificates = await response.json();
  return certificates;
};

const getEducations = async (user_id) => {
  const url = `${base_url}/educations?user_id=${user_id}`;
  const response = await fetch(url);
  const educations = await response.json();
  return educations;
};

const getSkills = async (user_id) => {
  const url = `${base_url}/skills?user_id=${user_id}`;
  const response = await fetch(url);
  const skills = await response.json();
  return skills;
};

const getUser = async (user_email) => {
  const url = `${base_url}/user?user_email=${user_email}`;
  const response = await fetch(url);
  const user = await response.json();
  return user;
};

const getExperiences = async (user_id) => {
  const url = `${base_url}/experiences?user_id=${user_id}`;
  const response = await fetch(url);
  const experiences = await response.json();
  return experiences;
};

const addOrUpdateUser = async (user) => {
  const url = `${base_url}/user`;
  let response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(user),
  });
  if (response.ok) {
    return response.json();
  } else {
    return Promise.reject(await response.json());
  }
};

const addSkills = async (skill, user_id) => {
  const url = `${base_url}/skills?user_id=${user_id}`;

  let response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(skill),
  });
  if (response.ok) {
    return response.json();
  } else {
    return Promise.reject(await response.json());
  }
};

const addCertificate = async (certificate, user_id) => {
  certificate.technology_tags = Array.isArray(certificate.technology_tags)
    ? certificate.technology_tags
    : certificate.technology_tags.split(",");

  const url = `${base_url}/certificates?user_id=${user_id}`;

  let response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(certificate),
  });
  if (response.ok) {
    return response.json();
  } else {
    return Promise.reject(await response.json());
  }
};

const addProject = async (project, user_id) => {
  project.technology_tags = Array.isArray(project.technology_tags)
    ? project.technology_tags
    : project.technology_tags?.split(",");

  const url = `${base_url}/projects?user_id=${user_id}`;

  let response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(project),
  });
  if (response.ok) {
    return response.json();
  } else {
    return Promise.reject(await response.json());
  }
};

const deleteSkill = async (skill) => {
  const url = `${base_url}/skills`;

  let response = await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(skill),
  });
  if (response.ok) {
    return response.json();
  } else {
    return Promise.reject(await response.json());
  }
};

const deleteProject = async (project) => {
  const url = `${base_url}/projects`;

  let response = await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(project),
  });
  if (response.ok) {
    return response.json();
  } else {
    return Promise.reject(await response.json());
  }
};

const deleteCertificate = async (certificate) => {
  const url = `${base_url}/certificates`;

  let response = await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(certificate),
  });
  if (response.ok) {
    return response.json();
  } else {
    return Promise.reject(await response.json());
  }
};

const addEducation = async (education, user_id) => {
  const url = `${base_url}/educations?user_id=${user_id}`;

  let response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(education),
  });
  if (response.ok) {
    return response.json();
  } else {
    return Promise.reject(await response.json());
  }
};

const deleteEducation = async (education) => {
  const url = `${base_url}/educations`;

  let response = await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(education),
  });
  if (response.ok) {
    return response.json();
  } else {
    return Promise.reject(await response.json());
  }
};

const addExperience = async (experience, user_id) => {
  const url = `${base_url}/experiences?user_id=${user_id}`;

  let response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(experience),
  });
  if (response.ok) {
    return response.json();
  } else {
    return Promise.reject(await response.json());
  }
};

const deleteExperience = async (experience) => {
  const url = `${base_url}/experiences`;

  let response = await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(experience),
  });
  if (response.ok) {
    return response.json();
  } else {
    return Promise.reject(await response.json());
  }
};

export {
  base_url,
  loadUser,
  getProjects,
  getCertificates,
  getUser,
  getEducations,
  getSkills,
  getExperiences,
  addSkills,
  addCertificate,
  deleteSkill,
  deleteCertificate,
  addEducation,
  deleteEducation,
  addExperience,
  deleteExperience,
  deleteProject,
  addProject,
  addOrUpdateUser,
};
