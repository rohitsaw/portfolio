import { base_url } from "./api";

const getExperiences = async (user_id) => {
  const url = `${base_url}/experiences?user_id=${user_id}`;
  const response = await fetch(url);
  const experiences = await response.json();
  return experiences;
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

const deleteExperience = async (experience, user_id) => {
  const url = `${base_url}/experiences?user_id=${user_id}`;

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

export { getExperiences, addExperience, deleteExperience };
