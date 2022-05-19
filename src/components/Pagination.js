import React from "react";
// ========== styles ==========
import classes from "../App.module.css";

const Pagination = (props) => {
  // ========== variables ==========
  const { postsPerPage, totalPosts, currentPage, onClickPageNumber } = props;

  // ========== populate page numbers ==========
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className={classes.pagination}>
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={number === currentPage ? classes.active : ""}
            onClick={() => onClickPageNumber(number)}
          >
            <span>{number}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;