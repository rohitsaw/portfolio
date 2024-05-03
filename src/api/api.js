let base_url =
  process.env.NODE_ENV === "production"
    ? "https://backend.portfolio.rsaw409.me"
    : "http://localhost:3000";

export { base_url };
