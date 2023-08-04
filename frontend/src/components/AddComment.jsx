import React from 'react'
import { AddCommentBox, CommentAuthorInput, CommentTextInput, PostButton } from '../styles'

const AddComment = () => {
  return (
      <AddCommentBox>
    <CommentAuthorInput placeholder="Your Name" type="text" name="name"  />
    <CommentTextInput placeholder="Write Your Comment..." type="text" name="comment" />
    <PostButton>Post</PostButton>
    </AddCommentBox>
  )
}

export default AddComment