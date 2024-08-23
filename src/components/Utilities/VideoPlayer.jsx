"use client";
import { useState } from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ youtubeId }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleButton = () => {
    setIsOpen((prevState) => !prevState);
  };

  const options = {
    width: "300",
    height: "250",
  };

  return (
    <div>
      {!isOpen && (
        <button
          onClick={handleToggleButton}
          className="fixed bottom-4 right-4 bg-color-accent text-color-dark px-3 rounded mb-2 text-xl hover:bg-color-bright transition-all shadow-xl"
        >
          Watch Trailer
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-4 right-4">
          <button
            onClick={handleToggleButton}
            className="bg-color-dark text-color-secondary float-right px-3 rounded mb-2"
          >
            X
          </button>
          <YouTube
            videoId={youtubeId}
            onReady={(event) => event.target.pauseVideo()}
            opts={options}
            onError={() => alert("Video is broken, please try another")}
          />
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
