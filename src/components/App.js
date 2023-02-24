import React, { useState } from "react";
import video from "../data/video.js";
import Video from "./Video"
import Comments from "./Comments.js";


function App() {
  const [videoData, setVideoData] = useState(video)

  return (
    <div className="App">
      <Video videoData={videoData}/>
      <Comments comments={videoData.comments}/>
    </div>
  );
}

export default App;
