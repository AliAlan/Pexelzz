import React from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
const VideoDetail = () => {
  const { id } = useParams();
  const { response } = useFetch(`videos/videos/${id}`);
  console.log(response);
  return (
    <div className="container mx-auto p-4 detail flex flex-col items-center">
      <div className="details flex items-center justify-between py-8 w-full">
        <div className="flex items-center ">
          <h2 className="mr-3">
            Artist:{" "}
            <span className="text-bold font-bold ">{response?.user?.name}</span>
          </h2>
          <a target="_blank" href={response?.user?.url}>
            <BsBoxArrowUpRight size={16} />
          </a>
        </div>
        <a
          className="rounded border font-medium py-3 px-5 hover:bg-gray-600 hover:text-white cta"
          download
          href={
            response?.video_files?.length > 1
              ? response?.video_files[0]?.link
              : response?.video_files?.link
          }
          target="_blank"
        >
          Download the Video
        </a>
      </div>
      <div>
        <video
          preload="metadata"
          controls
          muted
          loop
          poster={response?.image}
          src={
            response?.video_files?.length > 1
              ? response?.video_files[0]?.link
              : response?.video_files?.link
          }
        ></video>
      </div>
    </div>
  );
};
export default VideoDetail;
