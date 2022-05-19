import React from "react";
import classes from "../App.module.css";

const Post = (props) => {
  const { posts } = props;

  return (
    <ul className={classes.posts}>
      {posts.map((post) => (
        <li key={post.id}>
          <div className={classes.image}>
            <img src={post.image} alt={post.title} />
          </div>
          <div className={classes.text}>
            <h3>{post.title}</h3>
            <p>{post.article}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Post;
