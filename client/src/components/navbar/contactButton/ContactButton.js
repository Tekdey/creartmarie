import React from "react";
import PropType from "prop-types";

const ContactButton = ({ children, href, icon }) => {
  return (
    <li>
      <a href={href} className="flex items-center p-2 hover:text-white">
        <span className="text-red-700">{icon}</span>
        {children}
      </a>
    </li>
  );
};

ContactButton.PropType = {
  children: PropType.string,
  href: PropType.string,
  icon: PropType.object,
};

export default ContactButton;
