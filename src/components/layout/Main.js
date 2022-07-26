import React, { Fragment, useState } from "react";

import News from "../news/News";
import Pagination from "../news/Pagination";

import Container from "../interface/Container";
import Loading from "../interface/Loading";
import Error from "../interface/Error";
import NotFound from "../interface/NotFound";

import { AiOutlineRead } from "react-icons/ai";
import classes from "./Main.module.css";

const Main = (props) => {
  const { news, error, status } = props;
  const [currentPage, setCurrentPage] = useState(1);

  const newsPerPage = 4;
  const totalNews = news.length;
  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstPost = indexOfLastNews - newsPerPage;
  const currentNews = news.slice(indexOfFirstPost, indexOfLastNews);

  const switchPageHandler = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  let mainContent = <NotFound />;

  if (status === "pending") {
    mainContent = <Loading />;
  }

  if (status === "completed" && error) {
    mainContent = <Error />;
  }

  if (status === "completed" && news.length > 0) {
    mainContent = (
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

  // if (status === "completed" && news.length === 0) {
  //   mainContent = <NotFound />;
  // }

  // ${
  //   (status === "pending" ||
  //     (status === "completed" && error) ||
  //     (status === "completed" && news.length === 0) ||
  //     !mainContent) &&
  //   classes["main-full-height"]
  // }

  return (
    <main className={classes.main}>
      <Container
        className={`${classes["main-container"]} ${
          !news.length > 0 && classes["main-full-height"]
        }`}
      >
        <h1 className={classes.heading}>
          Most Read <AiOutlineRead className={classes["heading-icon"]} />
        </h1>
        {mainContent}
      </Container>
    </main>
  );
};

export default Main;
