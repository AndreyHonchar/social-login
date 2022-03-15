import React from "react";
import { useGetCommentsByPostIdQuery } from "../store/services/postsApi";
import { CircularProgress } from "@material-ui/core";
import Comment from "./Comment";

const CommentsList = ({ postId }) => {
  const { data, isLoading } = useGetCommentsByPostIdQuery(postId);

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <div>
      {data.map((comment) => (
        <Comment comment={comment} key={`comment_${comment.id}`} />
      ))}
    </div>
  );
};

export default CommentsList;
