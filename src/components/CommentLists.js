import React from 'react'
import Comments from './Comments'

const CommentLists = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
        < Comments data={comment} />
        <div className='pl-5 ml-5'>
            <CommentLists comments={comment.replies}/>
        </div>
    </div>
  ))
}

export default CommentLists