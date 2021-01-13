import React from "react";
import "../index.css";

function Heading() {
  return (
    <header className="header">
      <h2> Know Your Countries</h2>
      <span>{new Date().toLocaleDateString()}</span>
    </header>
  );
}

export default Heading;
