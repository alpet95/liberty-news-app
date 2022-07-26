import React from "react";

import classes from "./Error.module.css";
import { BiErrorCircle } from "react-icons/bi";

const Error = () => {
  return (
    <div className={classes.error}>
      <BiErrorCircle className={classes["error-icon"]} />
      <p className={classes["error-message"]}>
        Failed to load news from the server.
        <br />
        Please try again later.
      </p>
    </div>
  );
};

export default Error;
