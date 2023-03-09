import React from "react";
import { BsArrow90DegRight } from "react-icons/bs";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
const PhotoDetail = () => {
  const { id } = useParams();

  const { response } = useFetch(`v1/photos/${id}`);
  return (
    <div className="container mx-auto p-4 detail flex flex-col items-center">
      <div className="details flex items-center justify-between py-8 w-full">
        <div className="flex items-center">
          <h2 className="mr-3">
            Artist:{" "}
            <span className="text-bold font-bold ">
              {" "}
              {response?.photographer}
            </span>
          </h2>
          <a target="_blank" href={response?.photographer_url}>
            <BsArrow90DegRight size={16} />
          </a>
        </div>
        <a
          className="rounded border font-medium py-3 px-5 hover:bg-gray-600 hover:text-white"
          download
          href={response?.src?.original}
          target="_blank"
        >
          Download
        </a>
      </div>
      <img
        className="max-w-xl scale-70  object-cover"
        src={response?.src?.original}
        alt={response?.alt}
        width={response?.width}
        height={response?.height}
      />
    </div>
  );
};

export default PhotoDetail;
