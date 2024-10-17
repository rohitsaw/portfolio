import { base_url } from "./api";

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

const getUser = async (user_email, name) => {
  const url = `${base_url}/user?user_email=${user_email}`;
  const response = await fetch(url, {
    method: "GET",
    headers: { ...(name && { name: name }) },
  });
  const user = await response.json();
  return user;
};

const addOrUpdateUser = async (user, user_id) => {
  const url = `${base_url}/user?user_id=${user_id}`;
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

export { getUser, addOrUpdateUser, loadUser };
