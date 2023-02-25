import React from 'react'

export default function Video ({video, upvotes, downvotes, handleUpvotes, handleDownvotes}) {
    
    const { embedUrl, title, views,createdAt } = video

  return (
    <div>
        <iframe
            width="919"
            height="525"
            src={embedUrl}
            frameBorder="0"
            allowFullScreen
            title={title}
        />
        <h1>{title}</h1>
        <p>{views} Views | Uploaded {createdAt}</p>
        <button id="upvotes" onClick={handleUpvotes}>{upvotes}👍</button>
        <button id="downvotes" onClick={()=>handleDownvotes()}>{downvotes}👎</button>
    </div>
  )
}
