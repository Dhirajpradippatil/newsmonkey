import React, { useEffect, useState } from "react";
import NewsItem from "./newsitem";
import Navbar from "./navbar";
import Footer from "./footer";

export default function News() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("all"); // default to all news

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        // If category is "all", do NOT include the category parameter
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=80e49d7caf2d4f1c8ed6ec804c65b20d`;
        if (category !== "all") {
          url += `&category=${category}`;
        }

        const response = await fetch(url);
        const data = await response.json();
        setArticles(data.articles);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching news:", error);
        setLoading(false);
      }
    };

    fetchNews();
  }, [category]);

  if (loading) return <h2>Loading...</h2>;

  return (
    <>
      <Navbar onSelectCategory={setCategory} />
      <div className="container my-4">
        <h1 className="mb-4 text-capitalize">
          {category === "all" ? "Top Headlines" : category + " News"}
        </h1>
        <div className="row">
          {articles.map((article, index) => (
            <div className="col-md-4 mb-4 d-flex" key={index}>
              <NewsItem
                title={article.title}
                description={article.description}
                imageUrl={article.urlToImage}
                newsUrl={article.url}
                author={article.author}
                  publishedAt={article.publishedAt}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
}
