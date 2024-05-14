import React from "react";
import LOGO_USC from "../../assets/img/logousc.png";
const HeaderBar = ({ items }) => {
  return (
    <header className="shadow-sm p-5">
      <nav className="flex w-full flex-row items-center justify-between">
        <ul className="ml-5">
          <img src={LOGO_USC} alt="Logo" className="w-12 h-auto" />
        </ul>
        <div className="flex flex-row gap-5">
          {items.map((item, index) => (
            <button
              key={index}
              className="p-5 hover:text-blue-500 hover:opacity-90 hover:shadow-sm hover:bg-gray-100 transition-opacity text-xl"
              onClick={item.click}
            >
              {item.title}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default HeaderBar;
