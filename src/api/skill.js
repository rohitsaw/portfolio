import Cookies from "js-cookie";
import { base_url } from "./api";

const getSkills = async (user_id) => {
  const url = `${base_url}/skills?user_id=${user_id}`;
  const response = await fetch(url);
  const skills = await response.json();
  return skills;
};

const addSkills = async (skill, user_id) => {
  const url = `${base_url}/skills?user_id=${user_id}`;

  let response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-XSRF-TOKEN": Cookies.get("XSRF-TOKEN"),
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

const deleteSkill = async (skill, user_id) => {
  const url = `${base_url}/skills?user_id=${user_id}`;

  let response = await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "X-XSRF-TOKEN": Cookies.get("XSRF-TOKEN"),
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

export { getSkills, addSkills, deleteSkill };
