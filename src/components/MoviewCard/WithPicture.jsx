import React from "react";

const WithPicture = ({ img }) => {
  return (
    <div className="w-[272px] h-[125px] rounded-md hover:hidden block">
      <img
        src={`https://picsum.photos/id/${img}/200/300`}
        className="w-[220px] h-[125px] rounded-md object-cover"
        alt="movie"
      />
    </div>
  );
};

export default WithPicture;
