import React, { useEffect, useState } from "react";
import MyList from "./MyList";
import Home from "./Home";
import axios from "axios";
import { useLocation } from "react-router-dom";

const SelectVideo = () => {
  const [movieData, setMovieData] = useState([]);
  const [myList, setMyList] = useState([]);

  const { pathname } = useLocation();
  const currentLocation = pathname.split("/")[pathname.split("/").length - 1];

  const getMovieData = async () => {
    const res = await axios.get("../MOCK_MOVIE_DATA.json");
    setMovieData(res.data);
  };

  console.log("MovieData", movieData);

  useEffect(() => {
    getMovieData();
  }, []);

  console.log("currentLocation", currentLocation);

  return currentLocation === "home" ? (
    <Home data={movieData} />
  ) : (
    <MyList list={myList} />
  );
};

export default SelectVideo;
