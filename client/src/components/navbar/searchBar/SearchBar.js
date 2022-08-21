import React from "react";

const SearchBar = () => {
  return (
    <form
      action=""
      className="m-5 w-full flex flex-col xs:flex-row justify-center items-center max-w-md xs:gap-0 gap-3"
    >
      <select
        name="search_bar"
        id="search_bar"
        className="h-10 rounded-md xs:rounded-none p-2 border-t-2 xs:border-t-0 xs:border-tl-1 xs:rounded-tl-3xl xs:rounded-bl-3xl text-center cursor-pointer w-full xs:w-auto"
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
        className="h-10 rounded-md xs:rounded-none w-full border-l px-2"
      />
      <button
        type="button"
        className="bg-red-800 rounded-md xs:rounded-none text-white h-10 p-2 xs:rounded-tr-3xl xs:rounded-br-3xl w-full xs:w-auto order-2 xs:-order-none"
      >
        Rechercher
      </button>
    </form>
  );
};

export default SearchBar;
