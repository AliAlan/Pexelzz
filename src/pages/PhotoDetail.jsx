import React from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
const PhotoDetail = () => {
  const { id } = useParams();

  const { response } = useFetch(`v1/photos/${id}`);
  return (
    <div className="container mx-auto p-4 detail flex flex-col items-center">
      <div className="details flex items-center justify-between  py-8 w-full">
        <div className="flex items-center">
          <h2 className="mr-3 flex items-center ">
            Artist:
            <span className="text-bold font-bold ml-1 ">
              {response?.photographer}
            </span>
          </h2>
          <a
            className="flex items-center"
            target="_blank"
            href={response?.photographer_url}
          >
            <BsBoxArrowUpRight size={16} />
          </a>
        </div>
        <a
          className="rounded border font-medium py-3 px-5 hover:bg-gray-600 hover:text-white cta"
          download
          href={response?.src?.original}
          target="_blank"
        >
          Download the Image
        </a>
      </div>
      <img
        className="max-w-xl scale-70 img-detail  object-cover"
        src={response?.src?.original}
        alt={response?.alt}
        width={response?.width}
        height={response?.height}
      />
    </div>
  );
};

export default PhotoDetail;
