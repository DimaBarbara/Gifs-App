import React from "react";
import s from "./GifsList.module.css";

const GifsList = ({ gifs }) => {
  return (
    <ul className={s.ul}>
      {gifs.map((gif, index) => (
        <li className={s.li} key={`${gif.id}-${index}`}>
          <img className={s.imgList} src={gif.images.fixed_height.url} />
        </li>
      ))}
    </ul>
  );
};

export default GifsList;
