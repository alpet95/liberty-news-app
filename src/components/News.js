import React from "react";
import classes from "./News.module.css";

const News = (props) => {
  const { news } = props;

  return (
    <ul className={classes.news}>
      {news.map((article) => (
        <li className={classes.news_article} key={article.id}>
          <div className={classes.news_article__image}>
            <img src={article.image} alt={article.title} />
          </div>
          <div className={classes.news_article__text}>
            <h3>{article.title}</h3>
            <p>{article.abstract}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default News;