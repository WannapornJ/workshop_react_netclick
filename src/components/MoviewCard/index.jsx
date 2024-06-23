import React from "react";
import WithPicture from "./WithPicture";
import MovieCardWDetailed from "./WithDetailed";

const MovieCard = ({ data }) => {
  return (
    <>
      <div className="block hover:hidden">
        <WithPicture img={data.image_id} />
      </div>
      <div className="hidden hover:block">
        <MovieCardWDetailed data={data} />
      </div>
    </>
  );
};

export default MovieCard;
