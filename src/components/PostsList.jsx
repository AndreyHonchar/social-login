import React from "react";
import { useGetPostsQuery } from "../store/services/postsApi";
import { CircularProgress, makeStyles } from "@material-ui/core";
import Post from "./Post";

const useStyles = makeStyles({
  root: {
    margin: "16px 32px",
  },
});

const PostsList = () => {
  const classes = useStyles();
  const { data, isLoading } = useGetPostsQuery();

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <div className={classes.root}>
      {data.map((post) => (
        <Post post={post} key={`post_${post.id}`} />
      ))}
    </div>
  );
};

export default PostsList;
