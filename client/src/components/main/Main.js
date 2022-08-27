import React, { useEffect, useState } from "react";
import SearchBar from "../navbar/searchBar/SearchBar";
import CartButton from "../navbar/cartButton/CartButton";
import CardCollection from "./cardCollection/CardCollection";
import CardBestSeller from "./cardBestSeller/CardBestSeller";
import Carousel from "infinite-react-carousel";
import { FilledMailIcon, LocationIcon, MailIcon, PhoneIcon } from "../../icons";
import ContactButton from "../navbar/contactButton/ContactButton";
import FooterList from "./footerList/FooterList";
import { data } from "../../data";

const Main = () => {
  const [deviceSize, setDeviceSize] = useState(window.innerWidth);
  const [slideToShow, setSlideToShow] = useState(
    window.innerWidth > 1024 ? 3 : window.innerWidth < 550 ? 1 : 2
  );

  useEffect(() => {
    function handleSize() {
      setDeviceSize(window.innerWidth);
    }

    window.addEventListener("resize", handleSize);
    return () => window.removeEventListener("resize", handleSize);
  }, []);

  useEffect(() => {
    if (deviceSize > 1024) {
      setSlideToShow(3);
    } else if (deviceSize < 620) {
      setSlideToShow(1);
    } else {
      setSlideToShow(2);
    }
  }, [deviceSize]);

  return (
    <div className="px-5">
      <header className="flex flex-col justify-center items-center">
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
      <main className="flex flex-col items-center">
        <div className="flex flex-col gap-28 py-20">
          <section className="flex flex-wrap justify-center items-center w-full flex-col xs:flex-row">
            <div className="flex flex-col xs:flex-row">
              <CardCollection title="Bougies" image="Bougies" />
              <CardCollection title="Savon" image="Bougies" />
            </div>
            <div className="flex flex-col xs:flex-row">
              <CardCollection title="Poterie" image="Bougies" />
              <CardCollection title="Bijoux" image="Bougies" />
            </div>
          </section>
          <section className="flex flex-col w-full">
            <h3 className="text-center xs:text-left uppercase font-semibold text-xl sm:text-2xl md:text-4xl my-10 text-white">
              Meilleure vente
            </h3>
            <Carousel
              autoplay={true}
              autoplaySpeed={1500}
              overScan={5}
              slidesToShow={slideToShow}
              centerMode={true}
              arrows={slideToShow === 1 ? false : true}
            >
              {data?.map((item, index) => {
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
            <h2 className="pb-6 text-md xs:text-lg lg:text-xl text-center">
              Entrez votre mail pour recevoir des
              <span className="font-semibold text-lg xs:text-xl lg:text-2xl text-red-500">
                {" "}
                nouveautés
              </span>{" "}
              et
              <span className="font-semibold text-lg xs:text-xl lg:text-2xl text-red-500">
                {" "}
                offres avantageuses
              </span>
            </h2>
            <form
              action=""
              className="flex flex-col gap-2 xs:flex-row justify-center sm:w-[500px] w-[300px]"
            >
              <input
                type="email"
                placeholder="Entrez votre mail..."
                className="rounded-md xs:rounded-tl-full xs:rounded-bl-full p-2 w-full"
              />
              <button
                type="button"
                className="flex items-center justify-center gap-2 rounded-md xs:rounded-tr-full xs:rounded-br-full py-2 px-7 bg-red-600 text-white"
              >
                <FilledMailIcon />
                <span>S'abonner</span>
              </button>
            </form>
          </section>
        </div>
        <footer className="flex flex-col border-t-4 border-solid border-red-500">
          <div className="flex flex-col gap-10 lg:flex-row justify-around items-center bg-gray-900 text-slate-300 w-screen py-10">
            <div className="flex w-full gap-10 xs:gap-0 flex-col items-center xs:flex-row justify-around">
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
            </div>
            <div className="flex flex-col gap-10 xs:gap-0 items-center xs:flex-row w-full justify-around">
              <FooterList title="Information" />
              <FooterList title="Service" />
            </div>
          </div>

          <div className="bg-gray-700 text-center">
            <p className=" text-slate-300 text-center">
              Copyright ©2022 All rights reserved
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Main;
