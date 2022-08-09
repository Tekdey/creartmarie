import React from "react";

const SearchBar = () => {
  return (
    <form
      action=""
      className="m-5 w-full flex justify-center items-center max-w-md"
    >
      <select
        name="search_bar"
        id="search_bar"
        className="h-10 p-2 border-tl-1 rounded-tl-3xl rounded-bl-3xl text-center cursor-pointer"
      >
        <option value="all">Toute les categories</option>
        <option value="candle">Bougies</option>
        <option value="jewelry">Bijoux</option>
        <option value="soap">Savon</option>
        <option value="pottery">Poterie</option>
      </select>
      <input
        type="text"
        placeholder="Bougies.. ?"
        className="h-10 w-full border-l px-2"
      />
      <button
        type="button"
        className="bg-red-800 text-white h-10 p-2 rounded-tr-3xl rounded-br-3xl"
      >
        Rechercher
      </button>
    </form>
  );
};

export default SearchBar;
