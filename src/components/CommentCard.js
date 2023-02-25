import React from "react";

export default function CommentCard({user, comment}) {
    return (
        <div className="user-comments">
            <h3>{user}</h3>
            <p>{comment}</p>
        </div>
    )
}