import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRandomGifs } from "../redux/operations";

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
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error loading GIF</p>}
      {!loading && !error && gif && gif.images && (
        <img src={gif.images.original.url} alt="Random Gif" />
      )}
      <button type="button" onClick={handleRandom}>
        Another
      </button>
    </div>
  );
};

export default RandomPage;
