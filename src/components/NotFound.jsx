import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="notfound">
      <h2>404 - Page Not Found</h2>
      <Link to="/" className="btn">Go Home</Link>
    </div>
  );
}

export default NotFound;
