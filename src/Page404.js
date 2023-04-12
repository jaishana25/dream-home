import React from 'react';
import { Link } from 'react-router-dom';
import './Page404.css';

function Page404() {
  return (
    <div className="page-404">
      <h2 className="error-message">404 Error: Page Not Found</h2>
      <Link to="/" className="home-link">
        <button className="home-button">Go to Home Page</button>
      </Link>
    </div>
  );
}

export default Page404;
