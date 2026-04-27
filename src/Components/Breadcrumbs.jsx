import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaChevronRight } from 'react-icons/fa';

export default function Breadcrumbs({ items }) {
  return (
    <nav className="breadcrumbs">
      <div className="breadcrumb-container">
        <Link to="/" className="breadcrumb-home">
          <FaHome />
          <span>Home</span>
        </Link>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <FaChevronRight className="breadcrumb-separator" />
            {index === items.length - 1 ? (
              <span className="breadcrumb-current">{item.label}</span>
            ) : (
              <Link to={item.path} className="breadcrumb-link">
                {item.label}
              </Link>
            )}
          </React.Fragment>
        ))}
      </div>
    </nav>
  );
}