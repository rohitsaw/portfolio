let base_url =
  process.env.NODE_ENV === "production"
    ? "https://backend.portfolio.rsaw409.me/portfolio"
    : "http://localhost:3000/portfolio";

export { base_url };
