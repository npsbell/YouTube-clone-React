import React from "react";
import "./Video.css";
import PlayVideo from "../../Components/PlayVideo/PlayVideo";
import Recommened from "../../Components/Recommened/Recommened";
import { useParams } from "react-router-dom";

const Video = () => {
  const { videoId, categoryId } = useParams();

  return (
    <div className="play-container">
      <PlayVideo videoId={videoId} />
      <Recommened categoryId={categoryId} />
    </div>
  );
};

export default Video;
