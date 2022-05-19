import React, { useState, useEffect } from "react";
// ========== components ==========
import Post from "./components/Post";
import Pagination from "./components/Pagination";
// ========== data ==========
// import posts from "./data/posts";
// ========== styles ==========
import classes from "./App.module.css";

const App = () => {
  // ========== state ==========
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  // ========== fetch api ==========
  const fetchDataHandler = async () => {
    try {
      const response = await fetch(
        "https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=fy05XmmeVqql1CdM5uqJ6aeWVXFzfATV"
      );
      const data = await response.json();
      const loadedNews = [];

      console.log(data.results);

      for (const key in data.results) {
        loadedNews.push({
          id: key,
          title:
            data.results[key].title !== ""
              ? data.results[key].title
              : "Unknown Title",
          article:
            data.results[key].abstract !== ""
              ? data.results[key].abstract
              : "Unknown Abstract",
          image:
            data.results[key].media.length !== 0
              ? data.results[key].media[0]["media-metadata"][2].url
              : null,
        });
      }
      setNews(loadedNews);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDataHandler();
  }, []);

  // ========== variables ==========
  const postsPerPage = 3;
  const totalPosts = news.length;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = news.slice(indexOfFirstPost, indexOfLastPost);

  // ========== handlers ==========
  const changePageHandler = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className={classes.app}>
      <h1 className={classes.heading}>News App</h1>
      <p className={classes.subheading}>Stay up to date</p>
      <Post posts={currentPosts} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={totalPosts}
        currentPage={currentPage}
        onClickPageNumber={changePageHandler}
      />
    </div>
  );
};

export default App;