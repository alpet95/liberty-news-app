import React from "react";
import classes from "./Pagination.module.css";

const Pagination = (props) => {
  const { newsPerPage, totalNews, currentPage, getPageNumber } = props;
  const pageNumbers = [];
  for (let page = 1; page <= Math.ceil(totalNews / newsPerPage); page++) {
    pageNumbers.push(page);
  }

  return (
    <nav>
      <ul className={classes.pagination}>
        {pageNumbers.map((number) => (
          <li
            key={number}
            id={number}
            className={`${classes.number} ${
              number === currentPage ? classes.active : ""
            }`}
            onClick={() => getPageNumber(number)}
          >
            <span>{number}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
