import React from "react";
import {
  CommentsHeader,
  CommentsTextContainer,
  AuthorText,
  CommentText,
} from "../styles";

const Comments = ({ comments }) => {
  return (
    <>
      <CommentsHeader>Comments</CommentsHeader>
      <hr />
      {comments?.map((comment) => (
        <>
          <CommentsTextContainer key={comment.id}>
            <AuthorText>{comment.author}</AuthorText>
            <CommentText>{comment.postedOn}</CommentText>
          </CommentsTextContainer>
          <CommentsTextContainer>
            <CommentText>{comment.text}</CommentText>
          </CommentsTextContainer>
          <hr />
        </>
      ))}
    </>
  );
};

export default Comments;
