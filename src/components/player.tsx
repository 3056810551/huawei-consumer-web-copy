import React from "react";

const VideoBackground = () => {
  return (
    <div className="video-background">
      <video autoPlay loop muted>
        <source
          src="https://pic.ibaotu.com/00/92/91/90f888piCjkw.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default VideoBackground;
