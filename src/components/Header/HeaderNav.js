import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderNav.css';

const HeaderNav = () => {
  return (
    <div>
      <nav className="header-nav">
        <Link className="nav-link" to="/home">
          Home
        </Link>
        <Link className="nav-link" to="/review">
          Review
        </Link>
        <Link className="nav-link" to="/dashboard">
          Dashboard
        </Link>
        <Link className="nav-link" to="/blogs">
          Blogs
        </Link>
        <Link className="nav-link" to="/about">
          About
        </Link>
      </nav>
    </div>
  );
};

export default HeaderNav;
