import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    margin: "16px 8px",
    borderBottom: "1px solid black",
    paddingBottom: 8,
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
  },
  headerText: {
    fontWeight: "bold",
  },
});

const Comment = ({ comment }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Typography className={classes.headerText}>{comment.name}</Typography>
        <Typography className={classes.headerText}>{comment.email}</Typography>
      </div>
      <Typography>{comment.body}</Typography>
    </div>
  );
};

export default Comment;
