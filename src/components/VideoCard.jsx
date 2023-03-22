import { useState } from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";

const VideoCard = ({ id, src, w, h, img }) => {
  const [isHover, setIsHover] = useState(false);
  function hoverHandler() {
    setIsHover((prevState) => (prevState = !prevState));
  }
  return (
    <Link to={`/videoDetail/${id}`}>
      <div>
        {src ? (
          <video
            onMouseEnter={hoverHandler}
            onMouseLeave={() =>
              setIsHover((prevState) => (prevState = !prevState))
            }
            poster={img}
            controls={isHover}
            muted
            loop
            src={src}
            preload="metadata"
          ></video>
        ) : (
          <Loading />
        )}
      </div>
    </Link>
  );
};

export default VideoCard;
