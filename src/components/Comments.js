import React from 'react'


export default function Comments({comments}) {
    console.log(comments)

    const commentsToDisplay = comments.map(comment => 
        <div class="user-comments">
            <h3>{comment.user}</h3>
            <p>{comment.comment}</p>
        </div>
    )
    
  return (
    <div class="comments-container">
        <button>Hide Comments</button>
        <h2>{comments.length} Comments</h2>
        {commentsToDisplay}
    </div>
  )
}
