import { base_url } from "./api";

const getProjects = async (user_id) => {
  const url = `${base_url}/projects?user_id=${user_id}`;
  const response = await fetch(url);
  const projects = await response.json();
  return projects;
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

const deleteProject = async (project, user_id) => {
  const url = `${base_url}/projects?user_id=${user_id}`;

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

export { getProjects, addProject, deleteProject };
