import React from "react";

const GifsList = ({ gifs }) => {
  return (
    <ul>
      {gifs.map((gif, index) => (
        <li key={`${gif.id}-${index}`}>
          <img src={gif.images.fixed_height.url} />
        </li>
      ))}
    </ul>
  );
};

export default GifsList;
