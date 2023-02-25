import React, {useState} from 'react'
import CommentCard from './CommentCard'


export default function Comments({comments}) {
    const [showComments, setShowComments] = useState(true)

    function handleToggle() {
        setShowComments((showComments) => !showComments)
    }


    const commentsToDisplay = comments.map(comment => <CommentCard key={comment.id} user={comment.user} comment={comment.comment}/>)
    
    const displayComments = (showComments) ? (
        <>
            <h2>{comments.length} Comments</h2>
            {commentsToDisplay}
        </>
    ) : null

  return (
    <div className="comments-container">
        <button onClick={handleToggle}>Hide Comments</button>
        {displayComments}

    </div>
  )
}
