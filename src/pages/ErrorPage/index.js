const ErrorPage = () => {
  const handleRetry = () => {
    window.location.href = "/"; // navigate to home
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f8f9fa",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "500px",
          padding: "30px",
          borderRadius: "12px",
          backgroundColor: "white",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "#dc3545", marginBottom: "10px" }}>
          Something went wrong
        </h2>
        <p style={{ marginBottom: "15px", color: "#555" }}>
          Possible reasons are:
        </p>
        <ul
          style={{
            textAlign: "left",
            margin: "0 auto 20px",
            padding: "0 20px",
            color: "#333",
          }}
        >
          <li>This URL does not exist</li>
          <li>This user does not exist</li>
        </ul>
        <button
          onClick={handleRetry}
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            border: "none",
            borderRadius: "8px",
            color: "white",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
