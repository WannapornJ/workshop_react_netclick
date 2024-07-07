import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "./MoviewCard";
import { useOutletContext } from "react-router-dom";

const Home = () => {
  const [movieData, setMovieData] = useState([]);

  const getMovieData = async () => {
    const res = await axios.get("../MOCK_MOVIE_DATA.json");
    setMovieData(res.data);
  };

  useEffect(() => {
    getMovieData();
  }, []);
  console.log("movieData", movieData);
  const [myList, setMyList] = useOutletContext();
  return (
    <>
      <h1 className="font-bold text-[58px] text-center mb-8">HOME</h1>
      <div className="flex flex-wrap gap-y-10 justify-between">
        {movieData ? (
          movieData.map((movie) => (
            <MovieCard
              key={movie.id}
              data={movie}
              myList={myList}
              setMyList={setMyList}
            />
          ))
        ) : (
          <p>Loading..</p>
        )}
      </div>
    </>
  );
};

export default Home;
