import React, { useState } from "react";
import { useDataContext } from "../context/globalContext";

export const Search = () => {
  const [input, setInput] = useState("");

  const { setSearchTerm } = useDataContext();

  const handleSearch = (e) => {
    e.preventDefault();
    let searchInput = input.trim();
    setSearchTerm(searchInput);
  };

  return (
    <div className="mb-3">
      <form
        className="mx-auto flex max-w-xl items-center"
        onSubmit={handleSearch}
      >
        <div className="relative w-full ">
          <input
            type="text"
            name="search"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="block min-w-[401px] rounded-lg border  font-semibold text-white bg-[#1b3252] p-2.5 text-sm  focus:border-blue-500 focus:ring-blue-500"
            placeholder="Search retreats by title"
          />
        </div>
        <button
          type="submit"
          className="ms-2 rounded-lg border border-blue-900 bg-[#1b3252] p-2.5 text-sm font-medium text-white hover:bg-[#2d4d7a] focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          <svg
            className="h-4 w-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </button>
      </form>
    </div>
  );
};
