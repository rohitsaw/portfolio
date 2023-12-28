const getProjects = async () => {
  const url = `https://rsaw409-portfolio-backend.onrender.com/projects`;
  const response = await fetch(url);
  const projects = await response.json();
  return projects;
};

const getCertificates = async () => {
  const url = `https://rsaw409-portfolio-backend.onrender.com/certificates`;
  const response = await fetch(url);
  const certificates = await response.json();
  return certificates;
};

export { getProjects, getCertificates };
