import React from "react";
import classes from "./Container.module.css";

const Container = (props) => {
  const classBundle = `${classes.container} ${props.className}`;
  return <div className={classBundle}>{props.children}</div>;
};

export default Container;