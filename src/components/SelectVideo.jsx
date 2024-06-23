import React, { useEffect } from "react";
import MyList from "./MyList";
import Home from "./Home";

const SelectVideo = () => {
  const currentLocation =
    window.location.pathname.split("/")[
      window.location.pathname.split("/").length - 1
    ];
  console.log("currentLocation", currentLocation);

  return currentLocation === "home" ? <Home /> : <MyList />;
};

export default SelectVideo;
