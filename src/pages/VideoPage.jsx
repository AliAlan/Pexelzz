import React from "react";
import { useState } from "react";
import { Hero, VideoCard } from "../components";
import useFetch from "../hooks/useFetch";

const VideoPage = () => {
  const [searchVideo, setSearchVideo] = useState("");
  const { response } = searchVideo
    ? useFetch(`videos/search?query=${searchVideo}?per_page=20`)
    : useFetch("videos/popular?per_page=20");
  return (
    <div className="container mx-auto px-4">
      <Hero setSearchVideo={setSearchVideo} isVideo={true} />
      <div className="grid grid-cols-3 gap-6 items-start py-8">
        {response ? (
          response?.videos?.map((item) => (
            <VideoCard
              key={item.id}
              id={item.id}
              src={item?.video_files[0]?.link}
              // w={item.width}
              // h={item.height}
            />
          ))
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default VideoPage;
