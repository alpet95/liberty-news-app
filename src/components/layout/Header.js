import React from "react";
import Container from "../interface/Container";

import classes from "./Header.module.css";
import {
  AiTwotoneStar,
  AiFillInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

const Header = () => {
  return (
    <header className={classes.header}>
      <Container className={classes.flex}>
        <div className={classes.logo}>
          <span className={classes.logo_title}>
            Liberty News <AiTwotoneStar className={classes.logo_icon} />
          </span>
        </div>

        <nav className={classes.navbar}>
          <ul className={classes.navbar_list}>
            <li>
              <AiFillInstagram />
            </li>
            <li>
              <FaFacebookF />
            </li>
            <li>
              <AiOutlineTwitter />
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;