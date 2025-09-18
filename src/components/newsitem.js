import React from "react";

export default function NewsItem({ title, description, imageUrl, newsUrl, author, publishedAt }) {
  return (
    <div className="card h-100">
      <img
        src={imageUrl || "https://www.bing.com/th/id/OIP.V5H7SFxiAVkT2wY1GqfMHQHaE8?w=245&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"}
        className="card-img-top"
        alt={title}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          {description ? description.slice(0, 100) + "..." : "No description available."}
        </p>

        {/* Author/Date + Read More button container pushed to bottom */}
        <div className="mt-auto">
          {/* Author left, Date right */}
          <div className="d-flex justify-content-between align-items-center mb-2">
            <span
              className="badge bg-dark text-white text-truncate"
              style={{ fontSize: "0.8rem", maxWidth: "100px" }}
              title={author}
            >
              {author ? author : "Dhiraj"}
            </span>
            <small className="text-muted" style={{ fontSize: "0.8rem" }}>
              {publishedAt ? new Date(publishedAt).toLocaleDateString() : ""}
            </small>
          </div>

          {/* Read More button */}
          <a
            href={newsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary w-100"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}
