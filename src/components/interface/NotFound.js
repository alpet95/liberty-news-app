import React from "react";
import classes from "./NotFound.module.css";
import { FaRegSurprise } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className={classes.notfound}>
      <FaRegSurprise className={classes.notfound_icon} />
      <p className={classes.notfound_message}>
        No news available for now.
        <br />
        Please try again later.
      </p>
    </div>
  );
};

export default NotFound;