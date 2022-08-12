import React, { useEffect, useState } from "react";

const FooterList = ({ title }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((res) => setData(res));
  }, []);

  console.log(data);

  return (
    <ul className="flex flex-col gap-4">
      <h1 className="uppercase font-semibold text-xl text-white py-2">
        {title}
      </h1>
      {data.map(
        (item, index) =>
          item?.type === title && (
            <li key={index} className="text-sm">
              {item.name}
            </li>
          )
      )}
    </ul>
  );
};

export default FooterList;
