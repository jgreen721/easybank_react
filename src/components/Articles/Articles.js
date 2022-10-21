import React from "react";
import "./Articles.css";
import Article from "./Article";
import articles from "./articles.json";

const Articles = () => {
  console.log(articles);
  return (
    <div className="articles-parent">
      <h1 className="articles-header">Latest Articles</h1>
      <div className="articles-row">
        {articles.map((a) => (
          <Article key={a.id} article={a} />
        ))}
      </div>
    </div>
  );
};

export default Articles;
