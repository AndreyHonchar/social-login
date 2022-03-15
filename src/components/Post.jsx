import React, { useState } from "react";
import { Divider, makeStyles, Paper, Typography } from "@material-ui/core";
import CommentsList from "./CommentsList";

const useStyles = makeStyles({
  root: {
    margin: "16px 0",
    padding: "8px 16px",
  },
  showCommentsBtn: {
    fontSize: 14,
    color: "rgba(0, 0, 0, 0.5)",
    cursor: "pointer",
    textAlign: "end",
    marginRight: 16,
  },
  divider: {
    marginTop: 8,
  },
});

const Post = ({ post }) => {
  const classes = useStyles();
  const [showComments, setShowComments] = useState(false);

  return (
    <Paper variant="elevation" elevation={8} className={classes.root}>
      <Typography variant={"h5"}>{post.title}</Typography>
      <Typography>{post.body}</Typography>
      <Divider className={classes.divider} />
      <Typography
        className={classes.showCommentsBtn}
        onClick={() => {
          setShowComments((prevState) => !prevState);
        }}
      >
        {showComments ? "Hide comments" : "Click to load comments"}
      </Typography>
      {showComments && <CommentsList postId={post.id} />}
    </Paper>
  );
};

export default Post;
