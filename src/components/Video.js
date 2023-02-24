import React from 'react'

export default function Video ({videoData}) {
    const { embedUrl, title, views,createdAt, upvotes, downvotes } = videoData

  return (
    <div>
        <iframe
        width="919"
        height="525"
        src={embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
        />
        <h2>{title}</h2>
        <p>{views} Views | Uploaded {createdAt}</p>
        <button>{upvotes}👍</button><button>{downvotes}👎</button>
    </div>
  )
}
