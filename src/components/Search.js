import React from "react";

const Search = ({ search, setInput, input }) => {
  let inputHandler = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="my-5 mx-auto col-md-10 col-lg-7 d-flex search-bar shadow-sm rounded">
      <input
        className="rounded-start py-1 px-3 w-100 lh-lg border-0"
        type="text"
        placeholder="搜尋相片... (請用英文搜尋)"
        onChange={inputHandler}
        value={input}
      />
      <button className="rounded-end bg-white border-0 px-3" onClick={search}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
          className="text-secondary bi bi-search"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
      </button>
    </div>
  );
};

export default Search;
