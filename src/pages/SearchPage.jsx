import React, { useEffect } from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { fetchGifs } from "../redux/operations";
import { clearGifs, setPage, setQuery } from "../redux/searchSlice";
import GifsList from "../components/GifsList/GifsList";
import s from "../components/SearchBar/SearchBar.module.css";
const SearchPage = () => {
  const dispatch = useDispatch();
  const { gifs, loading, error, query, page } = useSelector(
    (state) => state.searchGifs
  );
  useEffect(() => {
    if (query) {
      dispatch(fetchGifs({ query, page }));
    }
  }, [query, page, dispatch]);

  const handleSearch = (topic) => {
    dispatch(setQuery(topic));
    dispatch(setPage(1));
    dispatch(clearGifs());
  };

  const loadMore = () => {
    dispatch(setPage(page + 1));
  };
  return (
    <div className={s.div}>
      <SearchBar onSubmit={handleSearch} />
      {loading && <p>Loading...</p>}
      {!error && <GifsList gifs={gifs} />}
      {gifs.length > 0 && (
        <button type="button" onClick={loadMore} className={s.button}>
          <img
            src="/svg/arrow-down.svg"
            alt="LoadMore"
            width="24"
            height="24"
          />
        </button>
      )}
    </div>
  );
};

export default SearchPage;
