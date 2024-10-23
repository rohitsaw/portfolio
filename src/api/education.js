import Cookies from "js-cookie";
import { base_url } from "./api";

const getEducations = async (user_id) => {
  const url = `${base_url}/educations?user_id=${user_id}`;
  const response = await fetch(url);
  const educations = await response.json();
  return educations;
};

const addEducation = async (education, user_id) => {
  const url = `${base_url}/educations?user_id=${user_id}`;

  let response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-XSRF-TOKEN": Cookies.get("XSRF-TOKEN"),
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

const deleteEducation = async (education, user_id) => {
  const url = `${base_url}/educations?user_id=${user_id}`;

  let response = await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "X-XSRF-TOKEN": Cookies.get("XSRF-TOKEN"),
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

export { getEducations, addEducation, deleteEducation };
