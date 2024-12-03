import React from 'react'
import CommentLists from './CommentLists'
import { commentsData } from '../utils/constant'

const CommentsContainer = () => {
  return (
    <div>
        <h1 className="text-2xl font-bold">Comments: </h1>
        <CommentLists comments={commentsData}/>
    </div>
  )
}

export default CommentsContainer