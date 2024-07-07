import axios from "axios";
import React from "react";
import { FaPlay } from "react-icons/fa";
import { FaCheck, FaThumbsUp, FaPlus } from "react-icons/fa6";
import { useOutletContext } from "react-router-dom";

const MovieCard = ({ data }) => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [myList, setMyList] = useOutletContext();

  const handleAddList = async (movie_id) => {
    return;
  };
  const handleAddLike = async (movie_id) => {
    return;
  };
  return (
    <div className="w-[272px] h-[240px] flex flex-col items-center bg-black rounded-md">
      <img
        src={`https://picsum.photos/id/${data.image_id}/200/300`}
        className="w-[272px] h-[125px] rounded-t-md object-cover"
        alt="movie"
      />
      <div className="h-[115px] w-[272px] p-4 flex flex-col justify-between text-[12px]">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button>
              <FaPlay className="size-3 hover:text-red-400" />
            </button>
            <button
              onClick={() => handleAddList(data.id)}
              disabled={myList.list.indexOf(data.id) > -1 ? true : false}
            >
              {myList.list.indexOf(data.id) === -1 ? (
                <FaPlus className="hover:text-red-400 size-4" />
              ) : (
                <FaCheck className=" size-4 text-red-400" />
              )}
            </button>
            <button
              onClick={() => handleAddLike(data.id)}
              disabled={myList.like.indexOf(data.id) > -1 ? true : false}
            >
              <FaThumbsUp
                className="hover:text-red-400 size-4"
                style={{
                  color: myList.like.indexOf(data.id) > -1 && "#f87171",
                }}
              />
            </button>
          </div>
        </div>
        <div className="flex gap-2 justify-between items-center">
          <p className="font-bold text-sm">{data.movie_title}</p>
          <p className="border rounded-3xl py-1 px-2 min-w-[35px] text-center">
            {data.rating}
          </p>
        </div>
        <div className="flex gap-2">
          <p>{data.genre} - </p>
          <p>{data.duration_minutes} mins</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
