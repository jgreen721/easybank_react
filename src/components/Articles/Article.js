import React from "react";

const Article = ({ article }) => {
  return (
    <div className="article-card">
      <div className="overlay"></div>
      <div className="img-container">
        <img className="article-img" src={article.img} alt="" />
      </div>
      <div className="article-content">
        <h4 className="author-h4">By {article.author}</h4>
        <h2 className="author-title">{article.title}</h2>
        <p className="blurb">{article.blurb}</p>
      </div>
    </div>
  );
};

export default Article;
