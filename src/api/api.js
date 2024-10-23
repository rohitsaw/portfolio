let base_url =
  process.env.NODE_ENV === "production"
    ? "https://backend.portfolio.rsaw409.me"
    : "http://localhost:3000";

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
  return null;
}

export { base_url, getCookie };
