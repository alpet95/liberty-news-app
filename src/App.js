import React, { useEffect } from "react";

import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import Footer from "./components/layout/Footer";

import getNews from "./library/api";
import useFetch from "./hooks/useFetch";

import classes from "./App.module.css";

const App = () => {
  const { sendRequest, data: news, error, status } = useFetch(getNews);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  return (
    <div className={classes.app}>
      <Header />
      <Main news={news} error={error} status={status} />
      <Footer />
    </div>
  );
};

export default App;
