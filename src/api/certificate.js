import Cookies from "js-cookie";
import { base_url } from "./api.js";

const getCertificates = async (user_id) => {
  const url = `${base_url}/certificates?user_id=${user_id}`;
  const response = await fetch(url);
  const certificates = await response.json();
  return certificates;
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
      "X-XSRF-TOKEN": Cookies.get("XSRF-TOKEN"),
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

const deleteCertificate = async (certificate, user_id) => {
  const url = `${base_url}/certificates?user_id=${user_id}`;

  let response = await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "X-XSRF-TOKEN": Cookies.get("XSRF-TOKEN"),
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

export { getCertificates, addCertificate, deleteCertificate };
