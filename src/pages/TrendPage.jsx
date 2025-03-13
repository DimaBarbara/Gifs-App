import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrendGifs } from "../redux/operations";
import GifsList from "../components/GifsList/GifsList";
import { setPage } from "../redux/trendSlice";
import s from "../components/SearchBar/SearchBar.module.css";
const TrendPage = () => {
  const dispatch = useDispatch();
  const { gifs, loading, error, page } = useSelector(
    (state) => state.trendGifs
  );

  useEffect(() => {
    dispatch(fetchTrendGifs({ page }));
  }, [page, dispatch]);

  const loadMore = () => {
    dispatch(setPage(page + 1));
  };
  return (
    <div className={s.div}>
      {loading && <p>Loading...</p>}
      {!error && <GifsList gifs={gifs} />}
      <button type="button" onClick={loadMore} className={s.button}>
        <img
          src="../../public/svg/arrow-down.svg"
          alt="LoadMore"
          width="24"
          height="24"
        />
      </button>
    </div>
  );
};

export default TrendPage;
