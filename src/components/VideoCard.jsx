import { useState } from "react";
import { Link } from "react-router-dom";

const VideoCard = ({ id, src, w, h }) => {
  const [isHover, setIsHover] = useState(false);
  function hoverHandler() {
    setIsHover((prevState) => (prevState = !prevState));
  }
  return (
    <Link to={`/videoDetail/${id}`}>
      <div>
        <video
          onMouseEnter={hoverHandler}
          onMouseLeave={() =>
            setIsHover((prevState) => (prevState = !prevState))
          }
          controls={isHover}
          muted
          loop
          src={src}
        ></video>
      </div>
    </Link>
  );
};

export default VideoCard;
