import React from "react";

export default function Footer() {
  return (
    <footer className="bg-light text-center text-lg-start mt-4">
      <div className="container p-4">
        <p className="text-center mb-1">
          &copy; {new Date().getFullYear()} NewsMonkey. All rights reserved.
        </p>
        <div className="text-center">
          <a href="https://www.facebook.com/raj_patil_712" className="mx-2 text-dark" style={{ fontSize: "1.5rem" }}>
            <i className="fab fa-facebook"></i>
          </a>
          <a href="/" className="mx-2 text-dark" style={{ fontSize: "1.5rem" }}>
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com/raj_patil_712/" className="mx-2 text-dark" style={{ fontSize: "1.5rem" }}>
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
