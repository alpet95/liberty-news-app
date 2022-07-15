import React from "react";
import Container from "../interface/Container";

import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <Container className={classes.flex}>
        <span className={classes.copyright}>Alpet &#169; 2022</span>
      </Container>
    </footer>
  );
};

export default Footer;