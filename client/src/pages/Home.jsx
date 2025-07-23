import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>👋 Welcome to Practice Auth App</h1>
      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={() => navigate("/signin")}>Sign In</button>
        <button style={styles.button} onClick={() => navigate("/signup")}>Sign Up</button>
        <button style={styles.googleButton}>
          <img
            src="https://img.icons8.com/color/16/000000/google-logo.png"
            alt="google"
            style={{ marginRight: "8px" }}
          />
          Continue with Google
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "#f5f5f5",
  },
  heading: {
    fontSize: "28px",
    marginBottom: "30px",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  button: {
    padding: "12px 24px",
    fontSize: "16px",
    borderRadius: "5px",
    cursor: "pointer",
    background: "#007BFF",
    color: "#fff",
    border: "none",
  },
  googleButton: {
    padding: "12px 24px",
    fontSize: "16px",
    borderRadius: "5px",
    cursor: "pointer",
    background: "#fff",
    border: "1px solid #ccc",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

export default Home;
