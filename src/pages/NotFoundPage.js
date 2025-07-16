import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <div style={{ marginBottom: "16px" }}>404 NotFound</div>

      <Link to="/">Home</Link>
    </div>
  );
}

export default NotFound;
