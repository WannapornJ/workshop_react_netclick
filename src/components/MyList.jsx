import React, { useEffect } from "react";

const MyList = () => {
  //   const getMoviesData = async () => {
  //     try {
  // 		const res = await
  //     } catch (error) {}
  //   };
  useEffect(() => {
    getMoviesData();
  }, []);

  return <div>MyList</div>;
};

export default MyList;
