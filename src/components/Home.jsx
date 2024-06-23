import React from "react";
import MovieCard from "./MoviewCard";

const Home = ({ data }) => {
  return (
    <>
      <h1 className="font-bold text-[58px] text-center mb-8">HOME</h1>
      <div className="flex flex-wrap gap-y-10 justify-between">
        {data.map((movie) => (
          <MovieCard key={movie.img_id} data={movie} />
        ))}
      </div>
    </>
  );
};

export default Home;
