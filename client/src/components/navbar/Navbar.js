import React, { useState } from "react";
import ContactButton from "./contactButton/ContactButton";
import {
  PhoneIcon,
  MailIcon,
  LocationIcon,
  UserIcon,
  LogoutIcon,
  SigninIcon,
} from "../../icons";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <nav>
      <div className="flex justify-between bg-gray-800 text-slate-200">
        <ul className="flex text-sm font-medium">
          <ContactButton href="#" icon={<PhoneIcon />}>
            +021-95-51-84
          </ContactButton>
          <ContactButton href="#" icon={<MailIcon />}>
            email@email.com
          </ContactButton>
          <ContactButton href="#" icon={<LocationIcon />}>
            1734 Stonecoal Road
          </ContactButton>
        </ul>
        {isLoggedIn ? (
          <ul className="flex text-sm font-medium">
            <ContactButton href="#" icon={<UserIcon />}>
              Mon compte
            </ContactButton>
            <ContactButton href="#" icon={<LogoutIcon />}>
              Deconnexion
            </ContactButton>
          </ul>
        ) : (
          <ul className="flex text-sm font-medium">
            <ContactButton href="#" icon={<SigninIcon />}>
              Connexion
            </ContactButton>
          </ul>
        )}
      </div>
      <header className="bg-gray-900 flex flex-col justify-center items-center">
        <img
          src="/assets/image/logo_blanc_red-zoom.png"
          className="w-96"
          alt="logo"
        />
        <form action="">
          <input type="text" />
          <button type="button" className="bg-red-500">
            Rechercher
          </button>
        </form>
      </header>
    </nav>
  );
};

export default Navbar;
