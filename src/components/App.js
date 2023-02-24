import React, { useState } from "react";
import video from "../data/video.js";
import Video from "./Video"


function App() {
  const [videoData, setVideoData] = useState(video)

  return (
    <div className="App">
      <Video videoData={videoData}/>
    </div>
  );
}

export default App;
