import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrendGifs } from "../redux/operations";
import GifsList from "../components/GifsList/GifsList";
import { setPage } from "../redux/trendSlice";

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
    <div>
      {loading && <p>Loading...</p>}
      {!error && <GifsList gifs={gifs} />}
      <button type="button" onClick={loadMore}>
        Load More
      </button>
    </div>
  );
};

export default TrendPage;
