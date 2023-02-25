import React, {useState} from "react";
import video from "../data/video.js";
import Video from "./Video"
import Comments from "./Comments.js";


function App() {

  const [upvotes, setUpvotes] = useState(video.upvotes);
  const [downvotes, setDownvotes] = useState(video.downvotes);

  function handleUpvotes() {
    setUpvotes((upvotes) => upvotes + 1)
  }

  function handleDownvotes() {
    const newVote = downvotes + 1
    setDownvotes(newVote)
  }

  return (
    <div className="App">
      <Video video={video} 
        upvotes={upvotes} 
        downvotes={downvotes}
        handleUpvotes={handleUpvotes}
        handleDownvotes={handleDownvotes}
      />
      <Comments comments={video.comments}/>
    </div>
  );
}

export default App;
