import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <h1>DreamHome</h1>
      <p>Specializes in property management</p>
      <p>By taking an intermediate role between owners who wish to rent out their furnished property and clients of DreamHome who require to rent furnished property for a fixed period.</p>
      <div className="buttons-container">
        <Link to="/staff" className="btn-staff">Staff Registration</Link>
        <Link to="/property" className="btn-staff">Property Registration</Link>
        <Link to="/client" className="btn-staff">Client Registration</Link>
        <Link to="/lease" className="btn-staff">Lease Form</Link>
      </div>
    </div>
  );
}

export default Home;
