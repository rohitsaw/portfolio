const base_url =
  process.env.NODE_ENV === "production"
    ? "https://rsaw409-portfolio-backend.onrender.com"
    : "http://localhost:3000";

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

const addSkills = async (skill) => {
  const url = `${base_url}/skills`;

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

const addCertificate = async (certificate) => {
  certificate.technology_tags = Array.isArray(certificate.technology_tags)
    ? certificate.technology_tags
    : certificate.technology_tags.split(",");

  const url = `${base_url}/certificates`;

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

const addEducation = async (education) => {
  const url = `${base_url}/educations`;

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

const addExperience = async (experience) => {
  const url = `${base_url}/experiences`;

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

const getExperiences = async () => {
  const url = `${base_url}/experiences`;
  const response = await fetch(url);
  const experiences = await response.json();
  return experiences;
};

export {
  base_url,
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
};
