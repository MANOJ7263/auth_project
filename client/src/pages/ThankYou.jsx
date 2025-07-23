import React from "react";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h2>🎉 Account Created Successfully!</h2>
      <p>Your account has been created. You can now sign in.</p>
      <Link to="/signin">
        <button>Go to Sign In</button>
      </Link>
    </div>
  );
};

export default ThankYou;
