import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRandomGifs } from "../redux/operations";
import s from "../components/SearchBar/SearchBar.module.css";
const RandomPage = () => {
  const { gif, loading, error } = useSelector((state) => state.randomGifs);
  const dispatch = useDispatch();
  useEffect(() => {
    handleRandom();
  }, []);
  function handleRandom() {
    dispatch(fetchRandomGifs());
  }
  return (
    <div className={s.div}>
      {loading && <p>Loading...</p>}
      {error && <p>Error loading GIF</p>}
      {!loading && !error && gif && gif.images && (
        <img src={gif.images.original.url} alt="Random Gif" />
      )}
      <button type="button" onClick={handleRandom} className={s.button}>
        <img
          src="../../public/svg/last.svg"
          alt="Another"
          width="24"
          height="24"
        />
      </button>
    </div>
  );
};

export default RandomPage;
