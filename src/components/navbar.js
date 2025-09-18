import React from "react";

export default function Navbar({ onSelectCategory }) {
  const categories = ["general","business","entertainment","health","science","sports","technology"];

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a 
          className="navbar-brand" 
          href="/"
          onClick={() => onSelectCategory("all")} // Show all news when clicked
        >
          NewsMonkey
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {categories.map((category) => (
              <li className="nav-item" key={category}>
                <button 
                  className="nav-link btn btn-link"
                  onClick={() => onSelectCategory(category)}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
