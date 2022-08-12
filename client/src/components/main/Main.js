import React, { useState } from "react";
import SearchBar from "../navbar/searchBar/SearchBar";
import CartButton from "../navbar/cartButton/CartButton";
import CardCollection from "./cardCollection/CardCollection";
import CardBestSeller from "./cardBestSeller/CardBestSeller";
import Carousel from "infinite-react-carousel";
import { FilledMailIcon, LocationIcon, MailIcon, PhoneIcon } from "../../icons";
import ContactButton from "../navbar/contactButton/ContactButton";
import FooterList from "./footerList/FooterList";

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
      <main className="flex flex-col items-center bg-gradient-to-t from-indigo-500 to-gray-900">
        <div className="flex flex-col gap-28 py-20">
          <section className="flex flex-wrap justify-center w-full">
            <CardCollection title="Bougies" image="Bougies" />
            <CardCollection title="Savon" image="Bougies" />
            <CardCollection title="Poterie" image="Bougies" />
            <CardCollection title="Bijoux" image="Bougies" />
          </section>
          <section className="flex flex-col w-full">
            <h3 className="uppercase font-semibold text-4xl my-10 text-white">
              Meilleure vente
            </h3>
            <Carousel
              autoplay={true}
              autoplaySpeed={1500}
              overScan={5}
              slidesToShow={3}
              centerMode={true}
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
          </section>
          <section className="flex flex-col items-center justify-around w-full p-10 text-white">
            <h2 className="pb-6 text-xl">
              Entrez votre mail pour recevoir des
              <span className="font-semibold text-2xl  text-red-500">
                {" "}
                nouveautés
              </span>{" "}
              et
              <span className="font-semibold text-2xl  text-red-500">
                {" "}
                offres avantageuses
              </span>
            </h2>
            <form action="" className="flex justify-center w-[500px]">
              <input
                type="email"
                placeholder="Entrez votre mail..."
                className="rounded-tl-full rounded-bl-full p-2 w-full"
              />
              <button
                type="button"
                className="flex items-center gap-2 rounded-tr-full rounded-br-full py-2 px-7 bg-red-600 text-white"
              >
                <FilledMailIcon />
                <span>S'abonner</span>
              </button>
            </form>
          </section>
        </div>
        <footer className="flex flex-col border-t-4 border-solid border-red-500">
          <div className="flex  justify-around items-center bg-gray-900 text-slate-300 w-screen py-10">
            <ul className="w-56">
              <h3 className="uppercase font-semibold text-xl text-white text-center">
                A propos
              </h3>
              <ContactButton href="#" icon={<LocationIcon />}>
                1734 Stonecoal Road
              </ContactButton>
              <ContactButton href="#" icon={<PhoneIcon />}>
                +021-95-51-84
              </ContactButton>
              <ContactButton href="#" icon={<MailIcon />}>
                email@email.com
              </ContactButton>
            </ul>
            <FooterList title="Category" />
            <FooterList title="Information" />
            <FooterList title="Service" />
          </div>

          <div className="bg-gray-700 text-center">
            <p className=" text-slate-300 text-center">
              Copyright ©2022 All rights reserved
            </p>
          </div>
        </footer>
      </main>
    </>
  );
};

export default Main;
