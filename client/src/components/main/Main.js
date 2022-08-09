import React, { useEffect, useState } from "react";
import SearchBar from "../navbar/searchBar/SearchBar";
import CartButton from "../navbar/cartButton/CartButton";
import CardCollection from "./cardCollection/CardCollection";
import CardBestSeller from "./cardBestSeller/CardBestSeller";
import Carousel from "infinite-react-carousel";
// import Slider from "./slider/Slider";

const Main = () => {
  const [data, setData] = useState([
    {
      productName: "Bougies avec boix flotté 1",
      image: "Bougies",
      price: "20",
      category: "Bougies",
    },
    {
      productName: "Bougies avec boix flotté 2",
      image: "Bougies",
      price: "20",
      category: "Bougies",
    },
    {
      productName: "Bougies avec boix flotté 3",
      image: "Bougies",
      price: "20",
      category: "Bougies",
    },
    {
      productName: "Bougies avec boix flotté 4",
      image: "Bougies",
      price: "20",
      category: "Bougies",
    },
    {
      productName: "Bougies avec boix flotté 5",
      image: "Bougies",
      price: "20",
      category: "Bougies",
    },
    {
      productName: "Bougies avec boix flotté 6",
      image: "Bougies",
      price: "20",
      category: "Bougies",
    },
  ]);

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
      <main className="w-screen h-screen bg-green-500 flex flex-col items-center">
        <div className=" bg-orange-400 max-w-lg h-screen">
          <section className="flex flex-wrap justify-center w-full bg-purple-400">
            <CardCollection title="Bougies" image="Bougies" />
            <CardCollection title="Savon" image="Bougies" />
            <CardCollection title="Poterie" image="Bougies" />
            <CardCollection title="Bijoux" image="Bougies" />
          </section>
          <section className="flex flex-col w-full bg-blue-400">
            <h3 className="uppercase font-semibold text-2xl py-10">
              Meilleurs vente
            </h3>
            <Carousel
              autoplay="false"
              autoplaySpeed="1500"
              overScan="5"
              slidesToShow="3"
              centerMode="true"
            >
              {data.map((item, index) => {
                return (
                  <CardBestSeller
                    key={index}
                    productName={item?.productName}
                    image={item?.image}
                    price={item?.price}
                    category={item?.category}
                  />
                );
              })}
            </Carousel>
            <div className="mt-10">
              <h1>Hello world</h1>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Main;
