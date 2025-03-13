import React from "react";
import { clearGifs } from "../../redux/searchSlice";
import { useDispatch } from "react-redux";
import s from "./SearchBar.module.css";

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
    <form onSubmit={submitForm} className={s.form}>
      <input
        type="text"
        name="topic"
        placeholder="Search..."
        className={s.input}
      />
      <button type="submit" className={s.button}>
        <img
          src="../../../public/svg/checkmark.svg"
          alt="Search"
          width="24"
          height="24"
        />
      </button>
      <button
        type="button"
        onClick={() => dispatch(clearGifs())}
        className={s.button}
      >
        <img
          src="../../../public/svg/cross.svg"
          alt="Clear"
          width="24"
          height="24"
        />
      </button>
    </form>
  );
};

export default SearchBar;
