import React from "react";
import { clearGifs } from "../../redux/searchSlice";
import { useDispatch } from "react-redux";

const SearchBar = ({ onSubmit }) => {
  const dispatch = useDispatch();
  const submitForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const topic = form.elements.topic.value.trim();
    if (topic === "") return;
    onSubmit(topic);
    form.reset();
  };

  return (
    <form onSubmit={submitForm}>
      <input type="text" name="topic" placeholder="text name of gif" />
      <button type="submit">Search</button>
      <button type="button" onClick={() => dispatch(clearGifs())}>
        X
      </button>
    </form>
  );
};

export default SearchBar;
