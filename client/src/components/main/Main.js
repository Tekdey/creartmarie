import React from "react";
import SearchBar from "../navbar/searchBar/SearchBar";
import CartButton from "../navbar/cartButton/CartButton";
import CardCollection from "./cardCollection/CardCollection";

const Main = () => {
  return (
    <>
      <header className="flex flex-col justify-center items-center bg-gray-900">
        <img
          src="/assets/image/logo_blanc_red-zoom.png"
          className="w-96 mt-10"
          alt="logo"
        />
        <SearchBar />
        <div className="flex justify-end px-5 w-full">
          <CartButton />
        </div>
      </header>
      <main>
        <section className="flex flex-wrap justify-center">
          <CardCollection title="Bougies" image="Bougies" />
          <CardCollection title="Savon" image="Bougies" />
          <CardCollection title="Poterie" image="Bougies" />
          <CardCollection title="Bijoux" image="Bougies" />
        </section>
      </main>
    </>
  );
};

export default Main;
