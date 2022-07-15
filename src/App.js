import React, { Fragment, useState, useEffect, useCallback } from "react";

import Header from "./components/layout/Header";
import News from "./components/News";
import Pagination from "./components/Pagination";
import Footer from "./components/layout/Footer";
import Container from "./components/interface/Container";
import Loading from "./components/interface/Loading";
import Error from "./components/interface/Error";
import NotFound from "./components/interface/NotFound";

import classes from "./App.module.css";
import { AiOutlineRead } from "react-icons/ai";

const App = () => {
  // ========== state ==========
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  // ========== fetch request ==========
  const fetchNewsHandler = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const url =
        "https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=fy05XmmeVqql1CdM5uqJ6aeWVXFzfATV";
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Network response error!");
      }

      const data = await response.json();
      const fetchedNews = [];

      for (const key in data.results) {
        fetchedNews.push({
          id: data.results[key].id !== null ? data.results[key].id : key,
          title:
            data.results[key].title !== ""
              ? data.results[key].title
              : "Recent News",
          abstract:
            data.results[key].abstract !== ""
              ? data.results[key].abstract
              : "No Abstract",
          image:
            data.results[key].media.length !== 0
              ? data.results[key].media[0]["media-metadata"][2].url
              : "https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        });
      }
      setNews(fetchedNews);
      setLoading(false);
    } catch (error) {
      console.error(error.message);
      setError(true);
    }
  }, []);

  useEffect(() => {
    fetchNewsHandler();
  }, [fetchNewsHandler]);

  // ========== variables ==========
  const newsPerPage = 4;
  const totalNews = news.length;
  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstPost = indexOfLastNews - newsPerPage;
  const currentNews = news.slice(indexOfFirstPost, indexOfLastNews);

  // ========== handlers ==========
  const switchPageHandler = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // ========== conditional content ==========
  let content = <NotFound />;

  if (loading) {
    content = <Loading />;
  }

  if (news.length > 0) {
    content = (
      <Fragment>
        <Pagination
          newsPerPage={newsPerPage}
          totalNews={totalNews}
          currentPage={currentPage}
          getPageNumber={switchPageHandler}
        />
        <News news={currentNews} />
      </Fragment>
    );
  }

  if (error) {
    content = <Error />;
  }

  return (
    <div
      className={`${classes.app} ${
        !news.length ? classes.app_full_height : ""
      }`}
    >
      <Header />
      <main className={classes.main}>
        <Container>
          <h1 className={classes.heading}>
            Most Read <AiOutlineRead className={classes.heading_icon} />
          </h1>
          {content}
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default App;